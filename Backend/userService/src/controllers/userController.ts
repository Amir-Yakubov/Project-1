import {Controller, Get, Param} from '@nestjs/common';
import { UserService } from "../services/user.service";

@Controller('user_service/')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('user/:user_id')
  public async getUser(@Param('user_id') user_id: string){
    return await this.userService.getUser(user_id);
  }
}
