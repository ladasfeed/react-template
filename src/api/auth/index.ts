import axios from 'axios'
export const authAxios = axios.create({
    baseURL: 'https://auth.simple-bank.ru/api/v1/'
})