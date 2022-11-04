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

export const average = (arr) => {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.round(avg * 10) / 10;
};
