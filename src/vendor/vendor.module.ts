import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Vendor, 
        Contact
      ]
    )
  ],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
