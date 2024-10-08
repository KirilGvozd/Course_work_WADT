import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {pgConfig} from "./dbConfig";
import {BasketModule} from "./basket/basket.module";

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), BasketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
