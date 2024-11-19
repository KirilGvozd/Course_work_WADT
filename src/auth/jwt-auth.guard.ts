import {Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err: any, user: any, info: any, context: any) {
        if (err || !user) {
            throw err || new UnauthorizedException('Invalid token or no user found');
        }
        return user;
    }
}