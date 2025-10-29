import React, { useState } from 'react'

interface MetricCardProps {
    title: string
    value: string
    subtitle?: string
    percentage?: number
    icon: string
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, percentage, icon }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">{icon}</span>
                </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-2">{value}</div>
            {percentage !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            )}
            {subtitle && (
                <p className="text-sm text-gray-500">{subtitle}</p>
            )}
        </div>
    )
}

interface EventItemProps {
    type: 'success' | 'warning' | 'error'
    title: string
    tag: string
    details: string
    timestamp: string
    user: string
}

const EventItem: React.FC<EventItemProps> = ({ type, title, tag, details, timestamp, user }) => {
    const getIconAndColor = () => {
        switch (type) {
            case 'success':
                return { icon: '✓', bgColor: 'bg-blue-500', textColor: 'text-gray-600' }
            case 'warning':
                return { icon: '!', bgColor: 'bg-orange-500', textColor: 'text-gray-600' }
            case 'error':
                return { icon: '✕', bgColor: 'bg-red-500', textColor: 'text-gray-600' }
            default:
                return { icon: 'i', bgColor: 'bg-gray-500', textColor: 'text-gray-600' }
        }
    }

    const { icon, bgColor, textColor } = getIconAndColor()

    return (
        <div className="flex items-start space-x-4 p-4 border-b border-gray-100 last:border-b-0">
            <div className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-sm font-bold">{icon}</span>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${textColor} bg-gray-100`}>
                        {tag}
                    </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{details}</p>
                <p className="text-xs text-gray-400">{timestamp} by {user}</p>
            </div>
        </div>
    )
}

export const MonitoringPage = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'logs'>('overview')

    const metrics = [
        {
            title: 'CPU Usage',
            value: '45%',
            percentage: 45,
            icon: '⊞'
        },
        {
            title: 'Memory Usage',
            value: '62%',
            percentage: 62,
            icon: '⊞'
        },
        {
            title: 'Disk Usage',
            value: '38%',
            percentage: 38,
            icon: '⊡'
        },
        {
            title: 'Active Users',
            value: '12',
            subtitle: 'Currently online',
            icon: '👥'
        },
        {
            title: 'Tests Today',
            value: '47',
            subtitle: 'Completed tasks',
            icon: '📈'
        },
        {
            title: 'Active Instruments',
            value: '4',
            subtitle: 'Currently operational',
            icon: '⚙️'
        }
    ]

    const events = [
        {
            type: 'success' as const,
            title: 'User logged in successfully',
            tag: 'user',
            details: '14:30:00 13/10/2025 by Admin User',
            timestamp: '14:30:00 13/10/2025',
            user: 'Admin User'
        },
        {
            type: 'warning' as const,
            title: 'Instrument calibration due soon',
            tag: 'instrument',
            details: 'Immunoassay Analyzer IA-2500 requires calibration within 7 days',
            timestamp: '14:25:00 13/10/2025',
            user: 'Service User'
        },
        {
            type: 'error' as const,
            title: 'Test result validation failed',
            tag: 'test',
            details: 'Test order TO-2025-007 has invalid reference range',
            timestamp: '14:20:00 13/10/2025',
            user: 'Lab User'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">System Monitoring</h1>
                    <p className="text-gray-500 mt-1">Monitor system health, event logs, and performance metrics</p>
                </div>

                {/* Tabs */}
                <div className="flex space-x-8">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`pb-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'overview'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('logs')}
                        className={`pb-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'logs'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Event Logs
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
                {activeTab === 'overview' ? (
                    <div className="space-y-8">
                        {/* Metrics Section */}
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {metrics.map((metric, index) => (
                                    <MetricCard
                                        key={index}
                                        title={metric.title}
                                        value={metric.value}
                                        subtitle={metric.subtitle}
                                        percentage={metric.percentage}
                                        icon={metric.icon}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Recent Events Section */}
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
                                <p className="text-sm text-gray-500 mt-1">Latest system events and activities</p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {events.map((event, index) => (
                                    <EventItem
                                        key={index}
                                        type={event.type}
                                        title={event.title}
                                        tag={event.tag}
                                        details={event.details}
                                        timestamp={event.timestamp}
                                        user={event.user}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Event Logs</h2>
                            <p className="text-sm text-gray-500 mt-1">Detailed system logs and audit trail</p>
                        </div>
                        <div className="p-6">
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Event Logs</h3>
                                <p className="text-gray-500">Detailed event logs will be displayed here</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
