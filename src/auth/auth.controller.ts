import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards
} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CreateUserDto} from "../user/dto/createUserDto";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Request, Response} from "express";
import {AuthGuard} from "@nestjs/passport";
import {UserService} from "../user/user.service";
import {AuthDto} from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
  constructor(
      private readonly authService: AuthService,
      private readonly jwtService: JwtService,
      private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    await this.userService.create(body);
  }

  @Post('login')
  async login(@Body() body: AuthDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.userService.findByEmail(body.email);

    if (!user || !await bcrypt.compare(body.password, user.password)) {
      throw new BadRequestException('Invalid credentials!');
    }

    const tokens = await this.authService.generateTokens(user);

    await this.authService.updateRefreshToken(user.id, tokens.refreshToken);

    res.cookie("jwt", tokens.accessToken, { httpOnly: true });
    res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true, path: '/auth/refresh' });

    return { message: "Login successful" };
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new UnauthorizedException("No refresh token found.");
    }

    try {
      const data = await this.jwtService.verifyAsync(refreshToken, { secret: process.env.JWT_REFRESH_SECRET });

      const isValid = await this.authService.validateRefreshToken(data.id, refreshToken);
      if (!isValid) {
        throw new UnauthorizedException("Invalid refresh token.");
      }

      const newAccessToken = await this.jwtService.signAsync(
          { id: data.id, role: data.role },
          { secret: process.env.JWT_SECRET, expiresIn: process.env.JWT_TOKEN_EXPIRE }
      );

      res.cookie("jwt", newAccessToken, { httpOnly: true });
      return { message: "Token refreshed successfully" };
    } catch (err) {
      throw new UnauthorizedException("Invalid refresh token.");
    }
  }

  @Post('logout')
  async logout(@Res({passthrough: true}) res: Response) {
    res.clearCookie("jwt");
    return {message: "Success"};
  }

  @Get('user')
  async user(@Req() req: Request) {

    try {
      const cookie = req.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      return await this.authService.findOne({id: data.id});
    } catch (err) {
      throw new UnauthorizedException()
    }
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const user = req.user as any;

    const tokens = await this.authService.generateTokens(user);

    await this.authService.updateRefreshToken(user.id, tokens.refreshToken);

    res.cookie("jwt", tokens.accessToken, { httpOnly: true });
    res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true, path: '/auth/refresh' });

    res.redirect('http://localhost:3000');
  }
}
