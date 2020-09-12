function stepLog(message, cb) {
  console.log(message);
  return cb();
}

export {
  stepLog
}
