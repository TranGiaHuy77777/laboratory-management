import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const PatientDetailsPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for all patients
  const allPatients = [
    {
      id: 'MRN-2024-001',
      name: 'John Doe',
      mrn: 'MRN-2024-001',
      age: 40,
      gender: 'male',
      dateOfBirth: '15/3/1985',
      phone: '+1 (555) 123-4567',
      email: 'john.doe@email.com',
      address: '123 Main St, New York, NY 10001',
      avatar: 'JD'
    },
    {
      id: 'MRN-2024-002',
      name: 'Jane Smith',
      mrn: 'MRN-2024-002',
      age: 35,
      gender: 'female',
      dateOfBirth: '22/7/1989',
      phone: '+1 (555) 234-5678',
      email: 'jane.smith@email.com',
      address: '456 Oak Ave, Los Angeles, CA 90210',
      avatar: 'JS'
    },
    {
      id: 'MRN-2024-003',
      name: 'Robert Johnson',
      mrn: 'MRN-2024-003',
      age: 46,
      gender: 'male',
      dateOfBirth: '8/12/1978',
      phone: '+1 (555) 345-6789',
      email: 'robert.j@email.com',
      address: '789 Pine St, Chicago, IL 60601',
      avatar: 'RJ'
    },
    {
      id: 'MRN-2024-004',
      name: 'Emily Williams',
      mrn: 'MRN-2024-004',
      age: 30,
      gender: 'female',
      dateOfBirth: '3/5/1994',
      phone: '+1 (555) 456-7890',
      email: 'emily.w@email.com',
      address: '321 Elm St, Houston, TX 77001',
      avatar: 'EW'
    },
    {
      id: 'MRN-2024-005',
      name: 'Michael Brown',
      mrn: 'MRN-2024-005',
      age: 43,
      gender: 'male',
      dateOfBirth: '18/9/1981',
      phone: '+1 (555) 567-8901',
      email: 'michael.b@email.com',
      address: '654 Maple Ave, Phoenix, AZ 85001',
      avatar: 'MB'
    },
    {
      id: 'MRN-2024-006',
      name: 'Sarah Davis',
      mrn: 'MRN-2024-006',
      age: 36,
      gender: 'female',
      dateOfBirth: '12/11/1988',
      phone: '+1 (555) 678-9012',
      email: 'sarah.d@email.com',
      address: '987 Cedar Rd, Philadelphia, PA 19101',
      avatar: 'SD'
    }
  ]

  // Find the specific patient by ID
  const patientData = allPatients.find(patient => patient.id === id)

  // If patient not found, redirect back to patients list
  if (!patientData) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <div className="text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Patient Not Found</h3>
            <p className="mt-1 text-sm text-gray-500">The patient with ID "{id}" could not be found.</p>
            <div className="mt-4">
              <Link
                to="/admin/patients"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Patients
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mock data for recent activity based on patient
  const getRecentActivity = (patientId: string) => {
    const activities = {
      'MRN-2024-001': [
        { id: 1, testName: 'Complete Blood Count (CBC)', date: '2025-01-10', status: 'Completed', result: 'Normal' },
        { id: 2, testName: 'Lipid Panel', date: '2025-01-08', status: 'Completed', result: 'Normal' },
        { id: 3, testName: 'Thyroid Function Test', date: '2025-01-05', status: 'In Progress', result: '-' }
      ],
      'MRN-2024-002': [
        { id: 1, testName: 'Complete Blood Count (CBC)', date: '2025-01-09', status: 'Completed', result: 'Normal' },
        { id: 2, testName: 'Urinalysis', date: '2025-01-07', status: 'Completed', result: 'Normal' },
        { id: 3, testName: 'Blood Glucose Test', date: '2025-01-04', status: 'Pending', result: '-' }
      ],
      'MRN-2024-003': [
        { id: 1, testName: 'Complete Blood Count (CBC)', date: '2025-01-11', status: 'Completed', result: 'Normal' },
        { id: 2, testName: 'Liver Function Test', date: '2025-01-09', status: 'Completed', result: 'Normal' },
        { id: 3, testName: 'Kidney Function Test', date: '2025-01-06', status: 'In Progress', result: '-' }
      ],
      'MRN-2024-004': [
        { id: 1, testName: 'Complete Blood Count (CBC)', date: '2025-01-12', status: 'Completed', result: 'Normal' },
        { id: 2, testName: 'Pregnancy Test', date: '2025-01-10', status: 'Completed', result: 'Negative' },
        { id: 3, testName: 'Iron Studies', date: '2025-01-08', status: 'Pending', result: '-' }
      ],
      'MRN-2024-005': [
        { id: 1, testName: 'Complete Blood Count (CBC)', date: '2025-01-11', status: 'Completed', result: 'Normal' },
        { id: 2, testName: 'Prostate Specific Antigen', date: '2025-01-09', status: 'Completed', result: 'Normal' },
        { id: 3, testName: 'Cardiac Enzymes', date: '2025-01-07', status: 'In Progress', result: '-' }
      ],
      'MRN-2024-006': [
        { id: 1, testName: 'Complete Blood Count (CBC)', date: '2025-01-09', status: 'Completed', result: 'Normal' },
        { id: 2, testName: 'Thyroid Function Test', date: '2025-01-07', status: 'Completed', result: 'Normal' },
        { id: 3, testName: 'Vitamin D Test', date: '2025-01-05', status: 'Pending', result: '-' }
      ]
    }
    return activities[patientId as keyof typeof activities] || activities['MRN-2024-001']
  }

  const recentActivity = getRecentActivity(patientData.id)

  // Mock data for summary stats based on patient
  const getSummaryStats = (patientId: string) => {
    const stats = {
      'MRN-2024-001': [
        { title: 'Total Tests', value: '24', subtitle: 'All time', icon: 'document' },
        { title: 'Pending', value: '1', subtitle: 'In progress', icon: 'clock' },
        { title: 'Last Visit', value: '3d', subtitle: 'ago', icon: 'calendar' }
      ],
      'MRN-2024-002': [
        { title: 'Total Tests', value: '18', subtitle: 'All time', icon: 'document' },
        { title: 'Pending', value: '1', subtitle: 'In progress', icon: 'clock' },
        { title: 'Last Visit', value: '2d', subtitle: 'ago', icon: 'calendar' }
      ],
      'MRN-2024-003': [
        { title: 'Total Tests', value: '31', subtitle: 'All time', icon: 'document' },
        { title: 'Pending', value: '1', subtitle: 'In progress', icon: 'clock' },
        { title: 'Last Visit', value: '5d', subtitle: 'ago', icon: 'calendar' }
      ],
      'MRN-2024-004': [
        { title: 'Total Tests', value: '15', subtitle: 'All time', icon: 'document' },
        { title: 'Pending', value: '1', subtitle: 'In progress', icon: 'clock' },
        { title: 'Last Visit', value: '1d', subtitle: 'ago', icon: 'calendar' }
      ],
      'MRN-2024-005': [
        { title: 'Total Tests', value: '28', subtitle: 'All time', icon: 'document' },
        { title: 'Pending', value: '1', subtitle: 'In progress', icon: 'clock' },
        { title: 'Last Visit', value: '4d', subtitle: 'ago', icon: 'calendar' }
      ],
      'MRN-2024-006': [
        { title: 'Total Tests', value: '22', subtitle: 'All time', icon: 'document' },
        { title: 'Pending', value: '1', subtitle: 'In progress', icon: 'clock' },
        { title: 'Last Visit', value: '2d', subtitle: 'ago', icon: 'calendar' }
      ]
    }
    return stats[patientId as keyof typeof stats] || stats['MRN-2024-001']
  }

  const summaryStats = getSummaryStats(patientData.id)

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-100 text-blue-800'
      case 'In Progress':
        return 'bg-orange-100 text-orange-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getIcon = (iconName: string) => {
    const icons = {
      person: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      calendar: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      phone: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      email: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      location: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      document: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      clock: (
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      chart: (
        <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
    return icons[iconName as keyof typeof icons] || null
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Patient Details</h1>
            <p className="text-gray-600 text-sm">View and manage patient information</p>
          </div>
        </div>

        {/* Back to Patients Link */}
        <div className="mt-3">
          <Link
            to="/admin/patients"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Patients
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Patient Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Patient Avatar and Basic Info */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">{patientData.avatar}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{patientData.name}</h2>
              <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {patientData.mrn}
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                {getIcon('person')}
                <span className="ml-3 text-gray-700 text-sm">{patientData.age} years / {patientData.gender}</span>
              </div>
              <div className="flex items-center">
                {getIcon('calendar')}
                <span className="ml-3 text-gray-700 text-sm">{patientData.dateOfBirth}</span>
              </div>
              <div className="flex items-center">
                {getIcon('phone')}
                <span className="ml-3 text-gray-700 text-sm">{patientData.phone}</span>
              </div>
              <div className="flex items-center">
                {getIcon('email')}
                <span className="ml-3 text-gray-700 text-sm">{patientData.email}</span>
              </div>
              <div className="flex items-center">
                {getIcon('location')}
                <span className="ml-3 text-gray-700 text-sm">{patientData.address}</span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit Patient
            </button>
          </div>
        </div>

        {/* Right Column - Patient Activity and Summaries */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-6 px-6">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'test-history', label: 'Test History' },
                  { id: 'documents', label: 'Documents' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Recent Activity</h3>
                    <p className="text-sm text-gray-600 mb-4">Latest test orders and results</p>

                    <div className="space-y-2">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            {getIcon('chart')}
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{activity.testName}</div>
                              <div className="text-xs text-gray-500">{activity.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(activity.status)}`}>
                              {activity.status}
                            </span>
                            <span className="text-sm text-gray-600">{activity.result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {summaryStats.map((stat, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {getIcon(stat.icon)}
                          </div>
                          <div className="ml-3">
                            <p className="text-xs font-medium text-gray-500">{stat.title}</p>
                            <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-gray-500">{stat.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'test-history' && (
                <div className="text-center py-12">
                  <div className="text-gray-500">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Test History</h3>
                    <p className="mt-1 text-sm text-gray-500">Complete test history will be displayed here.</p>
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="text-center py-12">
                  <div className="text-gray-500">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Documents</h3>
                    <p className="mt-1 text-sm text-gray-500">Patient documents will be displayed here.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
