export class UserDTO {
    user_id: string;
    user_name: string;
    password: string;
    email: string;
    avatar_img_url: string;
    is_blacklisted: boolean;
    last_login: number;
}