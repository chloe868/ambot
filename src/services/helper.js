const axios = require('axios')
const base = "http://localhost:5000"
function login(username, password){
    return new Promise((resolve, reject)=>{
        let url = `${base}/login`
        axios.post(url, {username: username, password: password}).then(resp=>{
            resolve(resp)
        }).catch(err=>{
            reject(err)
        })
    })
}

function getVehicles(username, password){
    return new Promise((resolve, reject)=>{
        let url = `${base}/login`
        axios.post(url, {username: username, password: password}).then(resp=>{
            resolve(resp)
        }).catch(err=>{
            reject(err)
        })
    })
}
function addItem(body){
    return new Promise((resolve, reject)=>{
        let url = `${base}/addItem`
        axios.post(url, body).then(resp=>{
            resolve(resp)
        }).catch(err=>{
            reject(err)
        })
    })
}

function getItems(){
    return new Promise((resolve, reject)=>{
        let url = `${base}/getItems`
        axios.get(url).then(resp=>{
            resolve(resp)
        }).catch(err=>{
            reject(err)
        })
    })
}
export default {
    login,
    getVehicles,
    addItem,
    getItems
}