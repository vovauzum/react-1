import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"
import React from "react";

it("after deleting length should not be decremented if id is incorrect", () => {
    let action = deletePost(1000);
    let state = {
        posts: [
            { id: 1, message: "Hi, how are you?", likeCounts: "20" },
            { id: 2, message: "It's my first post", likeCounts: "30" }
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
})