const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  btnIsLoading: false,
  isFollowing: false,
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'TOGGLE_BTN_IS_LOADING':
      return {
        ...state,
        btnIsLoading: action.value,
      }
    case TOGGLE_IS_FOLLOWING:
      // return {
      //   ...state,
      //   isFollowing: action.value,
      // }
      alert('123')
    default:
      return state
  }
}

export const follow = (userId) => {
  return {
    type: 'FOLLOW',
    userId: userId,
  }
}

export const unfollow = (userId) => {
  return {
    type: 'UNFOLLOW',
    userId: userId,
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page,
  }
}

export const setUsersCount = (usersCount) => {
  return {
    type: SET_USERS_COUNT,
    usersCount: usersCount,
  }
}

export const toggleIsFetching = (value) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: value,
  }
}

export const toggleIsBtnLoading = (value) => ({
  type: 'TOGGLE_BTN_IS_LOADING',
  value,
})

export const toggleIsFollowing = (value) => ({
  type: TOGGLE_IS_FOLLOWING,
  value,
})
