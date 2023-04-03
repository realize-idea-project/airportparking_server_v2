import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

const dtoSwagger = {
  phone: {
    example: '01011111111',
    description: '-없는 11자리 전화번호',
  },
  code: {
    example: '4892',
    description: '4자리의 인증코드',
  },
  isSuccess: {
    example: true,
    description: '유효한 코드인지 확인 결과',
  },
};

export interface IVerifyReqCode {
  phone: string;
  code: string;
}

export interface IVerifyResCode {
  isSuccess: boolean;
}

export class VerifyCodeReqDto implements IVerifyReqCode {
  @ApiProperty(dtoSwagger.phone)
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty(dtoSwagger.code)
  @IsNotEmpty()
  @IsString()
  code: string;
}

export class VerifyCodeResDto implements IVerifyResCode {
  @ApiProperty(dtoSwagger.isSuccess)
  @IsNotEmpty()
  @IsBoolean()
  isSuccess: boolean;
}