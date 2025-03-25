const tryCatch = async (fn) => {
  try {
    const result = await fn();
    return [result, null]; // Return data and no error
  } catch (error) {
    return [null, error]; // Return null and the error
  }
};

export default tryCatch;
