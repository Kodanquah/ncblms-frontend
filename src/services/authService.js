import api from "../api/axios";

export const login = async (employee_number, password) => {

    const response = await api.post("/auth/login", {

        employee_number,
        password

    });

    return response.data;

};