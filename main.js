const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      const data = response.data

      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

function getUser() {
  axios.get(`${url}/1`)
    .then(response => {
      const data = response.data

      userAvatar.src = data.avatar
      userNome.textContent = data.name
      userId.textContent = data.id
      userCity.textContent = data.city
    })
    .catch(error => console.log(error))
}

function addNewUser(newUser) {

  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

function updateUser(user, id) {
  axios.put(`${url}/${id}`, user)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

getUsers()
getUser()

