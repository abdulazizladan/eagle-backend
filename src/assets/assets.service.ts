import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Repository } from 'typeorm';
import { AssetsRegistry } from './entities/assets-registry.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(AssetsRegistry)
    private readonly assetsRepository: Repository<AssetsRegistry>
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    try {
      const data = await this.assetsRepository.create(createAssetDto);
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getStats() {
    try {

    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll() {
    try {
      const registry = await this.assetsRepository.find({relations: ['vehicles', 'sites', 'sites.buildings', 'appliances', 'machines']})
      if(registry) return {
        success: true,
        data: registry,
        message: 'data found'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
