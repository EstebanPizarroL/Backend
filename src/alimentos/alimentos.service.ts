import { Injectable } from '@nestjs/common';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Alimento, AlimentoDocument } from './schemas/alimento.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class AlimentosService {
  constructor(
    @InjectModel(Alimento.name)
    private readonly alimentoModel: Model<AlimentoDocument>,
  ) {}

  async create(createBookDto: CreateAlimentoDto): Promise<Alimento> {
    return this.alimentoModel.create(createBookDto);
  }

  async findAll(request: Request): Promise<Alimento[]> {
    return this.alimentoModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Alimento> {
    return this.alimentoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateAlimentoDto: UpdateAlimentoDto) {
    return this.alimentoModel.findOneAndUpdate({ _id: id }, updateAlimentoDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.alimentoModel.findByIdAndRemove({ _id: id }).exec();
  }
}
