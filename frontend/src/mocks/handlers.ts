import { rest } from 'msw';
import {
    user,
    resetUser,
    password,
    transactions,
    cryptoCoin,
    cryptoCoins,
    watchList,
    addUser,
    userWallet
} from './constants';
const base_url = 'https://bc87-be.fe-assignment.tk';
export const handlers = [
    rest.get(`${base_url}/user`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(resetUser));
    }),
    rest.patch(`${base_url}/user`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(password));
    }),
    rest.get(`${base_url}/crypto`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(cryptoCoins));
    }),
    rest.get(`${base_url}/transaction/watchlist`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(watchList));
    }),
    rest.post(`${base_url}/transaction/watchlist`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
    }),
    rest.get(
        `${base_url}/transaction/watchlist/crypto/bitcoin`,
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(watchList[0]));
        }
    ),
    rest.delete(`${base_url}/transaction/watchlist/1`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
    }),
    rest.get(`${base_url}/transaction`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(transactions));
    }),
    rest.get(`${base_url}/user/1`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(user));
    }),
    rest.get(`${base_url}/crypto/bitcoin`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(cryptoCoin));
    }),
    rest.post(`${base_url}/user`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(addUser));
    }),
    rest.get(`${base_url}/wallet`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(userWallet));
    })
];
