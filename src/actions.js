// Action Types
export const JOKES_FETCH_REQUESTED = 'JOKES_REQUESTED';
export const JOKES_FETCH_SUCCEEDED = 'JOKES_FETCH_SUCCEEDED';
export const JOKES_FETCH_FAILED = 'JOKES_FETCH_FAILED';
export const SET_CURRENT_JOKE = 'SET_CURRENT_JOKE';
export const GENERATE_JOKE = 'GENERATE_JOKE';

// Action Creators
export const requestJokes = () => ({
	type: JOKES_FETCH_REQUESTED
});

export const generateJoke = (allJokes) => ({
	type: GENERATE_JOKE,
	allJokes
});