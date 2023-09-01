import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServicioDocument = Servicio & Document;

@Schema()
export class Servicio {
  @Prop()
  genre: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  pages: number;

  @Prop()
  image_url: string;

  @Prop([String])
  keywords: string[];
}

export const ServicioSchema = SchemaFactory.createForClass(Servicio);
