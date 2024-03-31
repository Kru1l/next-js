import {FC} from 'react';

import {postService} from "@/services/postService";
import {Comments} from "@/app/(main-layout)/posts/[id]/comments/components/Comments";

interface IProps {
    params: { id: string }
}

const CommentsPageById: FC<IProps> = async ({params: {id}}) => {
    const {data} = await postService.getCommentsById(+id);

    return (
        <div>
            <Comments comments={data}/>
        </div>
    );
};

export default CommentsPageById;