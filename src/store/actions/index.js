//mobile menu
export const showMobileMenu = () => {
  return ({
    type: "SHOW_MOBILE_MENU",
  })
}
export const hideMobileMenu = () => {
  return ({
    type: "HIDE_MOBILIE_MENU",
  })
}


//destination 
export const destinationPick = (destination) => {
  return ({
    type: 'DESTINATION_PICK',
    payload: destination
  })
}

//crew 
export const crewPick = (crew) => {
  return ({
    type: 'CREW_PICK',
    payload: crew
  })
}
//technology 
export const technologyPick = (technology) => {
  return ({
    type: 'TECHNOLOGY_PICK',
    payload: technology
  })
}