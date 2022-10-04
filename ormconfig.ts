import { MedicalCenter } from './src/entities/medicalCenter.entity';
import { Person } from './src/entities/person.entity';
import { PractitionerExpertise } from './src/entities/practitionerExpertise.entity';
import { DocRecievementType } from './src/entities/docRecievementType.entity';
import { DiseaseCostType } from './src/entities/diseaseCostType.entity';
import { Province } from './src/entities/province.entity';
import { City } from './src/entities/city.entity';
import { User } from 'src/entities/user.entity';
import { ToothNum } from './src/entities/toothNum.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions & {
  seeds: string[];
  factories: string[];
} = {
  type: 'mysql',
  database: 'zia_khesarat',
  host: 'localhost',
  username: 'root',
  password: 'root',
  port: 3306,
  entities: [
    ToothNum,
    User,
    City,
    Province,
    DiseaseCostType,
    DocRecievementType,
    PractitionerExpertise,
    MedicalCenter,
    Person,
  ],

  seeds: ['./src/seeds/**/*{.ts,.js}'],
  factories: ['./src/factories/**/*{.ts,.js}'],

  synchronize: true,
};

export default config;
