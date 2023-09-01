import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccesorioDocument = Accesorio & Document;

@Schema()
export class Accesorio {
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

export const AccesorioSchema = SchemaFactory.createForClass(Accesorio);