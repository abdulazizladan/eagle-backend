import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './organization/organization.module';
import { StaffModule } from './staff/staff.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { VendorModule } from './vendor/vendor.module';
import { TrainingModule } from './training/training.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    InventoryModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    OrganizationModule,
    StaffModule,
    UserModule,
    AuthModule,
    ProjectModule,
    VendorModule,
    TrainingModule,
    AssetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
