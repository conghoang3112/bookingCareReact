import axios from "../axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('api/login', { email: userEmail, password: userPassword });

}

const getAllUser = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from userService', data);
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (data) => {
    return axios.delete('/api/delete-user', { data: { id: data } });
}

const editUserService = (data) => {
    return axios.put('/api/edit-user', data);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`api/top-doctor-home?limit=${limit}`)
}

export {
    handleLoginApi, getAllUser, createNewUserService, deleteUserService, editUserService,
    getAllCodeService, getTopDoctorHomeService
}