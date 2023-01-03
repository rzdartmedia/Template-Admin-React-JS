import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class AuthenticationService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT;
    }

    async postAuthentication(payload) {
        try {

            const data = JSON.stringify({
                email: payload.email,
                password: payload.password
            });

            const response = await this._axios({
                method: 'POST',
                url: `${this._endpoint.AUTHENTICATION}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }

    async deleteAuthentication(payload) {
        try {
            const data = JSON.stringify({
                refreshToken: payload.refreshToken
            });

            const response = await this._axios({
                method: 'DELETE',
                url: `${this._endpoint.AUTHENTICATION}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data,
            });


            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
}

export default AuthenticationService;