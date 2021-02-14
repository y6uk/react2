import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts:
        [
            {message: 'hello vasya', like: '1555', id: 1},
            {message: 'hello petya', like: '20', id: 2},
            {message: 'hello john', like: '59', id: 3},
            {message: 'hello george', like: '18', id: 4},
        ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("lol")

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("lol")

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[4].message).toBe("lol");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});