import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CnpjService } from './cnpj.service';
import { DataCnpjDTO } from './dto/data-cnpj.DTO';

@Controller('cnpj')
export class CnpjController {
  constructor(private readonly _cnpjService: CnpjService) { }

  @Get('find/:cnpj')
  @ApiOperation({ summary: 'Find cnpj' })
  @ApiResponse({ status: 201, description: 'CNPJ encontrado' })
  findCnpj(@Param('cnpj') cnpj: string): Promise<DataCnpjDTO> {
    return this._cnpjService.findCnpj(cnpj);
  }

}
