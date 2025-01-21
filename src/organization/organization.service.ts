import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Injectable()
export class OrganizationService {

  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    try {
      const org = await this.organizationRepository.create({
        id: createOrganizationDto.id,
        name: createOrganizationDto.name,
        logo: createOrganizationDto.logo,
        mission: createOrganizationDto.mission,
        vision: createOrganizationDto.vision,
        dateEstablished: createOrganizationDto.dateEstablished,
        contact: await this.contactRepository.save(createOrganizationDto.contact)
      });
      this.organizationRepository.save(org);
      return {
        success: true,
        data: org,
        message: 'Organization added successfully' 
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
      const organization = await this.organizationRepository.find({take: 1, relations: ['contact']});
      if(organization.length > 0) {
        return {
          success: true,
          data: organization[0],
          message: 'Organization found'
        }
      }else{
        return {
          success: true,
          data: null,
          message: 'No organization record found'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
