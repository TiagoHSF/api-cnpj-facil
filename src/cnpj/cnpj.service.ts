/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { DataCnpjDTO } from './dto/data-cnpj.DTO';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CnpjService {
    constructor(private readonly _httpService: HttpService) { }

    async findCnpj(cnpj: string): Promise<DataCnpjDTO> {
        const response = await this.findCnpjAPI(cnpj);
        return response.data;
    }

    async findCnpjAPI(cnpj: string) {
        return await this._httpService
            .get(`https://publica.cnpj.ws/cnpj/${cnpj}`).toPromise()
    }
}
