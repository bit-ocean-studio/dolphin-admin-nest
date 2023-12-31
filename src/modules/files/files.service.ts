import { Injectable } from '@nestjs/common'
import { sep } from 'path'

import { FileVo } from './vo'

@Injectable()
export class FilesService {
  upload(files: Express.Multer.File[]): FileVo[] {
    const filesResult =
      files?.map((file) => {
        const { fieldname, filename, mimetype, size, originalname } = file
        const path = file.path.replaceAll(sep, '/')
        return new FileVo({
          path,
          fieldname,
          filename,
          originalname,
          mimetype,
          size
        })
      }) ?? []
    return filesResult
  }
}
