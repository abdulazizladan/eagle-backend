import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Milestone } from './entities/milestone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Project,
      Milestone
    ])
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
