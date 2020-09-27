import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationOptions) {
    const { limit, offset } = paginationOptions;
    return `This action will return all coffees limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return `This action will return #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return `This action will create a coffee ${body}`;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return `This action will update #${id} coffee ${body}`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return `This action will remove #${id} coffee`;
  }
}
