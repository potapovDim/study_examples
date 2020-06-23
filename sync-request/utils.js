function tryStringify(data) {
  if(typeof data === 'string') {
    return data;
  } else {
    try {
      return JSON.stringify(data);
    } catch(error) {
      console.log(error);
      return '';
    }
  }
}

module.exports = {

}