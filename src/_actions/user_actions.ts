import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './type';

export const registerUser = (dataToSubmit: { email: string; password: string }) => {
    const request = axios
        .post('/api/users/register', dataToSubmit) // api 폴더안에 users 폴더안에 register 파일을 만들어줘
        .then((res) => res.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
};

export const loginUser = (dataToSubmit: { email: string; password: string }) => {
    const request = axios
        .post('/api/users/login', dataToSubmit) // api 폴더안에 users 폴더안에 login 파일을 만들어줘
        .then((res) => res.data);

    return {
        type: LOGIN_USER,
        payload: request,
    };
};

export const auth = () => {
    const request = axios.get('/api/users/auth').then((res) => res.data); // api 폴더안에 users 폴더안에 auth 파일을 만들어줘

    return {
        type: AUTH_USER,
        payload: request,
    };
};
