import {apiService} from "@/services/apiService";
import {urls} from "@/constants/urls";
import {IRes} from "@/types/responseType";
import {IUser} from "@/interfaces/userInterface";
import {IPost} from "@/interfaces/postInterface";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users.base),
    getPostsById: (id: number): IRes<IPost[]> => apiService.get(urls.users.posts(id))
};

export {userService};