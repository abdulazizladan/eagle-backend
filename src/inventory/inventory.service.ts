import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {

  async create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
  }

  async findAll() {
    return `This action returns all inventory`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  async remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
