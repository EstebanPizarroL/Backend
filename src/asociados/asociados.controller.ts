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
import { AsociadosService } from './asociados.service';
import { CreateAsociadoDto } from './dto/create-asociado.dto';
import { UpdateAsociadoDto } from './dto/update-asociado.dto';

@Controller('asociados')
@ApiTags('asociado')
export class AsociadosController {
  constructor(private readonly asociadosService: AsociadosService) {}
/*
  @Post()
  create(@Body() createLocalDto: CreateAsociadoDto) {
    return this.asociadosService.create(createLocalDto);
  }
*/
  /*
  @Get()
  findAll(@Req() request: Request) {
    return this.asociadosService.findAll(request);
  }
*/
  
  @Get()
  findAll() :string {
    return "Modulo de Asociados";
  }

/*  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asociadosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAsociadoDto: UpdateAsociadoDto,
  ) {
    return this.asociadosService.update(id, updateAsociadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asociadosService.remove(id);
  }
*/
}
