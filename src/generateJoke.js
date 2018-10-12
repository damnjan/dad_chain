import Markov from 'markovchain';

export const generateJoke = (seed) => {
	const chain = new Markov(seed);

	// Use first word for a generated sentence only if it is capitalized
	const useUpperCase = (wordList) => {
			const tmpList = Object.keys(wordList).filter((word) => {
				return word[0] >= 'A' && word[0] <= 'Z'
			});
			return tmpList[~~(Math.random() * tmpList.length)]
		}
	;

	// Ends the sentence if it's longer than 15 words AND doesn't end on specific words
	const endFn = sentence => {
		const length = sentence.split(' ').length;
		return length >= 15 && !sentence.match(/(a|an|the|if|or|by|but|I|,)$/i);
	};

	// First sentence
	let first;
	// Keep generating until sentence is at least 3 words long
	do {
		first = chain.start(useUpperCase).end(endFn).process();
	} while (first.split(' ').length <= 3);

	// Is it a question?
	if (first.match(/^(why|what|who|where|did|do)/i)) {
		first += '?';
	} else if (!first.match(/[.,!?]$/)) {
		first += '.';
	}

	// Generate another sentence
	let second = chain.start(useUpperCase).end(endFn).process();
	if (!second.match(/[.,!?]$/)) {
		second += '.';
	}

	// If first sentence is longer than 15, don't write second one
	if (first.split(' ').length >= 15) {
		second = '';
	}

	return `${first} ${second}`;
};