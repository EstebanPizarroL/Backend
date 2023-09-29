import { ApiProperty } from '@nestjs/swagger';
export class CreateAlimentoDto {
  /*
  "id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120*/
  
  @ApiProperty({
    example: 'Pedigree',
  })
  readonly title: string;

  @ApiProperty({ example: 'Secos' })
  readonly category: string;

  @ApiProperty({ example: 'Perros' })
  readonly subcategory: string;

  @ApiProperty({
    example: 'Pedigree - Alimento Seco Perro Adulto Carne Y Vegetales',
  })
  readonly description: string;

  @ApiProperty({ example : 19990})
  readonly price: number;

  @ApiProperty({ example: 'Negocio1' })
  readonly asociado: string;

  //@ApiProperty({ example: 12 })
  //readonly pages: number;

  @ApiProperty({
    example:
      'https://laikapp.s3.amazonaws.com/dev_images_categories/PEDIGREE_LOGO_CIRCULO5.png',
  })
  readonly image_url: string;
  
  @ApiProperty({ example: ['Alimento', 'Seco', 'Adulto', '12Kg'] })
  readonly keywords: string[];
}
