import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UnauthorizedException
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { plainToClass } from 'class-transformer'

import { BaseResponseVo, PageDto, PageVo } from '@/class'
import { User } from '@/decorators'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'
import { UserVo } from './vo'

@ApiTags('用户')
@ApiBearerAuth('bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '创建用户' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiOperation({ summary: '用户列表' })
  @Get()
  async findMany(@Query() pageDto: PageDto) {
    const { page, pageSize } = pageDto
    const [data, total] = await this.usersService.findMany(pageDto)
    return new PageVo<UserVo>({ page, pageSize, total, data })
  }

  @ApiOperation({ summary: '个人信息' })
  @Get('me')
  async findCurrent(@User('sub') id: number) {
    const currentUser = await this.usersService.findOneById(id)
    if (!currentUser) {
      throw new UnauthorizedException('身份认证失败')
    }
    return new BaseResponseVo<UserVo>({
      data: plainToClass(UserVo, currentUser)
    })
  }

  @ApiOperation({ summary: '用户详情' })
  @Get(':id(\\d+)')
  async findOneById(@Param('id') id: number) {
    const user = await this.usersService.findOneById(id)
    if (!user) {
      throw new NotFoundException('用户不存在')
    }
    return new BaseResponseVo<UserVo>({
      data: plainToClass(UserVo, user)
    })
  }

  @ApiOperation({ summary: '修改用户' })
  @Patch(':id(\\d+)')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @ApiOperation({ summary: '删除用户' })
  @Delete(':id(\\d+)')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}
