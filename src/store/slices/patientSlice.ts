import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Patient } from '../types'

interface PatientState {
    patients: Patient[]
    loading: boolean
    error: string | null
}

const initialState: PatientState = {
    patients: [],
    loading: false,
    error: null,
}

const patientSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        fetchPatientsStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchPatientsSuccess: (state, action: PayloadAction<Patient[]>) => {
            state.loading = false
            state.patients = action.payload
            state.error = null
        },
        fetchPatientsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        addPatient: (state, action: PayloadAction<Patient>) => {
            state.patients.push(action.payload)
        },
        updatePatient: (state, action: PayloadAction<Patient>) => {
            const index = state.patients.findIndex(patient => patient.id === action.payload.id)
            if (index !== -1) {
                state.patients[index] = action.payload
            }
        },
        deletePatient: (state, action: PayloadAction<string>) => {
            state.patients = state.patients.filter(patient => patient.id !== action.payload)
        },
    },
})

export const {
    fetchPatientsStart,
    fetchPatientsSuccess,
    fetchPatientsFailure,
    addPatient,
    updatePatient,
    deletePatient,
} = patientSlice.actions
export default patientSlice.reducer
