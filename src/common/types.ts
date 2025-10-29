export interface User {
    id: string
    username: string
    email: string
    role: string
    createdAt: string
    updatedAt: string
}

export interface Patient {
    id: string
    name: string
    age: number
    gender: 'Male' | 'Female'
    phone: string
    address?: string
    createdAt: string
    updatedAt: string
}

export interface TestOrder {
    id: string
    patientId: string
    testName: string
    status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled'
    createdAt: string
    updatedAt: string
}

export interface TestResult {
    id: string
    orderId: string
    testName: string
    result: string
    flag: 'Normal' | 'High' | 'Low' | 'Critical'
    createdAt: string
    updatedAt: string
}

export interface Instrument {
    id: string
    name: string
    model: string
    status: 'Active' | 'Inactive' | 'Maintenance'
    createdAt: string
    updatedAt: string
}

export interface Reagent {
    id: string
    name: string
    lot: string
    expiryDate: string
    quantity: number
    createdAt: string
    updatedAt: string
}

export interface FlaggingRule {
    id: string
    name: string
    condition: string
    action: string
    createdAt: string
    updatedAt: string
}

export interface HL7Message {
    id: string
    type: string
    status: 'Sent' | 'Received' | 'Failed'
    timestamp: string
    content: string
}

export interface QuarantineItem {
    id: string
    sampleId: string
    reason: string
    date: string
    status: 'Active' | 'Released'
}

export interface InstrumentLog {
    id: string
    instrumentId: string
    event: string
    timestamp: string
    details: string
}

export interface AuditLog {
    id: string
    userId: string
    action: string
    timestamp: string
    details: string
}
