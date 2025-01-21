import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @ApiOperation({summary: "Add a new item"})
  @Post('item')
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @ApiOperation({summary: "Get complete inventory"})
  @Get('items')
  findAll() {
    return this.inventoryService.findAll();
  }

  @ApiOperation({summary: "Get item details"})
  @Get('item/:id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(+id);
  }

  @ApiOperation({summary: "Update item details"})
  @Patch('item/:id')
  update(@Param('id') id: string, @Body() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryService.update(+id, updateInventoryDto);
  }

  @ApiOperation({summary: "Delete item"})
  @Delete('item/:id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
