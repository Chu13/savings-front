import axios from 'axios'
let develop = 'http://localhost:3000'
let prod = "https://savings-app-backend.herokuapp.com"

export class UserApiService {

    postUserSignup(userInfo) {

        return axios({
            method: 'post',
            url: develop +'/api/user/signup',
            data: userInfo
        });
    }

    postUserLogin(userInfo) {

        return axios({
            method: 'get',
            url: develop +'/api/user/login',
            auth: {
                username: userInfo.email,
                password: userInfo.password
            }
        });
    }
}