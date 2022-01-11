export const mobileMenu = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MOBILE_MENU':
      return true;
    case 'HIDE_MOBILIE_MENU':
      return false;
    default:
      return state
  }
}