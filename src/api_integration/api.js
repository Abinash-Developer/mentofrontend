import axios from "axios"

export async function fetchTeacher(){
    try {
        const teacherResult = await axios.get('http://localhost:8080/fetch-teacher');
        return teacherResult.data.send;
    } catch (error) {
        console.log(error)
    }
}