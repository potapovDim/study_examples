const md = (function() {
  const data = {filed: null}

  return {
    setDataField(value) {
      data.filed = value;
    },
    getDataField() {
      return data.filed
    }
  }
})();


const {getDataField, setDataField} = md;

setDataField('test')
console.log(getDataField())