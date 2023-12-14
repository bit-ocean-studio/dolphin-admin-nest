import { Lang } from '@dolphin-admin/utils'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { plainToClass } from 'class-transformer'
import type { FilterQuery, SortOrder } from 'mongoose'
import { Model } from 'mongoose'
import { I18nContext, I18nService } from 'nestjs-i18n'

import { type SortColumnKey } from '@/enums'
import type { I18nTranslations } from '@/generated/i18n.generated'
import { RedisService } from '@/shared/redis/redis.service'

import type { CreateLocaleDto, PageLocaleDto, UpdateLocaleDto } from './dto'
import { Locale } from './schemas'
import type { LocaleResourceVO } from './vo'
import { LocaleVo, PageLocaleVo } from './vo'

@Injectable()
export class LocalesService {
  constructor(
    @InjectModel(Locale.name) private readonly LocaleModel: Model<Locale>,
    private readonly i18nService: I18nService<I18nTranslations>,
    private readonly redisService: RedisService
  ) {}

  private readonly LOCALE_RESOURCES_CACHE_KEY = 'locales:resources'

  private getLocaleResourcesCacheKey(lang: string) {
    return `${this.LOCALE_RESOURCES_CACHE_KEY}:${lang}`
  }

  private clearAllResourcesCache() {
    Object.values(Lang).forEach((lang) => {
      this.redisService.delete(this.getLocaleResourcesCacheKey(lang))
    })
  }

  async create(createLocaleDto: CreateLocaleDto): Promise<LocaleVo> {
    const locale = await new this.LocaleModel(createLocaleDto).save()
    this.clearAllResourcesCache()
    return plainToClass(LocaleVo, locale)
  }

  async findAll(pageLocaleDto: PageLocaleDto): Promise<PageLocaleVo> {
    const { page, pageSize, keywords, startTime, endTime, sortColumnKeys, sortOrders, key, ns } =
      pageLocaleDto

    const query: FilterQuery<Locale> = {
      ...(key && { key: { $regex: key, $options: 'i' } }),
      ...(ns && { ns: { $regex: ns, $options: 'i' } }),
      ...(startTime && { createdAt: { $gte: startTime } }),
      ...(endTime && { createdAt: { $lte: endTime } }),
      ...(keywords && {
        $or: [
          { key: { $regex: keywords, $options: 'i' } },
          { ns: { $regex: keywords, $options: 'i' } },
          ...Object.values(Lang).map((lang) => ({
            [lang]: { $regex: keywords, $options: 'i' }
          }))
        ]
      })
    }

    const sort: [string, SortOrder][] = sortColumnKeys.map((field: SortColumnKey, index) => [
      field,
      sortOrders[index]
    ])

    return plainToClass(PageLocaleVo, {
      records: await this.LocaleModel.find(query)
        .sort(sort)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec(),
      total: await this.LocaleModel.countDocuments(query),
      page,
      pageSize
    })
  }

  async findManyByLang(lang: string): Promise<LocaleResourceVO[]> {
    const CACHE_KEY = this.getLocaleResourcesCacheKey(lang)
    const cache = await this.redisService.get(CACHE_KEY)
    if (cache) {
      return JSON.parse(cache)
    }
    const results = await this.LocaleModel.aggregate([
      {
        $match: {
          $and: [
            {
              [lang]: { $exists: true }
            },
            { [lang]: { $ne: null } },
            { [lang]: { $ne: '' } }
          ]
        }
      },
      { $project: { _id: 0, ns: 1, key: 1, value: `$${lang}` } },
      { $group: { _id: '$ns', items: { $push: { key: '$key', value: '$value' } } } },
      {
        $project: {
          _id: 0,
          ns: '$_id',
          resources: {
            $arrayToObject: {
              $map: {
                input: '$items',
                as: 'item',
                in: {
                  k: '$$item.key',
                  v: '$$item.value'
                }
              }
            }
          }
        }
      }
    ]).exec()
    await this.redisService.set(CACHE_KEY, JSON.stringify(results), 60 * 60 * 24)
    return results
  }

  async findOneById(id: string): Promise<LocaleVo> {
    const locale = await this.LocaleModel.findById(id).exec()
    if (!locale) {
      throw new NotFoundException(
        this.i18nService.t('common.RESOURCE.NOT.FOUND', { lang: I18nContext.current()!.lang })
      )
    }
    return plainToClass(LocaleVo, locale)
  }

  async update(id: string, updateLocaleDto: UpdateLocaleDto): Promise<LocaleVo> {
    await this.findOneById(id)
    const locale = await this.LocaleModel.findByIdAndUpdate(id, updateLocaleDto).exec()
    this.clearAllResourcesCache()
    return plainToClass(LocaleVo, locale)
  }

  async remove(id: string): Promise<void> {
    await this.findOneById(id)
    await this.LocaleModel.findByIdAndDelete(id).exec()
  }
}