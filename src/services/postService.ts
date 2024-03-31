import {urls} from "@/constants/urls";
import {IRes} from "@/types/responseType";
import {IPost} from "@/interfaces/postInterface";
import {apiService} from "@/services/apiService";
import {IComment} from "@/interfaces/commentInterface";

const postService = {
    getAll: (): IRes<IPost[]> => apiService.get(urls.posts.base),
    getCommentsById: (id: number): IRes<IComment[]> => apiService.get(urls.posts.comments(id))
};

export {postService};