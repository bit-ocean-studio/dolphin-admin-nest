import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, NotContains } from 'class-validator'

import { I18nUtils } from '@/utils'

const { t } = I18nUtils

export class PatchDictionaryItemDto {
  @ApiPropertyOptional({ description: '值' })
  @MaxLength(250, { message: t('common.VALUE.LENGTH') })
  @NotContains(' ', { message: t('common.VALUE.NO.WHITESPACE') })
  @IsString({ message: t('common.VALUE.INVALID') })
  @IsOptional()
  value?: string

  @ApiPropertyOptional({ description: '名称' })
  @MaxLength(50, { message: t('common.LABEL.LENGTH') })
  @IsString({ message: t('common.LABEL.INVALID') })
  @IsOptional()
  label?: string

  @ApiPropertyOptional({ description: '备注' })
  @MaxLength(500, { message: t('common.REMARK.LENGTH') })
  @IsString({ message: t('common.REMARK.INVALID') })
  @IsOptional()
  remark?: string

  @ApiPropertyOptional({ description: '是否启用' })
  @IsBoolean({ message: t('common.ENABLED.INVALID') })
  @IsOptional()
  enabled?: boolean

  @ApiPropertyOptional({ description: '排序' })
  @IsNumber({}, { message: t('common.SORT.INVALID') })
  @IsOptional()
  sort?: number
}
