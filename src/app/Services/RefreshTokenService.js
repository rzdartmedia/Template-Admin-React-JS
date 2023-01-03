async function RefreshTokenService(refreshToken) {
    const data = JSON.stringify({
        refreshToken
    });

    const response = await this._axios({
        method: 'PUT',
        url: `${this._endpoint.AUTHENTICATION}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    });

    const result = response.data;
    if (result.status === 'success') {
        return result.data.accessToken
    } else {
        return 'fail';
    }
}

export default RefreshTokenService