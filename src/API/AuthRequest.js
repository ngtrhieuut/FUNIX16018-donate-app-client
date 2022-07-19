import axios from 'axios';

const API = axios.create({ baseURL: 'https://funix16018-donate-app-server.herokuapp.com' });

export const logIn= (formData)=> API.post('/auth/login', formData);

export const signUp = (formData) => API.post('/auth/register', formData);

export const confirmEmail = (formData) => API.post(`/auth/${formData.userId}/${formData.token}`, formData);