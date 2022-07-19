import axios from 'axios'


const API = axios.create({ baseURL: 'https://funix16018-donate-app-server.herokuapp.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getAllUser = () => API.get(`/user/all_infor`);
export const editUser = (data) => API.patch('/user/update', data);
