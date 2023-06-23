export class UserResponseDTO {
    user_id: string;
    user_name: string;
    email: string;
    avatar_img_url: string;
    last_login: number;

    constructor(user_id: string, user_name: string, email: string, avatar_img_url: string, last_login: number) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.email = email;
        this.avatar_img_url = avatar_img_url;
        this.last_login = last_login;
    }
}