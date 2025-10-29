import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

// Mock API functions
const mockGetInstrumentsAPI = async () => {
    await new Promise(resolve => setTimeout(resolve, 800))
    return [
        {
            id: '1',
            name: 'Hematology Analyzer',
            model: 'Sysmex XN-1000',
            serialNumber: 'HMA001',
            status: 'active',
            location: 'Lab Room 1',
            lastMaintenance: '2024-01-10',
            nextMaintenance: '2024-02-10',
            calibrationStatus: 'valid',
            testsPerHour: 120
        },
        {
            id: '2',
            name: 'Chemistry Analyzer',
            model: 'Roche Cobas 6000',
            serialNumber: 'CHA002',
            status: 'maintenance',
            location: 'Lab Room 2',
            lastMaintenance: '2024-01-15',
            nextMaintenance: '2024-01-20',
            calibrationStatus: 'expired',
            testsPerHour: 200
        },
        {
            id: '3',
            name: 'Microbiology Analyzer',
            model: 'BD Phoenix M50',
            serialNumber: 'MBA003',
            status: 'active',
            location: 'Lab Room 3',
            lastMaintenance: '2024-01-12',
            nextMaintenance: '2024-02-12',
            calibrationStatus: 'valid',
            testsPerHour: 80
        }
    ]
}

const mockCreateInstrumentAPI = async (instrumentData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
        id: Date.now().toString(),
        ...instrumentData,
        status: 'active',
        calibrationStatus: 'pending',
        createdAt: new Date().toISOString()
    }
}

const mockUpdateInstrumentAPI = async ({ id, ...instrumentData }: any) => {
    await new Promise(resolve => setTimeout(resolve, 800))
    return {
        id,
        ...instrumentData,
        updatedAt: new Date().toISOString()
    }
}

const mockDeleteInstrumentAPI = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 600))
    return { success: true, id }
}

// Get Instruments Saga
function* getInstrumentsSaga() {
    try {
        const instruments = yield call(mockGetInstrumentsAPI)
        yield put({ type: 'instruments/getInstrumentsSuccess', payload: instruments })
    } catch (error: any) {
        yield put({ type: 'instruments/getInstrumentsFailure', payload: error.message })
    }
}

// Create Instrument Saga
function* createInstrumentSaga(action: PayloadAction<any>) {
    try {
        const newInstrument = yield call(mockCreateInstrumentAPI, action.payload)
        yield put({ type: 'instruments/createInstrumentSuccess', payload: newInstrument })
    } catch (error: any) {
        yield put({ type: 'instruments/createInstrumentFailure', payload: error.message })
    }
}

// Update Instrument Saga
function* updateInstrumentSaga(action: PayloadAction<any>) {
    try {
        const updatedInstrument = yield call(mockUpdateInstrumentAPI, action.payload)
        yield put({ type: 'instruments/updateInstrumentSuccess', payload: updatedInstrument })
    } catch (error: any) {
        yield put({ type: 'instruments/updateInstrumentFailure', payload: error.message })
    }
}

// Delete Instrument Saga
function* deleteInstrumentSaga(action: PayloadAction<string>) {
    try {
        const result = yield call(mockDeleteInstrumentAPI, action.payload)
        yield put({ type: 'instruments/deleteInstrumentSuccess', payload: result.id })
    } catch (error: any) {
        yield put({ type: 'instruments/deleteInstrumentFailure', payload: error.message })
    }
}

export function* instrumentSaga() {
    yield takeEvery('instruments/getInstrumentsRequest', getInstrumentsSaga)
    yield takeLatest('instruments/createInstrumentRequest', createInstrumentSaga)
    yield takeLatest('instruments/updateInstrumentRequest', updateInstrumentSaga)
    yield takeLatest('instruments/deleteInstrumentRequest', deleteInstrumentSaga)
}
