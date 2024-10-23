import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BasketModule} from "./basket/basket.module";
import {BasketItemModule} from "./basket_item/basketItem.module";
import {ChatModule} from "./chat/chat.module";
import {CommentModule} from "./comment/comment.module";
import {ItemModule} from "./item/item.module";
import {TypeModule} from "./type/type.module";
import {UserModule} from "./user/user.module";
import * as bodyParser from 'body-parser';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {Item} from "./entities/item.entity";
import {User} from "./entities/user.entity";
import {Basket} from "./entities/basket.entity";
import {BasketItem} from "./entities/basketItem.entity";
import {Chat} from "./entities/chat.entity";
import {Comment} from "./entities/comment.entity";
import {Type} from "./entities/type.entity";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    BasketModule,
    BasketItemModule,
    ChatModule,
    CommentModule,
    ItemModule,
    TypeModule,
    UserModule,
      TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'KirillGvozd2003',
          database: 'flea_market_app',
          entities: [Item, User, Basket, BasketItem, Chat, Comment, Type],
          synchronize: true,
        })
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bodyParser.json()).forRoutes('*');
  }
}
