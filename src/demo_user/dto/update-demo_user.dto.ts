import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoUserDto } from './create-demo_user.dto';

export class UpdateDemoUserDto extends PartialType(CreateDemoUserDto) {}
