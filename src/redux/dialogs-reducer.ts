import {InferActionsType} from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Eduard"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Vova"},
        {id: 4, name: "Olya"},
        {id: 5, name: "Yulya"},
        {id: 6, name: "Igor"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ] as Array<MessageType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: "SN/DIALOGS/SEND-MESSAGE", newMessageBody} as const)
}

export default dialogsReducer;

export  type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
