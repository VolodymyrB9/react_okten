import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    byCommentId: (postId) => axiosService.get(urls.posts.byCommentId(postId))
}

export {postsService}