import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport";
import {AuthService} from "./auth.service";

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
        });
    }

    validate(email: string, password: string) {
        return this.authService.validateUser(email, password);
    }
}