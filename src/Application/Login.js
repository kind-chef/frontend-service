import LoginService from "../Domain/LoginService"

export default class Login {
    async execute(email, secret) {
        return await (new LoginService(email, secret)).login()
    }

}