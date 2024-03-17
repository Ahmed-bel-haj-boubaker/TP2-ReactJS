import { CreateSlice } from "@reduxjs/toolkit";
import {getAllEvent} from'../../service/api';

let initialState = {
    events:[],
    selectedEvent:{},
    errors:""
}