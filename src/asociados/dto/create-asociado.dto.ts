import { ApiProperty } from '@nestjs/swagger';
export class CreateAsociadoDto {
  @ApiProperty({
    example: 'Pedigree',
  })
  readonly title: string;

  @ApiProperty({ example: 'Ropa' })
  readonly genre: string;

  @ApiProperty({
    example: 'Abrigo',
  })
  readonly description: string;

  @ApiProperty({ example: 'Emprendedor 1' })
  readonly author: string;

  @ApiProperty({ example: 1 })
  readonly pages: number;

  @ApiProperty({
    example:
      'https://laikapp.s3.amazonaws.com/dev_images_categories/PEDIGREE_LOGO_CIRCULO5.png',
  })
  readonly image_url: string;

  @ApiProperty({ example: ['Ropa', 'Cachorro', '1'] })
  readonly keywords: string[];
}
