import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
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
import {BasketItem} from "./entities/basketItem.entity";
import {Chat} from "./entities/chat.entity";
import {Comment} from "./entities/comment.entity";
import {Type} from "./entities/type.entity";
import {AuthModule} from "./auth/auth.module";
import { ChatGatewayGateway } from './chat_gateway/chat_gateway.gateway';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
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
          host: configService.get<string>("DATABASE_HOST"),
          port: configService.get<number>("DATABASE_PORT"),
          username: configService.get<string>("DATABASE_USERNAME"),
          password: configService.get<string>("DATABASE_PASSWORD"),
          database: configService.get<string>("DATABASE_NAME"),
          entities: [Item, User, BasketItem, Chat, Comment, Type],
          synchronize: true,
        })
      })
  ],
  controllers: [AppController],
  providers: [AppService, ChatGatewayGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bodyParser.json()).forRoutes('*');
  }
}
