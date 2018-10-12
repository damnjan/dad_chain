import { call, put, takeLatest } from 'redux-saga/effects';
import { JOKES_FETCH_FAILED, JOKES_FETCH_REQUESTED, JOKES_FETCH_SUCCEEDED, SET_CURRENT_JOKE, GENERATE_JOKE } from "./actions";
import { getAllJokes } from "./api";
import { generateJoke as _generateJoke } from "./generateJoke";

function* fetchJokes() {
	try {
		const jokes = yield call(getAllJokes);
		yield put({ type: JOKES_FETCH_SUCCEEDED, data: jokes });
	} catch (e) {
		yield put({ type: JOKES_FETCH_FAILED, message: e.message });
	}
}

function* generateJoke(action) {
	const newJoke = _generateJoke(action.allJokes);
	yield put({ type: SET_CURRENT_JOKE, data: newJoke});
	const allJokes = action.allJokes + `\n${newJoke}`;
	yield put({ type: JOKES_FETCH_SUCCEEDED, data: allJokes })
	localStorage.setItem('allJokes', allJokes);
}

export default function* saga() {
	yield takeLatest(JOKES_FETCH_REQUESTED, fetchJokes);
	yield takeLatest(GENERATE_JOKE, generateJoke);
}