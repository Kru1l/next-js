import {FC} from 'react';
import {IComment} from "@/interfaces/commentInterface";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    return (
        <div>
            <p>ID: {id}</p>
            <p>PostId: {postId}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};