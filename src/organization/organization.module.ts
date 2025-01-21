import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { Unit } from './entities/unit.entity';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Organization, 
        Unit,
        Contact,
        Unit
      ]
    )
  ],
  controllers: [
    OrganizationController
  ],
  providers: [
    OrganizationService
  ],
})
export class OrganizationModule {}
