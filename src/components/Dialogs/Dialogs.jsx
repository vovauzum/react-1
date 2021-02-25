import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Eduard
                </div>
                <div className={s.dialog}>
                    Igor
                </div>
                <div className={s.dialog}>
                    Vova
                </div>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Yulya
                </div>
                <div className={s.dialog}>
                    Igor
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;