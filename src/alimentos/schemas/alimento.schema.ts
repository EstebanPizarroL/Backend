import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlimentoDocument = Alimento & Document;

@Schema()
export class Alimento {
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

export const AlimentoSchema = SchemaFactory.createForClass(Alimento);
