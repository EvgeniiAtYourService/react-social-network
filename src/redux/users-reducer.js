const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            }
          }
          return user
        }),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            }
          }
          return user
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    case SET_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      }
    default:
      return state
  }
}

export const followAC = (userId) => {
  return {
    type: 'FOLLOW',
    userId: userId,
  }
}

export const unfollowAC = (userId) => {
  return {
    type: 'UNFOLLOW',
    userId: userId,
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  }
}

export const setCurrentPageAC = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page,
  }
}

export const setUsersCountAC = (usersCount) => {
  return {
    type: SET_USERS_COUNT,
    usersCount: usersCount,
  }
}
