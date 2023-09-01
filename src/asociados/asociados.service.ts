import { Injectable } from '@nestjs/common';
import { CreateAsociadoDto } from './dto/create-asociado.dto';
import { UpdateAsociadoDto } from './dto/update-asociado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asociado, AsociadoDocument } from './schemas/asociados.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class AsociadosService {
  constructor(
    @InjectModel(Asociado.name)
    private readonly asociadoModel: Model<AsociadoDocument>,
  ) {}

  async create(createAsociadoDto: CreateAsociadoDto): Promise<Asociado> {
    return this.asociadoModel.create(createAsociadoDto);
  }

  async findAll(request: Request): Promise<Asociado[]> {
    return this.asociadoModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Asociado> {
    return this.asociadoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateAsociadoDto: UpdateAsociadoDto) {
    return this.asociadoModel.findOneAndUpdate({ _id: id }, updateAsociadoDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.asociadoModel.findByIdAndRemove({ _id: id }).exec();
  }
}
