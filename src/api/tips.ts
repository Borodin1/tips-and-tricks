import axios, { AxiosResponse } from 'axios';
import { IPublishFormShape } from '../components/forms/types';
import { AuthHeader } from '../types/AuthHeader';
import { ITipModel } from '../types/TipModel';

export const tipsApi = Object.freeze({
    async getTips():Promise<ITipModel[]> {
        const { data } = await axios.get<AxiosResponse<ITipModel[]>>(`${process.env.REACT_APP_API_URL}/tips`);


        return data?.data;
    },
    async getTipById(id:string):Promise<ITipModel> {
        const { data: tipById } = await axios.get<ITipModel>(`${process.env.REACT_APP_API_URL}/tips/${id}`);


        return tipById;
    },
    async createTip(tip:IPublishFormShape, token?:string) {
        const config: AuthHeader = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const { data:newTip } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip, config,
        );


        return newTip;
    },
});
