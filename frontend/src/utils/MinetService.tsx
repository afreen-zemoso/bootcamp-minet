import axios from 'axios';
import { CryptoTransactionType } from './interfaces/CryptoTransactionType';
const base_url = ' https://bc87-be.fe-assignment.tk';
export class MinetService {
    static setToken = (token: string) => {
        axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    };
    static signUp = (formData: {
        fullName: string;
        email: string;
        password: string;
    }) => {
        return axios.post(`${base_url}/user`, formData);
    };
    static resetPassword = async (email: string, reEnteredPassword: string) => {
        const response = await MinetService.getUser(email);
        const user = response.data;
        await axios.patch(`${base_url}/user`, {
            id: user.id,
            password: reEnteredPassword
        });
    };
    static getUser = (email: string) => {
        return axios.get(`${base_url}/user?email=${email}`);
    };
    static getUserLogin = (email: string, password: string) => {
        return axios.post(`${base_url}/user/login`, {
            email: email,
            password: password
        });
    };
    static getCryptoCoins = () => {
        return axios.get(`${base_url}/crypto`);
    };
    static getWatchList = () => {
        return axios.get(`${base_url}/transaction/watchlist`);
    };
    static addCoinToWatchList = (userCoin: { cryptoId: string }) => {
        return axios.post(`${base_url}/transaction/watchlist`, userCoin);
    };
    static getCryptoFromWatchList = (cryptoId: string) => {
        return axios.get(
            `${base_url}/transaction/watchlist/crypto/${cryptoId}`
        );
    };
    static deleteCryptoFromWatchList = (id: number) => {
        return axios.delete(`${base_url}/transaction/watchlist/${id}`);
    };
    static getUserById = (user_id: number) => {
        return axios.get(`${base_url}/user/${user_id}`);
    };
    static updateUserBalance = async (userBalance: {
        id: number;
        balance: number;
    }) => {
        return await axios.patch(`${base_url}/user`, userBalance);
    };
    static addCryptoToUser = async (wallet: {
        cryptoId: string;
        totalBalance: number;
    }) => {
        return await axios.post(`${base_url}/wallet`, wallet);
    };
    static getUserWallet = async (cryptoId: string) => {
        return await axios.get(`${base_url}/wallet/crypto/${cryptoId}`);
    };
    static updateUserWallet = async (
        wallet_id: number,
        userCryptoBalance: { totalBalance: number }
    ) => {
        return await axios.put(
            `${base_url}/wallet/${wallet_id}`,
            userCryptoBalance
        );
    };
    static addTransaction = async (transaction: CryptoTransactionType) => {
        return await axios.post(`${base_url}/transaction`, transaction);
    };
    static getCryptoCoin = (cryptoId: string) => {
        return axios.get(`${base_url}/crypto/${cryptoId}`);
    };
    static getCryptoBasedTransactions = (cryptoId: string) => {
        return axios.get(`${base_url}/transaction/crypto/${cryptoId}`);
    };
    static getUserWalletCoins = async () => {
        return await axios.get(`${base_url}/wallet`);
    };
    static getUserTransactions = async () => {
        return await axios.get(`${base_url}/transaction`);
    };
    static deleteUserWallet = async (id: number) => {
        return await axios.delete(`${base_url}/wallet/${id}`);
    };
}
