import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    setRedirectPath
} from '../slices/authSlice'

// Mock API functions
const mockLoginAPI = async (credentials: { email: string; password: string }) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock validation - Different users for different roles
    if (credentials.email === 'admin@lab.com' && credentials.password === 'AdminSecure2024!') {
        return {
            user: {
                id: '1',
                username: 'admin',
                email: credentials.email,
                role: 'admin',
                name: 'Admin User'
            },
            token: 'mock-jwt-token-admin-' + Date.now()
        }
    } else if (credentials.email === 'user@lab.com' && credentials.password === 'LabSecure2024!') {
        return {
            user: {
                id: '2',
                username: 'user',
                email: credentials.email,
                role: 'user',
                name: 'John Doe'
            },
            token: 'mock-jwt-token-user-' + Date.now()
        }
    } else {
        throw new Error('Invalid credentials')
    }
}

const mockLogoutAPI = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return { success: true }
}

// Login Saga
function* loginSaga(action: PayloadAction<{ email: string; password: string }>) {
    try {
        const { email, password } = action.payload
        const response = yield call(mockLoginAPI, { email, password })

        // Store token in localStorage
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))

        yield put(loginSuccess({
            user: response.user,
            token: response.token
        }))

        // Set redirect path based on role
        if (response.user.role === 'admin') {
            yield put(setRedirectPath('/admin'))
        } else {
            yield put(setRedirectPath('/home'))
        }
    } catch (error: any) {
        yield put(loginFailure(error.message || 'Login failed'))
    }
}

// Logout Saga
function* logoutSaga() {
    try {
        yield call(mockLogoutAPI)

        // Clear localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        yield put(logoutSuccess())
    } catch (error: any) {
        yield put(logoutFailure(error.message || 'Logout failed'))
    }
}

// Check Auth Status Saga
function* checkAuthStatusSaga() {
    try {
        const token = localStorage.getItem('token')
        const userStr = localStorage.getItem('user')

        if (token && userStr) {
            const user = JSON.parse(userStr)
            yield put(loginSuccess({ user, token }))
        }
    } catch (error) {
        // Clear invalid data
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}

export function* authSaga() {
    yield takeLatest(loginRequest.type, loginSaga)
    yield takeLatest(logoutRequest.type, logoutSaga)
    yield takeEvery('auth/checkAuthStatus', checkAuthStatusSaga)
}
