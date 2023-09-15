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
import { ComunidadesService } from './comunidades.service';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';

@Controller('comunidades')
@ApiTags('comunidad')
export class ComunidadesController {
  constructor(private readonly comunidadesService: ComunidadesService) {}

  @Post()
  create(@Body() createComunidadDto: CreateComunidadDto) {
    return this.comunidadesService.create(createComunidadDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.comunidadesService.findAll(request);
    //return "Modulo de Cominidades";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comunidadesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComunidadDto: UpdateComunidadDto,
  ) {
    return this.comunidadesService.update(id, updateComunidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comunidadesService.remove(id);
  }

}
