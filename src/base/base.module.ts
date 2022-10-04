import { MedicalCenter } from './../entities/medicalCenter.entity';
import { Person } from './../entities/person.entity';
import { PractitionerExpertise } from './../entities/practitionerExpertise.entity';
import { DocRecievementType } from './../entities/docRecievementType.entity';
import { DiseaseCostType } from './../entities/diseaseCostType.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToothNum } from 'src/entities/toothNum.entity';
import { ToothController } from './tooth/tooth.controller';
import { ToothService } from './tooth/tooth.service';
import { DiseaseCostTypeController } from './disease-cost-type/disease-cost-type.controller';
import { DiseaseCostTypeService } from './disease-cost-type/disease-cost-type.service';
import { DocRecievementTypeService } from './doc-recievement-type/doc-recievement-type.service';
import { DocRecievementTypeController } from './doc-recievement-type/doc-recievement-type.controller';
import { PractitionerExpertiseController } from './practitioner-expertise/practitioner-expertise.controller';
import { PractitionerExpertiseService } from './practitioner-expertise/practitioner-expertise.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { MedicalCenterController } from './medical-center/medical-center.controller';
import { MedicalCenterService } from './medical-center/medical-center.service';

@Module({
  controllers: [
    ToothController,
    DiseaseCostTypeController,
    DocRecievementTypeController,
    PractitionerExpertiseController,
    MedicalCenterController,
    PersonController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      ToothNum,
      DiseaseCostType,
      DocRecievementType,
      PractitionerExpertise,
      MedicalCenter,
      Person,
    ]),
  ],
  providers: [
    ToothService,
    DiseaseCostTypeService,
    DocRecievementTypeService,
    PractitionerExpertiseService,
    MedicalCenterService,
    PersonService,
  ],
})
export class BaseModule {}
