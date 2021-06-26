const events = {
	updateClient: 'UPDATE_CLIENT',
	updateSeleniumClient: 'UPDATE_SELENIUM_CLIENT',
};

let client = null;

const pubsub = (function() {
	const handlers = {};

	function publish(eventName, data) {
		if (eventName === events.updateClient) {
			client = data;
		}

		if (handlers[eventName] === undefined) {
			return;
		}

		handlers[eventName].forEach((handler) => handler(data));
	}

	function subscribe(eventName, handler) {
		if (handlers[eventName] === undefined) {
			handlers[eventName] = [];
		}
		handlers[eventName].push(handler);
	}

	function getCurrentClient() {
		return client;
	}

	return {
		subscribe,
		publish,
		getCurrentClient
	};

})();

export {
	pubsub,
	events
};
