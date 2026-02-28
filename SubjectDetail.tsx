import React, { useState } from 'react';
import { ViewState, Document } from '../types';

interface SubjectDetailProps {
  onNavigate: (view: ViewState) => void;
}

export const SubjectDetail: React.FC<SubjectDetailProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'docs' | 'reviews'>('docs');

  const documents: Document[] = [
    { id: '1', title: 'Tổng hợp Slide bài giảng Kinh tế Vi mô 1 - Thầy T.', type: 'PDF', views: 1200, downloads: 450, rating: 4.8, author: 'Nguyễn Văn A', date: '2 ngày trước' },
    { id: '2', title: 'Đề thi cuối kỳ Vi mô 1 - HK2 2023 (Có đáp án)', type: 'DOCX', views: 3500, downloads: 890, rating: 4.9, author: 'Trần Thị B', date: '5 ngày trước' },
    { id: '3', title: 'Tiểu luận: Phân tích thị trường trà sữa tại TP.HCM', type: 'XLSX', views: 850, downloads: 120, rating: 4.5, author: 'Lê C', date: '1 tuần trước' },
    { id: '4', title: 'Giáo trình Kinh tế học Vi mô - NXB Kinh Tế', type: 'PDF', views: 5100, downloads: 2100, rating: 4.7, author: 'Admin', date: '1 tháng trước' },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'PDF': return 'picture_as_pdf';
      case 'DOCX': return 'description';
      case 'XLSX': return 'table_chart';
      default: return 'article';
    }
  };

  const getColor = (type: string) => {
     switch(type) {
      case 'PDF': return 'text-red-500 bg-red-50 border-red-100';
      case 'DOCX': return 'text-blue-500 bg-blue-50 border-blue-100';
      case 'XLSX': return 'text-green-500 bg-green-50 border-green-100';
      default: return 'text-slate-500 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Subject Header */}
      <div className="relative w-full h-80 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-end pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">Khoa Kinh Tế</span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">3 Tín chỉ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-md">Kinh tế Vi mô 1</h1>
          <p className="text-white/90 text-lg max-w-2xl font-light">Cung cấp kiến thức nền tảng về hành vi của các chủ thể kinh tế trong nền kinh tế thị trường.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('docs')}
              className={`relative py-5 px-2 text-base font-medium transition-colors ${activeTab === 'docs' ? 'text-primary-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Tài liệu môn học
              {activeTab === 'docs' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 rounded-t-lg"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`relative py-5 px-2 text-base font-medium transition-colors ${activeTab === 'reviews' ? 'text-primary-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Review môn học
              {activeTab === 'reviews' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 rounded-t-lg"></span>}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 w-full">
        {activeTab === 'docs' ? (
          <>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button className="px-5 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold shadow-md shadow-blue-200 transition-transform hover:-translate-y-0.5">Tất cả</button>
              {['Slide bài giảng', 'Đề thi cũ', 'Tiểu luận', 'Sách giáo trình'].map(f => (
                <button key={f} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-sm">
                  {f}
                </button>
              ))}
            </div>

            {/* Docs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc) => (
                <div 
                  key={doc.id}
                  onClick={() => onNavigate('document')}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  <div className="h-40 bg-slate-50 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-4">
                      <button className="bg-white text-primary-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Xem trước</button>
                    </div>
                    <span className="material-symbols-outlined text-6xl text-slate-300 group-hover:scale-110 transition-transform duration-500">{getIcon(doc.type)}</span>
                    <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded border ${getColor(doc.type)}`}>
                      {doc.type}
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                     <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                       {doc.title}
                     </h3>
                     <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                       Đăng bởi {doc.author} • {doc.date}
                     </p>
                     
                     <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> {doc.views}</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> {doc.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 font-semibold">
                           {doc.rating} <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-2">
               <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all">
                 <span className="material-symbols-outlined">chevron_left</span>
               </button>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-600 text-white font-medium shadow-md">1</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all">2</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all">
                 <span className="material-symbols-outlined">chevron_right</span>
               </button>
            </div>
          </>
        ) : (
          <div className="max-w-3xl mx-auto">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold text-slate-800">Review & Thảo luận</h2>
               <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all">
                 <span className="material-symbols-outlined text-xl">rate_review</span>
                 Đăng bài review
               </button>
             </div>
             
             {/* Review Card */}
             <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border border-indigo-200">NV</div>
                     <div>
                       <h4 className="font-bold text-slate-900 text-sm">Nguyễn Văn A</h4>
                       <div className="flex items-center gap-2 text-xs text-slate-500">
                         <span>Sinh viên năm 2</span>
                         <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                         <span>2 giờ trước</span>
                       </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">recommend</span>
                    Đáng học
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Review chi tiết cách qua môn thầy T. với điểm A</h3>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  Học thầy T. thì các bạn nhớ chú ý đi học đầy đủ nhé, thầy điểm danh rất gắt. Về phần thi cử thì đề thi chủ yếu nằm trong slide bài giảng...
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                   <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary-600 transition-colors text-sm">
                     <span className="material-symbols-outlined text-lg">thumb_up</span> 124
                   </button>
                   <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors ml-auto text-sm">
                     <span className="material-symbols-outlined text-lg">chat_bubble</span> 18 Bình luận
                   </button>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};