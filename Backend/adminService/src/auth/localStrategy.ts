import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-local';
import {AuthService} from "../services/authService";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    public validate = (username: string, password: string) => {
        console.log('Got new request', { username, password });
        const isAuthValid = this.authService.validateAuth(username, password);
        if (!isAuthValid) throw new UnauthorizedException()
        else return isAuthValid;
    }
}