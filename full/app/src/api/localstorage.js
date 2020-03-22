function setStorage(data) {
  const {err, ...rest} = data
  if(err) {
    console.error(err)
  } else {
    Object.entries(rest).forEach(([key, val]) => {
      localStorage.setItem(key, JSON.stringify(val))
    })
  }
  return data
}

export {
  setStorage
}