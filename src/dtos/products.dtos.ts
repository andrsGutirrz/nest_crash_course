import { IsString, IsNumber, IsNotEmpty } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;
  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
// TODO: create update as well
export class UpdateProductDto extends PartialType(CreateProductDto) {}
