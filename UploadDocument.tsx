import React, { useState, useEffect, useRef } from 'react';
import { ViewState } from '../types';

interface UploadDocumentProps {
  onNavigate: (view: ViewState) => void;
}

export const UploadDocument: React.FC<UploadDocumentProps> = ({ onNavigate }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // State cho phần chọn môn học (Autocomplete)
  const [subjectInput, setSubjectInput] = useState('');
  const [showSubjectSuggestions, setShowSubjectSuggestions] = useState(false);
  const [filteredSubjects, setFilteredSubjects] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock data danh sách môn học
  const allSubjects = [
    "Kinh tế Vi mô 1", "Kinh tế Vi mô 2", "Kinh tế Vĩ mô 1", "Kinh tế Vĩ mô 2",
    "Pháp luật đại cương", "Luật Kinh tế", "Luật Hiến pháp", "Luật Thương mại",
    "Marketing Căn bản", "Quản trị Marketing", "Digital Marketing",
    "Nguyên lý Kế toán", "Kế toán tài chính", "Kế toán quản trị",
    "Toán cao cấp C1", "Toán cao cấp C2", "Xác suất thống kê",
    "Nhập môn Lập trình", "Cơ sở dữ liệu", "Hệ thống thông tin quản lý",
    "Tiếng Anh thương mại", "Kinh tế đối ngoại", "Tài chính tiền tệ"
  ];

  // Xử lý click outside để đóng dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSubjectSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Xử lý khi người dùng nhập tên môn học
  const handleSubjectInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setSubjectInput(userInput);
    
    // Lọc danh sách môn học
    const filtered = allSubjects.filter(
      (subject) => subject.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setFilteredSubjects(filtered);
    setShowSubjectSuggestions(true);
  };

  // Xử lý khi chọn một môn học từ danh sách gợi ý
  const handleSelectSubject = (subject: string) => {
    setSubjectInput(subject);
    setShowSubjectSuggestions(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full">
        <div className="mb-8">
            <button onClick={() => onNavigate('home')} className="flex items-center text-slate-500 hover:text-primary-600 mb-4 transition-colors">
                <span className="material-symbols-outlined text-xl mr-1">arrow_back</span> Quay lại
            </button>
            <h1 className="text-3xl font-extrabold text-slate-900">Chia sẻ tài liệu</h1>
            <p className="text-slate-500 mt-2">Đóng góp tài liệu học tập để giúp cộng đồng sinh viên UEL cùng phát triển.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-4">1. Tải lên tệp</h2>
                    
                    <div 
                        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-slate-300 hover:border-primary-400 hover:bg-slate-50'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('file-upload')?.click()}
                    >
                        <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                        
                        {selectedFile ? (
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3">
                                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                                </div>
                                <p className="font-bold text-slate-900">{selectedFile.name}</p>
                                <p className="text-sm text-slate-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                <button 
                                    onClick={(e) => {e.stopPropagation(); setSelectedFile(null);}} 
                                    className="mt-4 text-sm text-red-500 hover:text-red-700 font-semibold"
                                >
                                    Xóa và chọn lại
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-3">
                                    <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                                </div>
                                <p className="font-bold text-slate-900">Kéo thả tài liệu vào đây</p>
                                <p className="text-sm text-slate-500 mt-1 mb-4">hoặc nhấn để chọn tệp từ máy tính</p>
                                <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Hỗ trợ: PDF, DOCX, PPTX, XLSX (Max 50MB)</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
                    <h2 className="text-lg font-bold text-slate-900 mb-2">2. Thông tin tài liệu</h2>
                    
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Tên tài liệu <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Ví dụ: Đề thi cuối kỳ Kinh tế Vi mô 1 - 2023" className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    </div>

                    {/* Subject Autocomplete Field */}
                    <div className="relative" ref={dropdownRef}>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Môn học <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Nhập tên môn học (VD: Kinh tế vi mô...)" 
                                className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                value={subjectInput}
                                onChange={handleSubjectInputChange}
                                onFocus={() => {
                                    if (subjectInput) setShowSubjectSuggestions(true);
                                    else {
                                        setFilteredSubjects(allSubjects);
                                        setShowSubjectSuggestions(true);
                                    }
                                }}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-lg">search</span>
                            </div>
                        </div>
                        
                        {/* Dropdown Suggestions */}
                        {showSubjectSuggestions && (
                            <div className="absolute z-20 w-full mt-1 bg-white rounded-xl shadow-xl border border-slate-100 max-h-60 overflow-y-auto">
                                {filteredSubjects.length > 0 ? (
                                    <ul className="py-1 text-sm text-slate-700">
                                        {filteredSubjects.map((subject, index) => (
                                            <li 
                                                key={index} 
                                                onClick={() => handleSelectSubject(subject)}
                                                className="px-4 py-3 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                                            >
                                                {/* Highlight text matching */}
                                                <span dangerouslySetInnerHTML={{
                                                    __html: subject.replace(new RegExp(subjectInput, "gi"), (match) => `<span class="font-bold text-primary-600">${match}</span>`)
                                                }} />
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="px-4 py-3 text-sm text-slate-500">
                                        Không tìm thấy môn học phù hợp. <br/>
                                        <span className="text-xs italic text-slate-400">Hãy thử nhập tên khác hoặc kiểm tra chính tả.</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Khoa / Viện <span className="text-red-500">*</span></label>
                            <select className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white">
                                <option value="">Chọn khoa / viện</option>
                                <option value="ba">Quản trị kinh doanh</option>
                                <option value="fb">Tài chính - Ngân hàng</option>
                                <option value="ac">Kế toán - Kiểm toán</option>
                                <option value="eco">Kinh tế</option>
                                <option value="law">Luật</option>
                                <option value="math">Toán kinh tế</option>
                                <option value="is">Hệ thống thông tin</option>
                                <option value="ib">Kinh tế đối ngoại</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Loại tài liệu <span className="text-red-500">*</span></label>
                            <select className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white">
                                <option value="slide">Slide bài giảng</option>
                                <option value="exam">Đề thi / Kiểm tra</option>
                                <option value="assignment">Tiểu luận / Assignment</option>
                                <option value="book">Sách / Giáo trình</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Mô tả thêm</label>
                        <textarea rows={4} placeholder="Mô tả nội dung tài liệu, năm học, giảng viên..." className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-4">
                        <button onClick={() => onNavigate('home')} className="px-6 py-2.5 rounded-xl text-slate-600 font-bold hover:bg-slate-100 transition-colors">Hủy bỏ</button>
                        <button className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all transform active:scale-95">Đăng tài liệu</button>
                    </div>
                </div>
            </div>

            {/* Sidebar Guidelines */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined">info</span> Quy định đăng tải
                    </h3>
                    <ul className="space-y-3 text-sm text-blue-800">
                        <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-base mt-0.5">check_small</span>
                            Đặt tên tài liệu rõ ràng, có chứa tên môn học.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-base mt-0.5">check_small</span>
                            Không đăng tải tài liệu có nội dung xấu, vi phạm bản quyền nghiêm trọng.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-base mt-0.5">check_small</span>
                            Kiểm tra kỹ file trước khi upload để tránh lỗi font hoặc file bị hỏng.
                        </li>
                    </ul>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 mb-3">Mẹo để nhận nhiều lượt tải</h3>
                    <p className="text-sm text-slate-600 mb-4">
                        Tài liệu có tiêu đề chi tiết và mô tả đầy đủ thường được tìm thấy dễ dàng hơn và có nhiều lượt tải xuống hơn.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 mb-1">Ví dụ tốt:</p>
                        <p className="text-sm font-medium text-green-700">Đề thi cuối kỳ Kinh tế Vĩ mô 2023 - Có đáp án chi tiết</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};