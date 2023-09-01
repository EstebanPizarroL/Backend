import { Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Servicio, ServicioDocument } from './schemas/servicios.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectModel(Servicio.name)
    private readonly servicioModel: Model<ServicioDocument>,
  ) {}

  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    return this.servicioModel.create(createServicioDto);
  }

  async findAll(request: Request): Promise<Servicio[]> {
    console.log("services")
    return this.servicioModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Servicio> {
    return this.servicioModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateServicioDto: UpdateServicioDto) {
    return this.servicioModel.findOneAndUpdate(
      { _id: id },
      updateServicioDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return this.servicioModel.findByIdAndRemove({ _id: id }).exec();
  }
}
