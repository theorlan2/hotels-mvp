import Axios from "axios";

export function get() {
    return Axios.get('/api/rooms');
}

export function add(id,data) {
    return Axios.post('/api/rooms',data);
}

export function edit(id,data) {
    return Axios.put('/api/rooms/'+id,data);
}


