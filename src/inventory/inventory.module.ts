import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Item } from './entities/item.entity';
import { Activity } from './entities/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Inventory, 
        Item, 
        Activity
      ]
    )
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
