import { combineReducers } from 'redux';
import { JOKES_FETCH_REQUESTED, JOKES_FETCH_SUCCEEDED, SET_CURRENT_JOKE } from "./actions";

const initialState = {
	allJokes: null,
	currentJoke: null,
	isFetching: false,
};

const jokes = (state = initialState, action) => {
	switch (action.type) {
		case JOKES_FETCH_REQUESTED:
			return {
				...state,
				isFetching: true,
			};
		case JOKES_FETCH_SUCCEEDED:
			return {
				...state,
				isFetching: false,
				allJokes: action.data
			};
		case SET_CURRENT_JOKE:
			return {
				...state,
				currentJoke: action.data,
			};
		default:
			return state;
	}
};

export default combineReducers({ jokes });