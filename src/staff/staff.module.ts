import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { Contact } from './entities/contact.entity';
import { MedicalInfo } from './entities/medicalInfo.entity';
import { Promotion } from './entities/promotion.entity';
import { Credential } from './entities/credential.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Staff, 
        Contact,
        Credential,
        MedicalInfo, 
        Promotion
      ])
  ],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
