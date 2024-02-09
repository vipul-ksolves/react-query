import { useQuery } from "react-query";
import {getFriends} from '../services/friends'


export const useFriendsData = (key)=>{
    return useQuery([key], getFriends);
}