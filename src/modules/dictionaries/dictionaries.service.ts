import { Injectable, NotFoundException } from '@nestjs/common'
import type { Prisma } from '@prisma/client'
import { plainToClass } from 'class-transformer'
import _ from 'lodash'
import { I18nContext, I18nService } from 'nestjs-i18n'

import { SortOrder } from '@/enums'
import type { I18nTranslations } from '@/generated/i18n.generated'
import { PrismaService } from '@/shared/prisma/prisma.service'

import type {
  CreateDictionaryDto,
  PageDictionaryDto,
  PatchDictionaryDto,
  UpdateDictionaryDto
} from './dto'
import { DictionaryVo, ListDictionarySelectItemVo, PageDictionaryVo } from './vo'

@Injectable()
export class DictionariesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly i18nService: I18nService<I18nTranslations>
  ) {}

  async create(createDictionaryDto: CreateDictionaryDto, createdBy: number) {
    return plainToClass(
      DictionaryVo,
      await this.prismaService.dictionary.create({
        data: {
          ...createDictionaryDto,
          createdBy
        }
      })
    )
  }

  async findMany(pageDictionaryDto: PageDictionaryDto) {
    const { page, pageSize, keywords, startTime, endTime, orderBy, code, enabled, id } =
      pageDictionaryDto

    const where: Prisma.DictionaryWhereInput = {
      deletedAt: null,
      AND: [
        {
          createdAt: {
            ...(startTime && { gte: startTime }),
            ...(endTime && { lte: endTime })
          },
          id: {
            ...(id && { equals: id })
          },
          code: {
            ...(code && { contains: code })
          },
          enabled: {
            ...(enabled && { equals: enabled })
          }
        }
      ],
      OR: keywords
        ? [
            { id: { equals: _.toNumber(keywords) < 100000 ? _.toNumber(keywords) : 0 } },
            { code: { contains: keywords } },
            { label: { contains: keywords } },
            { remark: { contains: keywords } }
          ]
        : undefined
    }

    const records = await this.prismaService.dictionary.findMany({
      where,
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const total = await this.prismaService.dictionary.count({ where })

    return plainToClass(PageDictionaryVo, { records, total, page, pageSize })
  }

  async findOneById(id: number) {
    const dictionary = await this.prismaService.dictionary.findUnique({
      where: {
        id,
        deletedAt: null
      }
    })

    if (!dictionary) {
      throw new NotFoundException(
        this.i18nService.t('common.RESOURCE.NOT.FOUND', { lang: I18nContext.current()!.lang })
      )
    }

    return plainToClass(DictionaryVo, dictionary)
  }

  async findOneByCode(code: string) {
    const dictionary = await this.prismaService.dictionary.findUnique({
      where: {
        code,
        enabled: true, // 只查询启用的字典
        deletedAt: null
      },
      include: {
        dictionaryItems: {
          where: {
            enabled: true, // 只查询启用的字典项
            deletedAt: null
          },
          select: {
            id: true,
            label: true,
            value: true
          },
          orderBy: [
            {
              sort: SortOrder.ASC
            },
            {
              createdAt: SortOrder.DESC
            }
          ]
        }
      }
    })

    if (!dictionary) {
      throw new NotFoundException(
        this.i18nService.t('common.RESOURCE.NOT.FOUND', { lang: I18nContext.current()!.lang })
      )
    }

    return plainToClass(ListDictionarySelectItemVo, {
      records: dictionary?.dictionaryItems ?? [],
      code
    })
  }

  async findManyByCodes(codes: string[]) {
    const dictionaries = await this.prismaService.dictionary.findMany({
      where: {
        code: {
          in: codes
        },
        enabled: true,
        deletedAt: null
      },
      include: {
        dictionaryItems: {
          where: {
            enabled: true,
            deletedAt: null
          },
          select: {
            id: true,
            label: true,
            value: true
          },
          orderBy: [
            {
              sort: SortOrder.ASC
            },
            {
              createdAt: SortOrder.DESC
            }
          ]
        }
      }
    })

    return codes.map((code) => {
      const dictionary = dictionaries.find((d) => d.code === code)
      return plainToClass(ListDictionarySelectItemVo, {
        records: dictionary?.dictionaryItems ?? [],
        code
      })
    })
  }

  async update(
    id: number,
    updateOrPatchDictionaryDto: UpdateDictionaryDto | PatchDictionaryDto,
    updatedBy: number
  ) {
    return plainToClass(
      DictionaryVo,
      await this.prismaService.dictionary.update({
        where: {
          id,
          deletedAt: null
        },
        data: {
          ...updateOrPatchDictionaryDto,
          updatedBy
        }
      })
    )
  }

  async remove(id: number, deletedBy: number) {
    const deleteDictionaryItem = this.prismaService.dictionaryItem.updateMany({
      where: {
        dictionaryId: id,
        deletedAt: null
      },
      data: {
        deletedAt: new Date().toISOString(),
        deletedBy
      }
    })

    const deleteDictionary = this.prismaService.dictionary.update({
      where: {
        id,
        deletedAt: null
      },
      data: {
        deletedAt: new Date().toISOString(),
        deletedBy
      }
    })

    await this.prismaService.$transaction([deleteDictionaryItem, deleteDictionary])
  }
}
