import {FC} from 'react';

import {userService} from "@/services/userService";
import {Posts} from "@/app/(main-layout)/users/[id]/posts/components/Posts";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "UserPosts"
};

interface IProps {
    params: { id: string }
}

const PostPageById: FC<IProps> = async ({params: {id}}) => {

    const {data} = await userService.getPostsById(+id);

    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostPageById;