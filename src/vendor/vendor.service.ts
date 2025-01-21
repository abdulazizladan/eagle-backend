import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Repository } from 'typeorm';
import { Vendor } from './entities/vendor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}

  async create(createVendorDto: CreateVendorDto) {
    try {
      const vendor = await this.vendorRepository.create(
        {
          name: createVendorDto.name,
          contact: await this.contactRepository.save(createVendorDto.contact)
        }
      );
      this.vendorRepository.save(vendor)
      return {
        success: true,
        data: vendor,
        message: 'Vendor added successfuly'
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
      const vendors = await this.vendorRepository.find({relations: ['contact']})
      if(vendors.length == 0) {
        return {
          success: true,
          data: null,
          message: 'No vendors found'
        }
      }else {
        return {
          success: true,
          data: vendors,
          message: 'Vendors fetched successfullly'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  async remove(id: number) {
    try {
      const vendor  = await this.vendorRepository.find({where: {id}})
    } catch(error) {
      
    }
   
  }
}
