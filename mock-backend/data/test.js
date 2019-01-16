const data = {
  "port": 8888,
  "api": [
    {
      "method": "GET",
      "path": "/user",
      "response": {
        "username": "test 1"
      }
    },
    {
      "method": "POST",
      "path": "/user",
      "response": {
        "user": "created"
      }
    },
    {
      "method": "POST",
      "path": "/user",
      "response": {
        "user": "deleted"
      }
    },
    {
      "method": "PUT",
      "path": "/user",
      "response": {
        "user": "updated"
      }
    }
  ]
}

module.exports = {
  data
}