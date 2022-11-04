export const timer = (callback) => {
  const timerId = setInterval(() => {
    callback();
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 10000);
};

// eslint-disable-next-line no-promise-executor-return
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
