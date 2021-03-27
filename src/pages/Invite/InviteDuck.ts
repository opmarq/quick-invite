import { IUser } from "../../api";


interface IInviteState {
    isLoading: boolean;
    users: Array<IUser>;
    errorMessage: string;
}

interface IAction {
    type: string;
    payload?: any
}

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const CLEAR_USERS = "CLEAR_USERS";
export const SET_ERROR = "SET_ERROR";


export const initialState: IInviteState = {
    isLoading: false,
    users: [],
    errorMessage: ""
}

export const inviteReducer = (state = initialState, action: IAction): IInviteState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                errorMessage: ""
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                errorMessage: "",
                isLoading: false
            };
        case FETCH_USERS:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
            }
        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}
