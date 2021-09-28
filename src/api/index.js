
import axios from 'axios';

export const register = (user) => axios.post('/api/auth/register', user);
export const fetchuser = () => axios.get('/api/user/fetchuser');
export const login = (user) => axios.post('/api/auth/login', user);

const api = {
    register,
    fetchuser,
    login,
}

export default api;