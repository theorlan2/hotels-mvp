import Axios from "axios";

export function get() {
    return Axios.get('/api/hotels');
}

export function add(id,data) {
    return Axios.post('/api/hotels',data);
}


export function edit(id,data) {
    return Axios.put('/api/hotels/'+id,data);
}