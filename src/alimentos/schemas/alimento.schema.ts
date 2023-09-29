import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlimentoDocument = Alimento & Document;

@Schema()
export class Alimento {
  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  subcategory: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  asociado: string;

  @Prop()
  image_url: string;

  @Prop([String])
  keywords: string[];
}

export const AlimentoSchema = SchemaFactory.createForClass(Alimento);
