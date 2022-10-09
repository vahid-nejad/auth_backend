import { PhysicianExpertise } from './physicianExpertise.entity';
import { TariffType } from './tariffType.entity';
import { Province } from './province.entity';
import { MedicalCenter } from './medicalCenter.entity';
import { ToothNum } from './toothNum.entity';
import { DiseaseCostType } from './diseaseCostType.entity';
import { DocRecievementType } from './docRecievementType.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InsuranceCompany } from './insuranceCompany.entity';
import { Person } from './person.entity';

@Entity()
export class ParaClinicDamage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  computedId: string;

  @ManyToOne(
    (type) => InsuranceCompany,
    (docRecivementType) => docRecivementType.id,
  )
  insuranceCompany: InsuranceCompany;

  @Column()
  contractNum: string;

  @ManyToOne(
    (type) => DocRecievementType,
    (docRecivementType) => docRecivementType.id,
  )
  @ManyToOne(
    (type) => DocRecievementType,
    (docReciementType) => docReciementType.id,
  )
  docReciementType: DocRecievementType;

  @ManyToOne((type) => Person, (insuredPerson) => insuredPerson.id)
  insuredPerson: Person;

  @Column()
  sicknessDate: Date;

  @Column()
  nezamPezeshki: string;

  @ManyToOne((type) => DiseaseCostType, (diesaseCostType) => diesaseCostType.id)
  diesaseCostType: DiseaseCostType;

  @Column()
  karshenasiAmount: number;

  @Column()
  approverKarshenasiAmount: number;

  @Column()
  franchiseDeduction: boolean;

  @Column()
  deductions: number;

  @Column()
  franchiseExcess: number;

  @Column()
  firstInsurerShare: number;

  @Column()
  isInsuredAdult: boolean;

  @ManyToOne((type) => ToothNum, (toothNum) => toothNum.id)
  toothNum: ToothNum;

  @Column()
  isSystemicCalculated: boolean;

  @ManyToOne((type) => MedicalCenter, (medicalCenter) => medicalCenter.id)
  medicalCenter: MedicalCenter;

  @Column()
  introductionLetterSeries: string;

  @Column()
  discount: number;

  @Column()
  physicianName: string;

  @ManyToOne((type) => Province, (province) => province.id)
  provinceOfService: Province;

  @ManyToOne((type) => TariffType, (tariffType) => tariffType.id)
  tariffType: TariffType;

  @ManyToOne(
    (type) => PhysicianExpertise,
    (physicianExpertise) => physicianExpertise.id,
  )
  physicianExpertise: PhysicianExpertise;
}
