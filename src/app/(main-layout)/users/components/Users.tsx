'use client'

import {FC, useEffect} from 'react';

import {User} from "@/app/(main-layout)/users/components/User";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";
import {userActions} from "@/store/slices/userSlice";

interface IProps {
    // users: IUser[]
}

const Users: FC<IProps> = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.getUsers());
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};