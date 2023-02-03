import { createSlice } from "@reduxjs/toolkit";
import {dataPerson} from '../data/dataPerson'

const personSlice = createSlice({
    name: 'persons',
    initialState: {
        persons: dataPerson
    },
    reducers:{
        editPersonName(state, action){
            const objectEdit = state.persons.findIndex( item => item.id === action.payload.id)
            state.persons[objectEdit].name = action.payload.name
        },
        editPersonPhone(state, action){
            const objectEdit = state.persons.findIndex( item => item.id === action.payload.id)
            state.persons[objectEdit].phone = action.payload.phone
        },
        editPersonBirthday(state, action){
            const objectEdit = state.persons.findIndex( item => item.id === action.payload.id)
            state.persons[objectEdit].birthday = action.payload.newBurthday
        },
        editPersonRole(state, action){
            const objectEdit = state.persons.findIndex( item => item.id === action.payload.id)
            state.persons[objectEdit].role = action.payload.newRole
        },
        editPersonArchive(state, action){
            const objectEdit = state.persons.findIndex( item => item.id === action.payload.id)
            state.persons[objectEdit].isArchive = action.payload.checked
        },
        addNewPerson(state, action){
            state.persons.unshift({
                "id": action.payload.id,
                "name": action.payload.name,
                "isArchive": action.payload.checked,
                "role": action.payload.new_role,
                "phone": action.payload.phone,
                "birthday": action.payload.b_day
            })
        }
    }
})

export const { editPersonName, 
                editPersonPhone, 
                editPersonBirthday, 
                editPersonRole, 
                editPersonArchive,
                addNewPerson 
            } = personSlice.actions

export default personSlice.reducer