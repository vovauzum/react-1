import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        { id: 1, name: "Eduard" },
        { id: 2, name: "Igor" },
        { id: 3, name: "Vova" },
        { id: 4, name: "Olya" },
        { id: 5, name: "Yulya" },
        { id: 6, name: "Igor" }
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;