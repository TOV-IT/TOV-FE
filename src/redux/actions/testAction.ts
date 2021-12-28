const constants: any = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const increment = (count: number) => {
  return {
    type: constants.INCREMENT,
    payload: count + 1,
  };
};

const decrement = (count: number) => {
  return {
    type: constants.DECREMENT,
    payload: count - 1,
  };
};

const testAction = {
  constants,
  increment,
  decrement,
};

export default testAction;
