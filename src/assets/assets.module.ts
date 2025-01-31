import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsRegistry } from './entities/assets-registry.entity';
import { Appliance } from './entities/appliance.entity';
import { Building } from './entities/building.entity';
import { Machine } from './entities/machine.entity';
import { Site } from './entities/site.entity';
import { Vehicle } from './entities/vehicle.entity';
import { SiteService } from './services/site/site.service';
import { VehicleService } from './services/vehicle/vehicle.service';
import { BuildingService } from './services/building/building.service';
import { ApplianceService } from './services/appliance/appliance.service';
import { MachineService } from './services/machine/machine.service';
import { ApplianceController } from './controllers/appliance/appliance.controller';
import { BuildingController } from './controllers/building/building.controller';
import { MachineController } from './controllers/machine/machine.controller';
import { SiteController } from './controllers/site/site.controller';
import { VehicleController } from './controllers/vehicle/vehicle.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        AssetsRegistry,
        Appliance,
        Building,
        Machine,
        Site,
        Vehicle
      ]
    )
  ], 
  controllers: [
    AssetsController, 
    ApplianceController, 
    BuildingController, 
    MachineController, 
    SiteController, 
    VehicleController
  ],
  providers: [
    AssetsService, 
    SiteService, 
    BuildingService, 
    ApplianceService, 
    MachineService, 
    VehicleService
  ],
})
export class AssetsModule {}
