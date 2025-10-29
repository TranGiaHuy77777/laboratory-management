import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TestOrdersPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('All Orders')
  const [showActionsDropdown, setShowActionsDropdown] = useState<string | null>(null)

  // Mock data exactly as shown in the figma
  const mockTestOrders = [
    {
      orderNumber: 'TO-2025-001',
      patient: 'John Doe',
      doctor: 'Dr. Sarah Johnson',
      testType: 'Complete Blood Count (CBC)',
      priority: 'Routine',
      status: 'Completed',
      ordered: '10/1/2025'
    },
    {
      orderNumber: 'TO-2025-002',
      patient: 'Jane Smith',
      doctor: 'Dr. Michael Brown',
      testType: 'Lipid Panel',
      priority: 'Routine',
      status: 'Completed',
      ordered: '8/1/2025'
    },
    {
      orderNumber: 'TO-2025-003',
      patient: 'Robert Johnson',
      doctor: 'Dr. Emily Davis',
      testType: 'Thyroid Function Test',
      priority: 'Urgent',
      status: 'In Progress',
      ordered: '12/1/2025'
    },
    {
      orderNumber: 'TO-2025-004',
      patient: 'Emily Williams',
      doctor: 'Dr. Robert Wilson',
      testType: 'Liver Function Test',
      priority: 'Routine',
      status: 'Pending',
      ordered: '13/1/2025'
    },
    {
      orderNumber: 'TO-2025-005',
      patient: 'Michael Brown',
      doctor: 'Dr. Sarah Johnson',
      testType: 'Kidney Function Test',
      priority: 'Urgent',
      status: 'In Progress',
      ordered: '13/1/2025'
    },
    {
      orderNumber: 'TO-2025-006',
      patient: 'John Doe',
      doctor: 'Dr. Michael Brown',
      testType: 'Glucose Test',
      priority: 'Stat',
      status: 'Reviewed',
      ordered: '11/1/2025'
    }
  ]

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'In Progress':
        return 'bg-orange-100 text-orange-800'
      case 'Completed':
        return 'bg-blue-100 text-blue-800'
      case 'Reviewed':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'Stat':
        return 'bg-red-100 text-red-800'
      case 'Urgent':
        return 'bg-yellow-100 text-yellow-800'
      case 'Routine':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleViewDetails = (orderNumber: string) => {
    console.log('View Details clicked for:', orderNumber)
    navigate(`/admin/test-orders/${orderNumber}`)
  }

  const handleUpdateOrder = (orderNumber: string) => {
    console.log('Update order:', orderNumber)
    setShowActionsDropdown(null)
    navigate(`/admin/test-orders/${orderNumber}/edit`)
  }

  const handleDeleteOrder = (orderNumber: string) => {
    console.log('Delete order:', orderNumber)
    setShowActionsDropdown(null)
  }

  const handleNewOrder = () => {
    navigate('/admin/test-orders/new')
  }

  const filteredOrders = mockTestOrders.filter(order => {
    if (activeTab === 'All Orders') return true
    return order.status === activeTab
  })

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pending Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500 mt-1">Awaiting processing</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* In Progress Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">In Progress</p>
              <p className="text-3xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-500 mt-1">Being processed</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Completed Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Completed</p>
              <p className="text-3xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-500 mt-1">Ready for review</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Reviewed Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Reviewed</p>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500 mt-1">Finalized</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* All Test Orders Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">All Test Orders</h3>
              <p className="text-sm text-gray-600">View and manage laboratory test orders.</p>
            </div>
            <button
              onClick={handleNewOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Order
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-8 mb-4">
            {['All Orders', 'Pending', 'In Progress', 'Completed', 'Reviewed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex justify-end">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Test Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ordered
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.orderNumber} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{order.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.patient}</div>
                    <div className="text-sm text-gray-500">{order.doctor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.testType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadgeColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.ordered}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() => setShowActionsDropdown(showActionsDropdown === order.orderNumber ? null : order.orderNumber)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      {showActionsDropdown === order.orderNumber && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <div className="py-1">
                            <button
                              onClick={() => handleViewDetails(order.orderNumber)}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              <svg className="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Details
                            </button>
                            <button
                              onClick={() => handleUpdateOrder(order.orderNumber)}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              <svg className="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Update Test Order
                            </button>
                            <button
                              onClick={() => handleDeleteOrder(order.orderNumber)}
                              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                            >
                              <svg className="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete Test Order
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
