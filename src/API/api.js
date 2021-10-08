import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3a702d14-5d29-4cf4-a86d-9fa646c2a2d5'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    unfollowUser(id = 1) {
        instance.delete(`follow/${id}`).then(response => {
            return response.data;
        } )
    }
}


