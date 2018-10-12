import Markov from 'markovchain';

const wordCount = sentence => sentence.split(' ').length;
const isQuestion = sentence => sentence.match(/^(why|what|who|where|did|do)/i);
const endsWithPunctuation = sentence => sentence.match(/[.,!?]$/);

const addPunctuation = sentence => {
	if (isQuestion(sentence)) {
		sentence += '?';
	} else if (!endsWithPunctuation(sentence)) {
		sentence += '.';
	}
	return sentence;
};

const shouldStartSentence = (wordList) => {
		const tmpList = Object.keys(wordList).filter((word) => {
			return word[0] >= 'A' && word[0] <= 'Z'
		});
		return tmpList[~~(Math.random() * tmpList.length)]
	}
;

const shouldEndSentence = sentence => {
	const length = wordCount(sentence);
	return length >= 15 && !sentence.match(/(a|an|the|if|or|by|but|I|,)$/i);
};

const generateSentence = (chain) => {
	const sentence = chain.start(shouldStartSentence).end(shouldEndSentence).process();
	return addPunctuation(sentence);
};

export const generateJoke = (seed) => {
	const chain = new Markov(seed);
	let firstSentence, secondSentence = '';

	do {
		firstSentence = generateSentence(chain);
	} while (wordCount(firstSentence) <= 3);

	if (wordCount(firstSentence) < 15) {
		secondSentence = generateSentence(chain);
	}

	return `${firstSentence} ${secondSentence}`;
};