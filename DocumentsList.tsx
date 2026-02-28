import React from 'react';
import { ViewState, Document } from '../types';

interface DocumentsListProps {
  onNavigate: (view: ViewState) => void;
}

export const DocumentsList: React.FC<DocumentsListProps> = ({ onNavigate }) => {
  const documents: Document[] = [
    { 
      id: '1', 
      title: 'Tổng hợp đề thi Kinh tế vi mô 1 (2020-2023)', 
      type: 'PDF', 
      views: 1200, 
      downloads: 350, 
      rating: 4.8, 
      ratingCount: 12,
      author: 'Nguyễn Văn A', 
      date: '2 ngày trước' 
    },
    { 
      id: '2', 
      title: 'Slide bài giảng Pháp luật đại cương - Chương 1-5', 
      type: 'Slide', 
      views: 890, 
      downloads: 210, 
      rating: 4.5, 
      ratingCount: 8,
      author: 'Trần Thị B', 
      date: '5 ngày trước' 
    },
    { 
      id: '3', 
      title: 'Tiểu luận Marketing Căn bản - Phân tích chiến lược 4P Vinamilk', 
      type: 'DOCX', 
      views: 2500, 
      downloads: 800, 
      rating: 4.9, 
      ratingCount: 24,
      author: 'Lê Hoàng C', 
      date: '1 tuần trước' 
    },
    { 
      id: '4', 
      title: 'Giáo trình Toán cao cấp C1 - Đại học Kinh tế Luật', 
      type: 'PDF', 
      views: 1800, 
      downloads: 650, 
      rating: 4.7, 
      ratingCount: 15,
      author: 'Phạm Minh D', 
      date: '2 tuần trước' 
    },
     { 
      id: '5', 
      title: 'Slide Nguyên lý Kế toán - Full Chapter 1-10', 
      type: 'Slide', 
      views: 2100, 
      downloads: 540, 
      rating: 4.6, 
      ratingCount: 18,
      author: 'Hoàng Thị E', 
      date: '3 tuần trước' 
    },
    { 
      id: '6', 
      title: 'Tóm tắt công thức Xác suất thống kê - Ngắn gọn dễ hiểu', 
      type: 'PDF', 
      views: 5400, 
      downloads: 2100, 
      rating: 5.0, 
      ratingCount: 42,
      author: 'Vũ Văn F', 
      date: '1 tháng trước' 
    },
  ];

  const getThumbnailStyle = (index: number) => {
    const styles = [
      { bg: 'bg-indigo-50', iconColor: 'text-indigo-400', icon: 'picture_as_pdf' },
      { bg: 'bg-orange-50', iconColor: 'text-orange-400', icon: 'play_circle' },
      { bg: 'bg-sky-50', iconColor: 'text-sky-400', icon: 'description' },
      { bg: 'bg-emerald-50', iconColor: 'text-emerald-400', icon: 'picture_as_pdf' },
      { bg: 'bg-yellow-50', iconColor: 'text-yellow-400', icon: 'play_circle' },
      { bg: 'bg-purple-50', iconColor: 'text-purple-400', icon: 'picture_as_pdf' },
    ];
    return styles[index % styles.length];
  };

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-600';
      case 'DOCX': return 'bg-blue-100 text-blue-600';
      case 'Slide': return 'bg-orange-100 text-orange-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] flex items-center justify-center text-center px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Library" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Kho Tài Liệu Học Tập
          </h1>
          <p className="text-base md:text-lg text-slate-200 mb-8 font-medium max-w-2xl mx-auto">
            Tìm kiếm slide bài giảng, đề thi cũ và tài liệu tham khảo chất lượng từ sinh viên UEL.
          </p>
          
          <div className="w-full max-w-xl relative">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input 
              className="block w-full pl-11 pr-4 py-3 border-none bg-white rounded-xl focus:ring-4 focus:ring-white/20 text-base shadow-lg placeholder-slate-400 text-slate-800" 
              placeholder="Tìm kiếm tài liệu, tên môn học..." 
              type="text"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-600">filter_list</span> Bộ lọc
                </h3>
                <button className="text-xs font-bold text-slate-400 hover:text-primary-600 transition-colors">Reset</button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Khoa / Viện</h4>
                  <div className="space-y-2">
                    {[
                      'Tất cả', 
                      'Quản trị kinh doanh', 
                      'Tài chính - Ngân hàng', 
                      'Kinh tế', 
                      'Kế toán - Kiểm toán', 
                      'Luật',
                      'Toán kinh tế',
                      'Hệ thống thông tin',
                      'Kinh tế đối ngoại'
                    ].map((dept, idx) => (
                      <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked={idx === 0} className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 transition-all" />
                        <span className={`text-sm group-hover:text-primary-600 transition-colors ${idx === 0 ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Hệ đào tạo</h4>
                   <div className="space-y-2">
                     {['Hệ tiếng Việt', 'Hệ tiếng Anh'].map((prog) => (
                       <label key={prog} className="flex items-center gap-3 cursor-pointer group">
                         <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 transition-all" />
                         <span className="text-sm text-slate-600 group-hover:text-primary-600 transition-colors">{prog}</span>
                       </label>
                     ))}
                   </div>
                </div>

                <div>
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Loại tài liệu</h4>
                   <div className="space-y-2">
                     {['Slide bài giảng', 'Đề thi cũ', 'Tiểu luận / Assignment', 'Sách giáo trình'].map(type => (
                       <label key={type} className="flex items-center gap-3 cursor-pointer group">
                         <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 transition-all" />
                         <span className="text-sm text-slate-600 group-hover:text-primary-600 transition-colors">{type}</span>
                       </label>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Documents Grid */}
          <section className="lg:w-3/4">
            <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-2">
                 <h2 className="text-lg font-bold text-slate-900">Tài liệu mới cập nhật</h2>
                 <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">248</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-500">Sắp xếp theo:</span>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                   <button className="px-3 py-1 bg-white rounded-md shadow-sm text-slate-900 font-medium text-xs">Mới nhất</button>
                   <button className="px-3 py-1 text-slate-500 hover:text-slate-900 font-medium text-xs transition-colors">Tài liệu nhất</button>
                   <button className="px-3 py-1 text-slate-500 hover:text-slate-900 font-medium text-xs transition-colors">Đánh giá cao</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, idx) => {
                const style = getThumbnailStyle(idx);
                return (
                  <div 
                    key={doc.id} 
                    onClick={() => onNavigate('document')}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                  >
                    {/* Thumbnail */}
                    <div className={`h-[160px] ${style.bg} relative flex items-center justify-center`}>
                      <span className={`material-symbols-outlined text-6xl ${style.iconColor} group-hover:scale-110 transition-transform duration-300`}>{style.icon}</span>
                      <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide ${getTypeBadgeStyle(doc.type)}`}>
                        {doc.type}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                       <h3 className="font-bold text-slate-900 text-sm leading-6 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[48px]">
                         {doc.title}
                       </h3>
                       
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 border border-white shadow-sm overflow-hidden">
                             <img src={`https://ui-avatars.com/api/?name=${doc.author}&background=random`} alt={doc.author} className="w-full h-full object-cover"/>
                          </div>
                          <p className="text-xs text-slate-500 truncate max-w-[120px]">{doc.author}</p>
                          <span className="text-[10px] text-slate-400">•</span>
                          <p className="text-xs text-slate-400">{doc.date}</p>
                       </div>

                       <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-500">
                          <div className="flex items-center gap-1 text-amber-500">
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            <span className="text-slate-700 font-bold">{doc.rating}</span>
                            <span className="text-slate-400 font-normal">({doc.ratingCount})</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">visibility</span> 
                              {doc.views > 1000 ? (doc.views/1000).toFixed(1) + 'k' : doc.views}
                            </span>
                            <span className="flex items-center gap-1 text-blue-600">
                               <span className="material-symbols-outlined text-sm">download</span> 
                               {doc.downloads > 1000 ? (doc.downloads/1000).toFixed(1) + 'k' : doc.downloads}
                            </span>
                          </div>
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-2">
               <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all">
                 <span className="material-symbols-outlined text-sm">chevron_left</span>
               </button>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-sm shadow-md shadow-primary-200">1</button>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all text-sm font-medium">2</button>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all text-sm font-medium">3</button>
               <span className="w-9 h-9 flex items-center justify-center text-slate-400">...</span>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all text-sm font-medium">12</button>
               <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-white hover:text-primary-600 hover:border-primary-600 transition-all">
                 <span className="material-symbols-outlined text-sm">chevron_right</span>
               </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};