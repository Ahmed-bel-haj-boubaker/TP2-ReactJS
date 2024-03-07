import axios from "axios";

const url = 'http://localhost:3001/events';

export const getAllEvent = async ()=>{
   const response = await axios.get(url);
   return response;
}

export const addEvent = async(event)=>{
    const response = await axios.post(url,event);
    return response;
}

export const findById = async (id) => {
    try {
       // Make a GET request to the server endpoint for the specified event ID
       const response = await axios.get(`${url}/${id}`);
 
       return response.data;
    } catch (error) {
       // If an error occurs, log it and return null
       console.error("Error fetching event by ID:", error);
       return null;
    }
 };

 export const updateEvent = async (id,event)=>{
    const response = await axios.put(`${url}/${id}`,event);
    return response;

 }

 export const deleteEventById = async (id) => {
    return await axios.delete(`${url}/${id}`);
   };