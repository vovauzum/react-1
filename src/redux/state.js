const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likeCounts: "20" },
                { id: 2, message: "It's my first post", likeCounts: "30" }
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your it-kamasutra?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
                { id: 6, message: "Yo" }
            ],
            dialogs: [
                { id: 1, name: "Eduard" },
                { id: 2, name: "Igor" },
                { id: 3, name: "Vova" },
                { id: 4, name: "Olya" },
                { id: 5, name: "Yulya" },
                { id: 6, name: "Igor" }
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounts: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: "UPDATE-NEW-POST-TEXT", newText: text })

export default store;
window.store = store;