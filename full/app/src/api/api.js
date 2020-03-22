import {setStorage} from './localstorage'

function login(data) {
  return fetch(`${window.origin}/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(setStorage)
    .catch(console.error)
}

function register(data) {
  return fetch(`${window.origin}/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .catch(console.error)
}

export {
  login,
  register
}