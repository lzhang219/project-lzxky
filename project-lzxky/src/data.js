import axios from "axios";

export const fetchSchools = async () => {
    try {
        const response = await axios.get("/api/schools");
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };

export const fetchSchool = async (id) => {
    try {
        const response = await axios.get(`/api/school`, { params: { id: id }});
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };

