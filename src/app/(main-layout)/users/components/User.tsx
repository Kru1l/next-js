import {FC} from 'react';

import {IUser} from "@/interfaces/userInterface";
import Link from "next/link";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    let {id, name, username} = user;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <Link href={`/users/${id}/posts`}>Posts of current user</Link>
        </div>
    );
};

export {User};