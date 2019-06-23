import Axios from "axios";

export function get() {
    return Axios.get('/api/reservations');
}

export function add(id,data) {
    return Axios.post('/api/reservations',data);
}

export function edit(id,data) {
    return Axios.put('/api/reservations/'+id,data);
}

export function getDisponibilidad(data) {
    return Axios.post('/api/reservations/avaibles',data);
}


