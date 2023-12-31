import { Req } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AlimentosService } from './alimentos.service';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';

@Controller('alimentos')
@ApiTags('alimento')
export class AlimentosController {
  constructor(private readonly alimentosService: AlimentosService) {}

  @Post()
  create(@Body() createAlimentoDto: CreateAlimentoDto) {
    return this.alimentosService.create(createAlimentoDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.alimentosService.findAll(request);
    //return "Modulo de Alimentos";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alimentosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlimentoDto: UpdateAlimentoDto,
  ) {
    return this.alimentosService.update(id, updateAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alimentosService.remove(id);
  }

}
