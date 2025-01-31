import { Injectable } from '@nestjs/common';
import { Appliance } from '../../../assets/entities/appliance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApplianceService {
    constructor(
        @InjectRepository(Appliance)
        private readonly applianceRepository: Repository<Appliance>
    ) {}

    findAll() {

    }

    find(id: number) {

    }

    create() {
        
    }

    update(id: number) {

    }

    remove(id: number) {

    }
}
