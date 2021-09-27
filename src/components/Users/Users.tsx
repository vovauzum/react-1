import React, {FC} from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: FC<PropsType> = ({ currentPage, totalItemsCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow,
                                      ...props }) => {
    return <div>
        <Paginator currentPage={currentPage}
            totalItemsCount={totalItemsCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfollow={unfollow}
                    follow={follow}
                     />)
            }
        </div>
    </div>
}

export default Users;