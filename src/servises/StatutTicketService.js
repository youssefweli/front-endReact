import axios from "axios";

const base = "http://localhost:8080/api/ticket";


export const getAllTicket = async()=>{
    try {
        const rep = await axios.get(`${base}`);
         return rep.data;
    } catch(error){
        console.error("erreud dans la recuperation des ticket ",error);

    }
};