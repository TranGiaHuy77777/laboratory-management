import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutRequest } from '../store/slices/authSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="flex justify-between items-center h-16 px-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white placeholder-gray-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}
