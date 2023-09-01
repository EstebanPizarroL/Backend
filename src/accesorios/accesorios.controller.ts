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
import { AccesoriosService } from './accesorios.service';
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';

@Controller('accesorios')
@ApiTags('accesorio')
export class AccesoriosController {
  constructor(private readonly accesoriosService: AccesoriosService) {}
/*
  @Post()
  create(@Body() createAccesorioDto: CreateAccesorioDto) {
    return this.accesoriosService.create(createAccesorioDto);
  }
*/
  @Get()
  findAll(@Req() request: Request) {
    //return this.accesoriosService.findAll(request);
    return "Modulo de Accesorios";
  }
/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accesoriosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccesorioDto: UpdateAccesorioDto,
  ) {
    return this.accesoriosService.update(id, updateAccesorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accesoriosService.remove(id);
  }
*/
}
