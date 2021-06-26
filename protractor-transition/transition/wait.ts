async function waitFor(executionCallback, opts = {timeout: 10000, message: 'Condition failed'}) {
	const {timeout, message} = opts;

	const start = Date.now();
	let result;

	while (Date.now() - start < timeout) {
		result = await executionCallback();
		if (result) {
			return;
		}
	}

	throw new Error(message);
}

export {
	waitFor
};
