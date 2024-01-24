import axios from 'axios';
import { IProfile } from '../types/ProfileModel';


export const profileApi = Object.freeze({
    async getProfile(token:string):Promise<IProfile> {
        const { data:profile } = await axios.get<IProfile>(
            `${process.env.REACT_APP_API_URL}/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return profile;
    },
});
