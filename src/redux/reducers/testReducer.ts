import Actions from 'Actions';

const initState = {
	value: 0,
};

const test = (state = initState, action) => {
	switch (action.type) {
		case Actions.test.constants.INCREMENT:
			return {
				...state,
				value: action.payload,
			};
		case Actions.test.constants.DECREMENT:
			return {
				...state,
				value: action.payload,
			};
		default:
			return state;
	}
};

export default test;