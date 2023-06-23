export class UserDTO {
    user_id?: string;
    user_name: string;
    password: string;
    email: string;
    avatar_img_url: string;
    is_blacklisted: boolean;
    last_login: number;

    constructor(user_id: string, user_name: string, password: string, email: string, avatar_img_url: string, is_blacklisted: boolean, last_login: number) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.avatar_img_url = avatar_img_url;
        this.is_blacklisted = is_blacklisted;
        this.last_login = last_login;
    }
}