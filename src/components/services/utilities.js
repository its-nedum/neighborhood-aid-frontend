export const getToken = () => {
    return localStorage.getItem('NeighborhoodToken')
}

export const isLoggedIn = () => {
    if(getToken() === null || getToken() === undefined || getToken() === ""){
        return false
    }

    return true
}