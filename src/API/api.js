import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a6c20137-2c40-4542-93b7-7ce8cd0e0dc8',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  followUser(userId) {
    return instance.post('follow/' + userId, {}).then((response) => {
      return response.data
    })
  },
  unfollow(userId) {
    return instance.delete('follow/' + userId).then((response) => {
      return response.data
    })
  },
}
