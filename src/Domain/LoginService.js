import axios from "axios";

export default class LoginService {
  loginDetails = {};

  constructor(email, secret) {
    this.loginDetails.email = email;
    this.loginDetails.secret = require("js-sha256").sha256(secret);
  }

  async login() {
    const result = await axios.post(
      "https://localhost:8090/login",
      this.loginDetails
    );
    return await result.data;
  }
}
