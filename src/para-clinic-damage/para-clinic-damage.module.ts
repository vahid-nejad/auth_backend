import { ParaClinicDamage } from './../entities/paraClinicDamage.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParaClinicDamageController } from './para-clinic-damage.controller';
import { ParaClinicDamageService } from './para-clinic-damage.service';

@Module({
  controllers: [ParaClinicDamageController],
  providers: [ParaClinicDamageService],
  imports: [TypeOrmModule.forFeature([ParaClinicDamage])],
})
export class ParaClinicDamageModule {}
