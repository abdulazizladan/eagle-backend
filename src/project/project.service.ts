import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Milestone } from './entities/milestone.entity';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Milestone) 
    private readonly milestoneRepository: Repository<Milestone>
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll() {
    try {
      const projects = await this.projectRepository.find();
      if(projects.length > 0 ) {
        return {
          success: true,
          data: projects,
          message: 'Project fetched successfully'
        }
      } else {
        return {
          success: true,
          data: null,
          message: "No projects found"
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: string) {
    try { 
      const project = await this.projectRepository.findOne(
        {where: {id}, 
        relations: ['milestones']
      });
      if(project) {
        return {
          success: true,
          data: project,
          message: 'Project found'
        }
      }else {
        return {
          success: true,
          data: null,
          message: 'Project not found'
        }
      }
    } catch(error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
