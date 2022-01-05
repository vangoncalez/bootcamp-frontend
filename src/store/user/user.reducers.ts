import { UserAction, UserState } from "./user.types"

const login = (state: UserState, action: UserAction) => {}

const setData = (state: UserState, action: UserAction) => {
	state.data = { ...state.data, ...action.payload }
}

const reducers = { login, setData }

export default reducers
