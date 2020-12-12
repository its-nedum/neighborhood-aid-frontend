import jwt_decode from 'jwt-decode'

export const saveToken = (token) => {
    localStorage.setItem('Aid-Auth', token)
}

export const setAuthToken = () => {
    return `Bearer ${localStorage.getItem('Aid-Auth')}`
}

export const getToken = () => {
    return localStorage.getItem('Aid-Auth')
}

export const isLoggedIn = () => {
    if(getToken() === null || getToken() === undefined || getToken() === ""){
        return false
    }

    try{
        let { exp } = jwt_decode(getToken())
        if( exp < Math.ceil(new Date().getTime() / 1000)){
        localStorage.removeItem('Aid-Auth')
        return false
        }
    }catch(e){
        return false
    }
        return true
}