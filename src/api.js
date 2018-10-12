const params = {
	method: 'GET',
	headers: {
		'Accept': 'text/plain'
	}
};

// Get jokes from cache if they exist, otherwise get them from API
export const getAllJokes = () => {
	const allJokes = localStorage.getItem('allJokes');
	if (allJokes) {
		return Promise.resolve(allJokes);
	}
	return fetchAllJokes();
};

export const fetchAllJokes = () => {
	return new Promise((resolve, reject) => {
		let allJokes = '';
		// Recursively get all pages with jokes (when we get empty response, there are no more jokes)
		const getPage = async (page) => {
			try {
				const response = await fetch(`https://icanhazdadjoke.com/search?page=${page}&limit=30`, params);
				const text = await response.text();
				if (text) {
					allJokes += `${text}\n`;
					getPage(++page);
				} else {
					resolve(allJokes);
					localStorage.setItem('allJokes', allJokes);
				}
			} catch (e) {
				reject(e);
			}
		};
		// Call the recursive function starting with page 1
		getPage(1);
	});
};