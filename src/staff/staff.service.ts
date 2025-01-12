import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>
  ) {}

  create(createStaffDto: CreateStaffDto) {
    return 'This action adds a new staff';
  }

  async findAll() {
    try {
      const staff = await this.staffRepository.find()
      return {
        success: true,
        data: staff,
        message: 'Staff list fetched succcessfully'
      }
    }catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: string): Promise<Staff | any> {
    try {
      const staff = await this.staffRepository.findOne({
        where: {id}, 
        relations: ['contact']
      });
      if(staff) {
        return {
          success: true,
          data: staff,
          message: 'Staff details found'
        }
      }else {
        return {
          success: true,
          data: null,
          message: 'Staff details not found'
        }
      }

    }catch(error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
