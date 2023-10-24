import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users, user)
};

export {userService}