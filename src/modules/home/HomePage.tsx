import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">L</span>
                            </div>
                            <h1 className="text-xl font-bold text-blue-600">Lab Management System</h1>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Trang chủ</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tính năng</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tài nguyên</a>
                        </nav>

                        {/* Right side icons and login */}
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 text-sm">🔍</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 text-sm">📊</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 text-sm">👥</span>
                            </div>
                            <button
                                onClick={handleLogin}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Green tag */}
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Hệ thống quản lý phòng thí nghiệm hàng đầu Việt Nam
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Quản lý phân tích <span className="text-blue-600">huyết học</span> thông minh và hiệu quả
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                        Nền tảng toàn diện giúp các phòng thí nghiệm y tế quản lý quy trình xét nghiệm,
                        theo dõi thiết bị, kiểm soát chất lượng và kết nối với cộng đồng chuyên gia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                        >
                            Vào Dashboard
                        </button>
                        <button
                            onClick={() => navigate('/community')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                        >
                            Cộng đồng
                        </button>
                    </div>

                    {/* User count and rating */}
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="w-8 h-8 bg-blue-600 rounded-full"></div>
                            ))}
                        </div>
                        <span className="text-gray-600">500+ người dùng</span>
                        <div className="flex items-center">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <span className="ml-2 text-gray-600">4.9/5</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Hematology Management Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Quản lý phân tích huyết học là gì?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Quản lý phân tích huyết học là quy trình toàn diện từ tiếp nhận mẫu đến trả kết quả,
                            đảm bảo chất lượng và độ chính xác cao nhất.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Giải pháp toàn diện cho phòng lab hiện đại
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Hệ thống tích hợp đầy đủ các chức năng cần thiết cho việc quản lý phòng thí nghiệm huyết học,
                                từ quản lý bệnh nhân, mẫu bệnh phẩm đến tự động hóa quy trình xét nghiệm.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Với công nghệ tiên tiến và giao diện thân thiện, hệ thống giúp tăng hiệu quả làm việc
                                và giảm thiểu sai sót trong quá trình xét nghiệm.
                            </p>

                            {/* Certification badges */}
                            <div className="flex flex-wrap gap-3">
                                {['ISO 9001', 'CAP Certified', 'CLIA Compliant'].map((cert) => (
                                    <span key={cert} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="bg-white rounded-lg border border-blue-200 p-8">
                            <ul className="space-y-6">
                                {[
                                    { icon: '🧪', title: 'Quản lý xét nghiệm', desc: 'Theo dõi và quản lý toàn bộ vòng đời mẫu' },
                                    { icon: '📊', title: 'Phân tích dữ liệu', desc: 'Tối ưu hóa và chuẩn hóa các bước xét nghiệm' },
                                    { icon: '🔍', title: 'Kiểm soát chất lượng', desc: 'Kết nối với các thiết bị phân tích hiện đại' },
                                    { icon: '👥', title: 'Cộng đồng chuyên gia', desc: 'Tạo báo cáo chi tiết và phân tích xu hướng' }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-4">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Mọi thứ bạn cần cho quản lý lab
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: '🧪', title: 'Quản lý xét nghiệm', desc: 'Theo dõi và quản lý toàn bộ vòng đời mẫu bệnh phẩm' },
                            { icon: '📊', title: 'Phân tích thông minh', desc: 'Sử dụng AI để phân tích và đưa ra kết quả chính xác' },
                            { icon: '👥', title: 'Cộng đồng chuyên gia', desc: 'Kết nối với các chuyên gia trong lĩnh vực y tế' },
                            { icon: '🛡️', title: 'Bảo mật tối đa', desc: 'Đảm bảo an toàn thông tin bệnh nhân và kết quả xét nghiệm' },
                            { icon: '⚡', title: 'Giám sát real-time', desc: 'Theo dõi trạng thái thiết bị và quy trình xét nghiệm' },
                            { icon: '🏆', title: 'Chứng nhận chất lượng', desc: 'Tuân thủ các tiêu chuẩn quốc tế về chất lượng' }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Cách thức hoạt động
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {[
                            { step: '01', icon: '👥', title: 'Đăng ký tài khoản', desc: 'Tạo tài khoản và xác thực thông tin' },
                            { step: '02', icon: '⚙️', title: 'Cấu hình hệ thống', desc: 'Thiết lập các thông số và quy trình' },
                            { step: '03', icon: '🚀', title: 'Bắt đầu sử dụng', desc: 'Khởi động và làm quen với hệ thống' },
                            { step: '04', icon: '📊', title: 'Phân tích & Báo cáo', desc: 'Theo dõi và tạo báo cáo chi tiết' }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0 relative">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    {item.step}
                                </div>
                                <div className="text-2xl mb-3">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm max-w-xs">{item.desc}</p>

                                {/* Arrow */}
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-full w-16 h-0.5 bg-blue-600 transform translate-x-8">
                                        <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-b-2 border-t-transparent border-b-transparent transform translate-x-1"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Được tin dùng bởi hàng trăm chuyên gia
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: 'Nguyễn Văn A', role: 'Trưởng phòng xét nghiệm', quote: 'Hệ thống giúp chúng tôi tăng hiệu quả làm việc lên 40%' },
                            { name: 'Trần Thị B', role: 'Kỹ thuật viên', quote: 'Giao diện thân thiện, dễ sử dụng và rất tiện lợi' },
                            { name: 'Lê Văn C', role: 'Bác sĩ chuyên khoa', quote: 'Kết quả chính xác và báo cáo chi tiết, rất hài lòng' },
                            { name: 'Phạm Thị D', role: 'Quản lý phòng lab', quote: 'Tích hợp tốt với các thiết bị hiện có của chúng tôi' }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-blue-600 font-semibold">{testimonial.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Gửi phản hồi hoặc câu hỏi của bạn
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Chúng tôi luôn lắng nghe ý kiến đóng góp từ khách hàng để cải thiện sản phẩm.
                                Hãy chia sẻ với chúng tôi những gì bạn nghĩ về hệ thống.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-white text-sm">✉️</span>
                                    </div>
                                    <span className="text-gray-600">contact@labmanagement.com</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-white text-sm">📞</span>
                                    </div>
                                    <span className="text-gray-600">+84 123 456 789</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-white text-sm">📍</span>
                                    </div>
                                    <span className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-white text-sm">🕒</span>
                                    </div>
                                    <div className="text-gray-600">
                                        <div>Thứ 2 - Thứ 6: 8:00 - 18:00</div>
                                        <div>Thứ 7: 8:00 - 12:00</div>
                                        <div>Chủ nhật: Nghỉ</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Nhập họ và tên"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Nhập email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Nhập chủ đề"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Nhập nội dung phản hồi"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                                >
                                    Gửi phản hồi
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-sm font-bold">L</span>
                                </div>
                                <h3 className="text-xl font-bold">Lab Management System</h3>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Hệ thống quản lý phòng thí nghiệm toàn diện, giúp tối ưu hóa quy trình xét nghiệm
                                và nâng cao chất lượng dịch vụ y tế.
                            </p>
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <span className="text-gray-300">4.9/5</span>
                            </div>
                            <div className="text-gray-300">500+ người dùng</div>
                        </div>

                        {/* Middle Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
                            <ul className="space-y-2">
                                {['Trang chủ', 'Tính năng', 'Tài nguyên', 'Liên hệ'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
                            <ul className="space-y-2">
                                {['Trung tâm trợ giúp', 'Tài liệu hướng dẫn', 'Liên hệ hỗ trợ', 'Báo lỗi'].map((support) => (
                                    <li key={support}>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors">{support}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
                        <p>&copy; 2024 Lab Management System. All rights reserved.</p>
                        <p className="mt-2">Made with ❤️ in Vietnam</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
