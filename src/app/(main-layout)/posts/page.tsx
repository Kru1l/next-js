import {FC} from 'react';
import type {Metadata} from "next";

import {postService} from "@/services/postService";
import {Posts} from "@/app/(main-layout)/posts/components/Posts";

export const metadata: Metadata = {
    title: "Posts",
};

interface IProps {

}

const PostsPage: FC<IProps> = async () => {
    let {data} = await postService.getAll();

    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostsPage;