import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUsers = createAsyncThunk('users/add',async () => {
    const response = await axios.post('htt://localhost:3005/users',{
        name : faker.name.fullName()
    });

    return response.data;
});

export { addUsers };
