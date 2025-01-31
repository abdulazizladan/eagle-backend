import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { MedicalInfo } from './entities/medicalInfo.entity';
import { Promotion } from './entities/promotion.entity';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(MedicalInfo)
    private readonly medicalInfoRepository: Repository<MedicalInfo>,
    @InjectRepository(Promotion)
    private readonly promotionRepository: Repository<Promotion>
  ) {}

  async create(createStaffDto: CreateStaffDto) {
    try {
      const staff = await this.staffRepository.create(
        {
          id: createStaffDto.id,
          firstName: createStaffDto.firstName,
          middleName: createStaffDto.middleName,
          lastName: createStaffDto.lastName,
          gender: createStaffDto.gender,
          dateOfBirth: createStaffDto.dateOfBirth,
          contact: await this.contactRepository.save(createStaffDto.contact),
          medicalInfo: await this.medicalInfoRepository.save(createStaffDto.medicalInfo),
          promotions: await this.promotionRepository.save(createStaffDto.promotions)
        }
      );
      this.staffRepository.save(staff);
      return {
        success: true,
        message: 'Staff added successfully',
        data: staff,
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
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
        relations: ['contact', 'medicalInfo', 'promotions', 'employmentHistory', 'credentials']
      });
      if(staff) {
        return {
          success: true,
          data: staff,
          message: 'Staff details found'
        }
      }else {
        throw new NotFoundException(`Site with ID ${id} not found`);
      }

    }catch(error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    const staff = await this.staffRepository.findOne({where: { id } });
    if(!staff) {
      throw new NotFoundException(`Staff with ID ${id} not found`)
    }else {
      this.staffRepository.merge(staff, updateStaffDto);
      return await this.staffRepository.save(staff);
    }
  }

  async remove(id: string): Promise<Staff | any> {
    try {
      const staff = await this.staffRepository.findOne(
        {where: {id}}
      )
      if(!staff){
        throw new NotFoundException(`Site with ID ${id} not found`);
      }else{
        this.staffRepository.remove(staff);
        return {
          success: true,
          message: `Staff with id ${id} removed`
        }
      }

    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
}
