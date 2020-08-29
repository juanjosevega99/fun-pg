import { IsNotEmpty } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  lastName: string

  @IsNotEmpty()
  age: number

  @IsNotEmpty()
  email: string
}