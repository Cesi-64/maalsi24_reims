import axios from 'axios'
import { accountService } from './account.service'

// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: 'http://20.19.35.142:52000'
})


// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }

    return request
})

// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status === 401){
        accountService.logout()
        window.location = '/login'
    }else{
        return Promise.reject(error)
    }
})

export default Axios