import { Injectable } from '@nestjs/common';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comunidad, ComunidadDocument } from './schemas/comunidades.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class ComunidadesService {
  constructor(
    @InjectModel(Comunidad.name)
    private readonly comunidadModel: Model<ComunidadDocument>,
  ) {}

  async create(createComunidadDto: CreateComunidadDto): Promise<Comunidad> {
    return this.comunidadModel.create(createComunidadDto);
  }

  async findAll(request: Request): Promise<Comunidad[]> {
    return this.comunidadModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Comunidad> {
    return this.comunidadModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateComunidadDto: UpdateComunidadDto) {
    return this.comunidadModel.findOneAndUpdate(
      { _id: id },
      updateComunidadDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return this.comunidadModel.findByIdAndRemove({ _id: id }).exec();
  }
}
