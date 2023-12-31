import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  NotContains
} from 'class-validator'

import { I18nUtils } from '@/utils'

const { t } = I18nUtils

export class CreateSettingDto {
  @ApiProperty({ description: '键' })
  @MaxLength(50, { message: t('common.KEY.LENGTH') })
  @IsString({ message: t('common.KEY.INVALID') })
  @NotContains(' ', { message: t('common.KEY.NO.WHITESPACE') })
  @IsNotEmpty({ message: t('common.KEY.NOT.EMPTY') })
  key: string

  @ApiProperty({ description: '值' })
  @MaxLength(250, { message: t('common.VALUE.LENGTH') })
  @IsString({ message: t('common.VALUE.INVALID') })
  @NotContains(' ', { message: t('common.VALUE.NO.WHITESPACE') })
  @IsNotEmpty({ message: t('common.VALUE.NOT.EMPTY') })
  value: string

  @ApiProperty({ description: '名称' })
  @MaxLength(50, { message: t('common.LABEL.LENGTH') })
  @IsString({ message: t('common.LABEL.INVALID') })
  @IsNotEmpty({ message: t('common.LABEL.NOT.EMPTY') })
  label: string

  @ApiPropertyOptional({ description: '备注' })
  @MaxLength(500, { message: t('common.REMARK.LENGTH') })
  @IsString({ message: t('common.REMARK.INVALID') })
  @IsOptional()
  remark?: string

  @ApiProperty({ description: '是否启用' })
  @IsBoolean({ message: t('common.ENABLED.INVALID') })
  @IsNotEmpty({ message: t('common.ENABLED.NOT.EMPTY') })
  enabled: boolean
}
