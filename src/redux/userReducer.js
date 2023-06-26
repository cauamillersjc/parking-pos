export const Types = {
    USER: '@user',
    AUTH: '@auth',
}

const initialState = {
    saved_user: {},
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
        case Types.AUTH:
            return {
                ...state,
                saved_user: action.saved_user
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