const users = [
  { username: 'test1@gmail.com', password: '123456' },
  { username: 'test2@gmail.com', password: '123456' },
  { username: 'test3@gmail.com', password: '123456' },
  { username: 'test4@gmail.com', password: '123456' },
  { username: 'test5@gmail.com', password: '123456' },
  { username: 'test6@gmail.com', password: '123456' },
  { username: 'test7@gmail.com', password: '123456' },
  { username: 'test8@gmail.com', password: '123456' },
]

function getFreeUser() {
  const freeUserIndex = users.findIndex(({ notFree }) => !notFree)
  users[freeUserIndex].notFree = true
  const { notFree, ...restUserProps } = users[freeUserIndex]
  return restUserProps
}

function setFreeUser(freeUser) {
  const freeUserIndex = users.findIndex(({ username }) => username === freeUser)
  users[freeUserIndex].notFree = false
}

function getUsersLits() {
  return users
}

module.exports = {
  getFreeUser,
  setFreeUser,
  getUsersLits
}