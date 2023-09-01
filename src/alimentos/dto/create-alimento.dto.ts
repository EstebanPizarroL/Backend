import { ApiProperty } from '@nestjs/swagger';
export class CreateAlimentoDto {
  @ApiProperty({
    example: 'Pedigree',
  })
  readonly title: string;

  @ApiProperty({ example: 'Alimento' })
  readonly genre: string;

  @ApiProperty({
    example: 'Pedigree - Alimento Seco Perro Adulto Carne Y Vegetales',
  })
  readonly description: string;

  @ApiProperty({ example: 'Emprendedor 1' })
  readonly author: string;

  @ApiProperty({ example: 12 })
  readonly pages: number;

  @ApiProperty({
    example:
      'https://laikapp.s3.amazonaws.com/dev_images_categories/PEDIGREE_LOGO_CIRCULO5.png',
  })
  readonly image_url: string;

  @ApiProperty({ example: ['Alimento', 'Adulto', '12'] })
  readonly keywords: string[];
}
