function initList(list) {

  document.querySelector('body').innerHTML = list
}

function logOut() {
  location.reload()
}

function login() {

  const name = document.querySelector('#name').value
  const pass = document.querySelector('#pass').value
  return fetch('http://localhost:9090/login', {
    method: 'POST', body: JSON.stringify({name: name, pass: pass})
  })
    .then(function(resp) {
      return resp.text()
    })
    .then(initList)
}