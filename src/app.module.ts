import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CnpjController } from './cnpj/cnpj.controller';
import { CnpjModule } from './cnpj/cnpj.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    CnpjModule,
    HttpModule
  ],
  controllers: [AppController, CnpjController],
  providers: [AppService],
})
export class AppModule { }
