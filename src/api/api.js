import axios from 'axios';
import SocketApi from './SocketApi';


const Api = {
    _token: null,

    isLoggedIn() {
        return !!this._token;
    },

    init() {
        try {

            const token = window.localStorage.getItem('token');
            this._token = JSON.parse(token);
            this._setTokenToAxios(this._token);
            SocketApi.init(this._token);

        } catch (err) {
            console.log(err);
        }
    },

    setToken(token) {
        this._token = token;
        this._storeToken(token);
        this._setTokenToAxios(token);
    },

    _setTokenToAxios(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

    _storeToken() {
        try {
            window.localStorage.setItem('token', JSON.stringify(this._token))
        } catch (e) {

        }
    },

    logout() {
        this._token = null;

    },
    logoutUser() {
        this._token = null;
        axios.defaults.headers.common.Authorization = null;
        try {
            window.localStorage.removeItem('token');
        } catch (e) {

        }
    },




    fetchViewer() {
        return axios.get('/api/account/user');
    },

    loginUser(user) {
        return axios.post('/api/auth/login', user);
    },


    registerUser(user) {
        return axios.post('/api/auth/register', user);
    },

    loadProductPhoto(photo) {
        return axios.post('/api/upload/images', photo);
    },

    addNewProduct(product) {
        return axios.post('/api/products', product);
    },

    fetchLatestProducts () {
        return axios.get("/api/products/latest")
    },
    getProductById (id) {
        return axios.get(`/api/products/${id}`)
    },

    getProfileById (id) {
        return axios.get(`/api/users/${id}`)
    },

    getProfileProducts (id) {
        return axios.get(`/api/users/${id}/products`)
    },

    createChat (productId) {
        return axios.post(`/api/products/${productId}/createChat`)
    },

    fetchChats () {
        return axios.get('/api/chats')
    },

    fetchMessages(chatId) {
        return axios.get(`/api/chats/${chatId}/messages`)
    },

    sendMessage(chatId, text) {
        return axios.post(`/api/chats/${chatId}/messages`, {text})
    },

    saveProduct(productId) {
        return axios.post(`/api/products/${productId}/save`, {productId})
    },
    unSaveProduct(productId) {
        return axios.post(`/api/products/${productId}/unsave`, {productId})
    },

    fetchSavedProduct() {
        return axios.get('/api/products/saved')
    },


    changeUserInfo(user) {
        return axios.put('/api/account/user', user)
    }

};



export default Api;