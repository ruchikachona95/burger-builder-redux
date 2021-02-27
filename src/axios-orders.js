import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cbdc4.firebaseio.com/'
});

export default instance;