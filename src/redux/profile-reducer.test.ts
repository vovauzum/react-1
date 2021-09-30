import profileReducer, {actions} from "./profile-reducer"

it("after deleting length should not be decremented if id is incorrect", () => {
    // 1. test data
    let action = actions.deletePost(1000);
    let state: any = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCounts: "20"},
            {id: 2, message: "It's my first post", likeCounts: "30"}
        ],
        newPostText: "it-kamasutra",
        profile: null,
        status: ""
    };
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectations
    expect(newState.posts.length).toBe(2);
})