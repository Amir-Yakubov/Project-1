import {Injectable} from '@nestjs/common';
import {UserService} from "./userService";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {
    }

    public async validateAuth(username: string, password: string) {
    }
}
