import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import type { UserSettingTrans } from '@prisma/client'
import { Prisma } from '@prisma/client'
import { plainToClass } from 'class-transformer'
import _ from 'lodash'
import { I18nService } from 'nestjs-i18n'

import { LanguageCode, type SortColumnKey } from '@/enums'
import type { I18nTranslations } from '@/generated/i18n.generated'
import { PrismaService } from '@/shared/prisma/prisma.service'
import { I18nUtils } from '@/utils'

import type { PageUserSettingDto } from './dto'
import type { CreateUserSettingDto } from './dto/create-user-setting.dto'
import type { UpdateUserSettingDto } from './dto/update-user-setting.dto'
import { PageUserSettingVo, UserSettingVo } from './vo'

@Injectable()
export class UserSettingsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly i18nService: I18nService<I18nTranslations>
  ) {}

  // 创建用户设置
  async create(createUserSettingDto: CreateUserSettingDto, userId: number): Promise<UserSettingVo> {
    try {
      const { label, remark, ...rest } = createUserSettingDto
      const userSetting = await this.prismaService.userSetting.create({
        data: {
          ...rest,
          createdBy: userId,
          userId,
          userSettingTrans: {
            createMany: {
              data: [
                ...Object.values(LanguageCode).map((lang) => ({
                  label: label[lang],
                  remark: remark[lang],
                  lang,
                  createdBy: userId
                }))
              ]
            }
          }
        }
      })
      return plainToClass(UserSettingVo, { ...userSetting, label, remark })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const { code, meta } = e
        if (code === 'P2002') {
          if ((meta?.target as string[]).includes('key')) {
            throw new BadRequestException(this.i18nService.t('common.RESOURCE.CONFLICT'))
          }
        }
      }
      throw e
    }
  }

  // 设置列表
  async findMany(pageUserSettingDto: PageUserSettingDto): Promise<PageUserSettingVo> {
    const {
      page,
      pageSize,
      searchText,
      startTime,
      endTime,
      sortColumnKeys,
      sortOrders,
      key,
      value,
      enabled,
      builtIn,
      id,
      userId
    } = pageUserSettingDto

    const orderBy = sortColumnKeys.map((field: SortColumnKey, index) => ({
      [field]: sortOrders[index]
    }))

    const where: Prisma.UserSettingWhereInput = {
      AND: [
        {
          createdAt: {
            ...(startTime && { gte: startTime }),
            ...(endTime && { lte: endTime })
          },
          id: {
            ...(id && { equals: id })
          },
          key: {
            ...(key && { contains: key })
          },
          value: {
            ...(value && { contains: value })
          },
          enabled: {
            ...(enabled && { equals: enabled })
          },
          builtIn: {
            ...(builtIn && { equals: builtIn })
          },
          userId: {
            ...(userId && { equals: userId })
          }
        }
      ],
      OR: searchText
        ? [
            { key: { contains: searchText } },
            { value: { contains: searchText } },
            { id: { equals: _.toNumber(searchText) < 100000 ? _.toNumber(searchText) : 0 } },
            { userId: { equals: _.toNumber(searchText) < 100000 ? _.toNumber(searchText) : 0 } }
          ]
        : undefined
    }

    const results = await this.prismaService.userSetting.findMany({
      where,
      include: {
        userSettingTrans: {
          where: {
            deletedAt: null
          },
          select: {
            label: true,
            remark: true,
            lang: true
          }
        }
      },
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const total = await this.prismaService.userSetting.count({ where })
    return plainToClass(PageUserSettingVo, {
      records: results.map((userSetting) => ({
        ...userSetting,
        label: I18nUtils.generateTrans<UserSettingTrans>(userSetting.userSettingTrans, 'label'),
        remark: I18nUtils.generateTrans<UserSettingTrans>(userSetting.userSettingTrans, 'remark')
      })),
      total,
      page,
      pageSize
    })
  }

  // 根据 ID 查询用户设置
  async findOneById(id: number): Promise<UserSettingVo> {
    const userSetting = await this.prismaService.userSetting.findUnique({
      where: { id },
      include: { userSettingTrans: true }
    })
    if (!userSetting) {
      throw new NotFoundException(this.i18nService.t('common.RESOURCE.NOT.FOUND'))
    }
    return plainToClass(UserSettingVo, {
      ...userSetting,
      label: I18nUtils.generateTrans<UserSettingTrans>(userSetting.userSettingTrans, 'label'),
      remark: I18nUtils.generateTrans<UserSettingTrans>(userSetting.userSettingTrans, 'remark')
    })
  }

  // 根据 Key 查询用户设置
  async findOneByKey(key: string): Promise<UserSettingVo> {
    const userSetting = await this.prismaService.userSetting.findUnique({
      where: { key },
      include: { userSettingTrans: true }
    })
    if (!userSetting) {
      throw new NotFoundException(this.i18nService.t('common.RESOURCE.NOT.FOUND'))
    }
    return plainToClass(UserSettingVo, {
      ...userSetting,
      label: I18nUtils.generateTrans<UserSettingTrans>(userSetting.userSettingTrans, 'label'),
      remark: I18nUtils.generateTrans<UserSettingTrans>(userSetting.userSettingTrans, 'remark')
    })
  }

  // 修改用户设置
  async update(
    id: number,
    updateUserSettingDto: UpdateUserSettingDto,
    userId: number
  ): Promise<UserSettingVo> {
    const { label, remark, ...rest } = updateUserSettingDto
    try {
      const userSetting = await this.prismaService.userSetting.update({
        where: {
          id,
          deletedAt: null
        },
        data: {
          ...rest,
          updatedBy: userId,
          userSettingTrans: {
            updateMany: [
              ...Object.values(LanguageCode).map((lang) => ({
                where: {
                  userSettingId: id,
                  lang: LanguageCode[lang],
                  deletedAt: null
                },
                data: {
                  label: label[lang],
                  remark: remark[lang],
                  updatedBy: userId
                }
              }))
            ]
          }
        }
      })
      return plainToClass(UserSettingVo, { ...userSetting, label, remark })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const { code } = e
        if (code === 'P2025') {
          throw new NotFoundException(this.i18nService.t('common.RESOURCE.NOT.FOUND'))
        }
      }
      throw e
    }
  }

  // 启用设置
  async enable(id: number, userId: number): Promise<void> {
    try {
      await this.prismaService.userSetting.update({
        where: {
          id,
          deletedAt: null
        },
        data: {
          enabled: true,
          updatedBy: userId
        }
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const { code } = e
        if (code === 'P2025') {
          throw new NotFoundException(this.i18nService.t('common.RESOURCE.NOT.FOUND'))
        }
      }
      throw e
    }
  }

  // 禁用设置
  async disable(id: number, userId: number): Promise<void> {
    try {
      await this.prismaService.userSetting.update({
        where: {
          id,
          deletedAt: null
        },
        data: {
          enabled: false,
          updatedBy: userId
        }
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const { code } = e
        if (code === 'P2025') {
          throw new NotFoundException(this.i18nService.t('common.RESOURCE.NOT.FOUND'))
        }
      }
      throw e
    }
  }

  // 删除用户设置
  async remove(id: number, userId: number): Promise<void> {
    try {
      // 删除多语言翻译
      const deleteUserSettingTrans = this.prismaService.userSettingTrans.updateMany({
        where: {
          userSettingId: id,
          deletedAt: null
        },
        data: {
          deletedAt: new Date().toISOString(),
          deletedBy: userId
        }
      })
      // 删除设置
      const deleteUserSetting = this.prismaService.userSetting.update({
        where: {
          id,
          deletedAt: null
        },
        data: {
          deletedAt: new Date().toISOString(),
          deletedBy: userId
        }
      })
      await this.prismaService.$transaction([deleteUserSettingTrans, deleteUserSetting])
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const { code } = e
        if (code === 'P2003') {
          throw new BadRequestException(this.i18nService.t('common.DELETE.FAILED'))
        }
        if (code === 'P2025') {
          throw new NotFoundException(this.i18nService.t('common.RESOURCE.NOT.FOUND'))
        }
      }
      throw e
    }
  }
}
