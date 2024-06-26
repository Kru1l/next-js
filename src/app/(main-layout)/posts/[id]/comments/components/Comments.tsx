import {FC} from 'react';

import {IComment} from "@/interfaces/commentInterface";
import {Comment} from "@/app/(main-layout)/posts/[id]/comments/components/Comment";

interface IProps {
    comments: IComment[]
}

const Comments: FC<IProps> = ({comments}) => {

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};