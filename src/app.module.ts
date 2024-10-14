import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {pgConfig} from "./dbConfig";
import {BasketModule} from "./basket/basket.module";
import {BasketItemModule} from "./basket_item/basketItem.module";
import {ChatModule} from "./chat/chat.module";
import {CommentModule} from "./comment/comment.module";
import {ItemModule} from "./item/item.module";
import {TypeModule} from "./type/type.module";
import {UserModule} from "./user/user.module";
import * as bodyParser from 'body-parser';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), BasketModule, BasketItemModule, ChatModule, CommentModule, ItemModule, TypeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bodyParser.json()).forRoutes('*');
  }
}
