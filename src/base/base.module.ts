import { Province } from './../entities/province.entity';
import { TariffType } from './../entities/tariffType.entity';
import { MedicalCenter } from './../entities/medicalCenter.entity';
import { Person } from './../entities/person.entity';
import { PhysicianExpertise } from '../entities/physicianExpertise.entity';
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
import { PractitionerExpertiseController } from './physician-expertise/physician-expertise.controller';
import { PhysicianExpertiseService } from './physician-expertise/physician-expertise.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { MedicalCenterController } from './medical-center/medical-center.controller';
import { MedicalCenterService } from './medical-center/medical-center.service';
import { TariffTypeController } from './tariff-type/tariff-type.controller';
import { TariffTypeService } from './tariff-type/tariff-type.service';
import { InsuranceCompanyController } from './insurance-company/insurance-company.controller';
import { InsuranceCompanyService } from './insurance-company/insurance-company.service';
import { InsuranceCompany } from 'src/entities/insuranceCompany.entity';
import { BaseService } from './base.service';
import { BaseController } from './base.controller';

@Module({
  controllers: [
    ToothController,
    DiseaseCostTypeController,
    DocRecievementTypeController,
    PractitionerExpertiseController,
    MedicalCenterController,
    PersonController,
    TariffTypeController,
    InsuranceCompanyController,
    BaseController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      ToothNum,
      DiseaseCostType,
      DocRecievementType,
      PhysicianExpertise,
      MedicalCenter,
      TariffType,
      InsuranceCompany,
      Province,
      Person,
    ]),
  ],
  providers: [
    ToothService,
    DiseaseCostTypeService,
    DocRecievementTypeService,
    PhysicianExpertiseService,
    MedicalCenterService,
    PersonService,
    TariffTypeService,
    InsuranceCompanyService,
    BaseService,
  ],
})
export class BaseModule {}
