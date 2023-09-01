import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AsociadoDocument = Asociado & Document;

@Schema()
export class Asociado {
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

export const AsociadoSchema = SchemaFactory.createForClass(Asociado);
