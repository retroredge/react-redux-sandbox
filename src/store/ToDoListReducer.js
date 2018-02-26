function toDoList(state = { items: ['Buy milk', 'Post letter'] }, action = {}) {
    switch (action.type) {
        default:
            console.log('state in reducer: ' + JSON.stringify(state));
            return state;
    }
}

export default toDoList;