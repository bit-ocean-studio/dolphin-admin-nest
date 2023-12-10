import { ConflictException, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { plainToClass, plainToInstance } from 'class-transformer'
import { I18nService } from 'nestjs-i18n'

import type { PageDto } from '@/class'
import type { I18nTranslations } from '@/generated/i18n.generated'
import { PrismaService } from '@/shared/prisma/prisma.service'

import type { CreateUserDto } from './dto/create-user.dto'
import type { UpdateUserDto } from './dto/update-user.dto'
import { UserVo } from './vo'

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly i18nService: I18nService<I18nTranslations>
  ) {}

  // 创建用户
  async create(createUserDto: CreateUserDto): Promise<UserVo> {
    try {
      return plainToClass(
        UserVo,
        await this.prismaService.user.create({
          data: {
            ...createUserDto
          }
        })
      )
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const { meta, code } = e
        if (code === 'P2002') {
          if ((meta?.target as string[]).includes('username')) {
            throw new ConflictException(this.i18nService.t('user.USERNAME.ALREADY.EXIST'))
          }
        }
      }
      throw e
    }
  }

  async findMany(pageDto: PageDto): Promise<[UserVo[], number]> {
    const { page, pageSize, searchText, startTime, endTime } = pageDto
    console.log(page, pageSize, searchText, startTime, endTime)
    const users = await this.prismaService.user.findMany()
    const total = await this.prismaService.user.count()
    const userVoList = plainToInstance(UserVo, users)
    return [userVoList, total]
  }

  async findOneById(id: number): Promise<UserVo | null> {
    return plainToClass(
      UserVo,
      await this.prismaService.user.findUnique({
        where: {
          id,
          deletedAt: null
        }
      })
    )
  }

  async findOneByUsername(username: string): Promise<UserVo | null> {
    return plainToClass(
      UserVo,
      await this.prismaService.user.findUnique({
        where: {
          username,
          deletedAt: null
        }
      })
    )
  }

  update(_id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
