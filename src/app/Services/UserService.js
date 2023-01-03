import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class UserService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT;
    }

    async getUserById(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint.USER}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default UserService;