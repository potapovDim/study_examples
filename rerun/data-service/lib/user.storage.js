const users = [
  { username: 'user1@gmail.com', password: '1234567' },
  { username: 'user2@gmail.com', password: '1234567' },
  { username: 'user3@gmail.com', password: '1234567' },
  { username: 'user4@gmail.com', password: '1234567' },
  { username: 'user5@gmail.com', password: '1234567' },
  { username: 'user6@gmail.com', password: '1234567' },
  { username: 'user7@gmail.com', password: '1234567' },
  { username: 'user8@gmail.com', password: '1234567' },
  { username: 'user9@gmail.com', password: '1234567' },
  { username: 'user10@gmail.com', password: '1234567' },
]

function getFreeUser() {
  const requiredUserIndex = users.findIndex(({ notFree }) => !notFree)
  users[requiredUserIndex].notFree = true
  const { notFree, ...restUserProps } = users[requiredUserIndex]
  return restUserProps
}

function setFreeUser(requiredUserName) {
  const requiredUserIndex = users.findIndex(({ username }) => requiredUserName === username)
  users[requiredUserIndex].notFree = false
}


function getFullUsersList() {
  return users
}

module.exports = {
  getFreeUser,
  setFreeUser,
  getFullUsersList
}