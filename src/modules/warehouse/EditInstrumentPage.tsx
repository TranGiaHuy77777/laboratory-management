import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditInstrumentPage: React.FC = () => {
    const { instrumentId } = useParams<{ instrumentId: string }>();
    const navigate = useNavigate();

    // Form state - in real app, this would come from API
    const [formData, setFormData] = useState({
        name: "Hematology Analyzer",
        model: "HA-5000",
        serialNumber: "HA5000-2024-001",
        manufacturer: "MedTech Systems",
        status: "Active",
        location: "Lab Room A",
        nextCalibration: "01/04/2025",
        lastMaintenance: "15/12/2024",
        installationDate: "01/01/2024",
        warrantyExpiry: "01/01/2026"
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving instrument:', formData);
        // Here you would typically make an API call to update the instrument
        navigate('/admin/instruments');
    };

    const handleCancel = () => {
        navigate('/admin/instruments');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-sm border">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900">Edit Instrument</h1>
                        <p className="text-gray-600 mt-1">Update instrument information</p>
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
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
                                    <input
                                        type="text"
                                        value={formData.serialNumber}
                                        onChange={(e) => handleInputChange('serialNumber', e.target.value)}
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
                                    <select
                                        value={formData.status}
                                        onChange={(e) => handleInputChange('status', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Next Calibration</label>
                                    <input
                                        type="date"
                                        value={formData.nextCalibration}
                                        onChange={(e) => handleInputChange('nextCalibration', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Maintenance</label>
                                    <input
                                        type="date"
                                        value={formData.lastMaintenance}
                                        onChange={(e) => handleInputChange('lastMaintenance', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Installation Date</label>
                                    <input
                                        type="date"
                                        value={formData.installationDate}
                                        onChange={(e) => handleInputChange('installationDate', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Warranty Expiry</label>
                                    <input
                                        type="date"
                                        value={formData.warrantyExpiry}
                                        onChange={(e) => handleInputChange('warrantyExpiry', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
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
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditInstrumentPage;
