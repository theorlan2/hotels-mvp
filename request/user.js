import Axios from "axios";

export function get() {
    return Axios.get('/api/user');
}

export function register(id,data) {
    return Axios.post('/api/register',data);
}

export function edit(id,data) {
    return Axios.put('/api/user/'+id,data);
}


