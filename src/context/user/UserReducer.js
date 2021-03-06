export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          id: action.payload?._id,
          email: action.payload?.email,
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          movieLikes: action.payload?.movieLikes
        }
      }

    case 'UPDATE_LIKES':
      return {
        ...state,
        user: {
          ...state.user,
          movieLikes: action.payload?.likes ? action.payload?.likes : []
        }
      }

    default:
      return state
  }
}
