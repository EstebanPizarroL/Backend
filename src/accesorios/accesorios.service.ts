import { Injectable } from '@nestjs/common';
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Accesorio, AccesorioDocument } from './schemas/accesorios.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class AccesoriosService {
  constructor(
    @InjectModel(Accesorio.name)
    private readonly accesorioModel: Model<AccesorioDocument>,
  ) {}

  async create(createAccesorioDto: CreateAccesorioDto): Promise<Accesorio> {
    return this.accesorioModel.create(createAccesorioDto);
  }

  async findAll(request: Request): Promise<Accesorio[]> {
    return this.accesorioModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Accesorio> {
    return this.accesorioModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateAccesorioDto: UpdateAccesorioDto) {
    return this.accesorioModel.findOneAndUpdate(
      { _id: id },
      updateAccesorioDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return this.accesorioModel.findByIdAndRemove({ _id: id }).exec();
  }
}
