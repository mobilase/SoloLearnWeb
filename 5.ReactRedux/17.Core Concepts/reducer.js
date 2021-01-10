function contactsApp(state, action) {
  if (action.type === 'ADD_CONTACT') {
    return [ ...state,  action.name ]
  } else {
    return state
  }
}
