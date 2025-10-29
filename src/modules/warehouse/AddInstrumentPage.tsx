import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddInstrumentPage: React.FC = () => {
    const navigate = useNavigate();

    // Form state - initially empty for new instrument
    const [formData, setFormData] = useState({
        instrumentName: "Hematology Analyzer",
        model: "HA-5000",
        serialNumber: "HA6000-2025-001",
        manufacturer: "MedTech Systems",
        status: "Active",
        location: "Lab Room A"
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        console.log('Creating new instrument:', formData);
        // Here you would typically make an API call to create the instrument
        navigate('/admin/instruments');
    };

    const handleCancel = () => {
        navigate('/admin/instruments');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Add New Instrument</h1>
                        <p className="text-gray-600 mt-1">Add a new laboratory instrument to the system</p>
                    </div>
                    <button
                        onClick={handleCancel}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Instrument Name</label>
                                <input
                                    type="text"
                                    value={formData.instrumentName}
                                    onChange={(e) => handleInputChange('instrumentName', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
                                <input
                                    type="text"
                                    value={formData.serialNumber}
                                    onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                                <input
                                    type="text"
                                    value={formData.model}
                                    onChange={(e) => handleInputChange('model', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
                                <input
                                    type="text"
                                    value={formData.manufacturer}
                                    onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <div className="relative">
                                    <select
                                        value={formData.status}
                                        onChange={(e) => handleInputChange('status', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={handleCancel}
                            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                        >
                            Add Instrument
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInstrumentPage;
