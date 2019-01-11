import axios from 'axios'

export class UserApiService {

    postUserSignup(userInfo) {

        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/signup',
            data: userInfo
        });
    }

    postUserLogin(userInfo) {

        return axios({
            method: 'get',
            url: 'http://localhost:3000/api/user/login',
            auth: {
                username: userInfo.email,
                password: userInfo.password
            }
        });
    }
}