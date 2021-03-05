import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://www.percona.com/live/19/sites/default/files/speakers_pics/572979.jpg",
                followed: false,
                fullName: "Vova",
                status: "I am a boss",
                location: { city: "Ternopil", country: "Ukraine" }
            },
            {
                id: 2,
                photoUrl: "https://www.percona.com/live/19/sites/default/files/speakers_pics/572979.jpg",
                followed: true,
                fullName: "Ivan",
                status: "I am a boss too",
                location: { city: "Moscow", country: "Russia" }
            },
            {
                id: 3,
                photoUrl: "https://www.percona.com/live/19/sites/default/files/speakers_pics/572979.jpg",
                followed: false,
                fullName: "Dima",
                status: "I am a boss too",
                location: { city: "Minsk", country: "Belarus" }
            }
        ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={u.photoUrl} alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;