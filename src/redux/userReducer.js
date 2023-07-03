export const Types = {
    USER: '@user',
}

const initialState = {
    user: {
        id: 0,
        email: '',
        name: '',
    }
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export const Creators = {
    addUserAction: (user) => ({
        type: Types.USER,
        user
    })
}