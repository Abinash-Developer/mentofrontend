import axios from "axios";
import { API_URL } from "../constants";

export async function fetchTeacher(){
    try {
        const teacherResult = await axios.get(`${API_URL}/fetch-teacher`);
        return teacherResult.data.send;
    } catch (error) {
        console.log(error)
    }
}