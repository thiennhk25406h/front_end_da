import React, { useState, useEffect, useRef } from 'react';
import { ViewState, Subject, Document } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const subjects: Subject[] = [
    { id: '1', code: 'ECO001', name: 'Kinh tế Vi mô 1', faculty: 'Kinh tế', credits: 3, docCount: 120, rating: 4.8 },
    { id: '2', code: 'LAW002', name: 'Pháp luật đại cương', faculty: 'Luật', credits: 2, docCount: 85, rating: 4.5 },
    { id: '3', code: 'MKT003', name: 'Marketing Căn bản', faculty: 'Quản trị', credits: 3, docCount: 200, rating: 4.9 },
    { id: '4', code: 'ACC004', name: 'Nguyên lý Kế toán', faculty: 'Kế toán', credits: 3, docCount: 150, rating: 4.6 },
    { id: '5', code: 'IT005', name: 'Nhập môn Lập trình', faculty: 'BIT', credits: 3, docCount: 90, rating: 4.7 },
    { id: '6', code: 'ENG006', name: 'Tiếng Anh Kinh doanh 1', faculty: 'Ngoại ngữ', credits: 3, docCount: 60, rating: 4.4 },
  ];

  // Search Autocomplete State
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const allSearchTerms = [
    "Kinh tế Vi mô 1", "Kinh tế Vi mô 2", "Kinh tế Vĩ mô", 
    "Pháp luật đại cương", "Luật Kinh tế", "Luật Hiến pháp",
    "Marketing Căn bản", "Quản trị Marketing", "Digital Marketing",
    "Nguyên lý Kế toán", "Kế toán quản trị", "Kế toán tài chính",
    "Toán cao cấp C1", "Toán cao cấp C2", "Xác suất thống kê",
    "Nhập môn Lập trình", "Cơ sở dữ liệu", "Mạng máy tính",
    "ECO001", "LAW002", "MKT003", "ACC004", "IT005"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length > 0) {
      const filtered = allSearchTerms.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (value: string) => {
    setSearchTerm(value);
    setShowSuggestions(false);
    onNavigate('subject'); // Navigate to subject detail for demo
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-center px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-slate-900 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Library" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
            Học tập thông minh hơn tại UEL
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 font-medium max-w-2xl mx-auto drop-shadow-md">
            Khám phá kho tàng tri thức với hàng ngàn tài liệu và đánh giá môn học chất lượng từ cộng đồng sinh viên.
          </p>
          
          <div className="w-full max-w-2xl relative group text-left" ref={searchContainerRef}>
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 z-10">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input 
              className="block w-full pl-12 pr-32 py-4 border-none bg-white rounded-2xl focus:ring-4 focus:ring-primary-500/30 text-lg shadow-xl placeholder-slate-400 text-slate-800 relative z-0" 
              placeholder="Tìm kiếm môn học, mã học phần, giảng viên..." 
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => {
                  if (searchTerm) setShowSuggestions(true);
              }}
            />
            <button 
                onClick={() => onNavigate('documents_list')}
                className="absolute inset-y-2 right-2 bg-primary-600 hover:bg-primary-700 text-white px-6 rounded-xl font-bold transition-all z-10"
            >
              Tìm kiếm
            </button>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-[fadeIn_0.2s_ease-out]">
                    <ul className="max-h-[240px] overflow-y-auto">
                        {filteredSuggestions.map((item, index) => (
                            <li 
                                key={index}
                                onClick={() => handleSelectSuggestion(item)}
                                className="px-5 py-3 hover:bg-slate-50 cursor-pointer flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors border-b border-slate-50 last:border-0"
                            >
                                <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
                                <span dangerouslySetInnerHTML={{
                                    __html: item.replace(new RegExp(searchTerm, "gi"), (match) => `<span class="font-bold text-slate-900">${match}</span>`)
                                }} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="text-white/80 text-sm font-semibold py-1">Xu hướng:</span>
            {['#KinhTeViMo', '#LuatHienPhap', '#ToanCaoCap'].map(tag => (
              <span key={tag} onClick={() => {setSearchTerm(tag.replace('#', '')); onNavigate('documents_list');}} className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20 transition-all cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
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
                      'Kế toán - Kiểm toán', 
                      'Kinh tế', 
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
                     {['Tất cả', 'Hệ tiếng Việt', 'Hệ tiếng Anh'].map((prog, idx) => (
                       <label key={prog} className="flex items-center gap-3 cursor-pointer group">
                         <input type="checkbox" defaultChecked={idx === 0} className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 transition-all" />
                         <span className={`text-sm group-hover:text-primary-600 transition-colors ${idx === 0 ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{prog}</span>
                       </label>
                     ))}
                   </div>
                </div>

                <div>
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Loại tài liệu</h4>
                   <div className="flex flex-wrap gap-2">
                     {['Slide', 'Đề thi', 'Tiểu luận', 'Sách'].map(type => (
                       <span key={type} className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600 cursor-pointer hover:border-primary-500 hover:text-primary-600 transition-all">
                         {type}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Subjects Grid */}
          <section className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Môn học nổi bật</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sắp xếp theo:</span>
                <select className="text-sm font-semibold border-none bg-transparent text-primary-600 focus:ring-0 cursor-pointer pr-8">
                  <option>Phổ biến nhất</option>
                  <option>Mới nhất</option>
                  <option>Đánh giá cao</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((sub) => (
                <div 
                  key={sub.id} 
                  onClick={() => onNavigate('subject')}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary-600 flex items-center justify-center border border-blue-100 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                       {/* Icon based on faculty roughly */}
                       <span className="material-symbols-outlined text-3xl">
                         {sub.faculty === 'Luật' ? 'gavel' : sub.faculty === 'Kế toán' ? 'analytics' : 'auto_stories'}
                       </span>
                    </div>
                    <div className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-md tracking-wide">
                      {sub.faculty}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                    Mã môn: {sub.code} • {sub.credits} Tín chỉ
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="text-slate-700 font-bold">{sub.rating}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                        <span className="material-symbols-outlined text-sm">visibility</span> {sub.docCount * 12}
                      </span>
                      <span className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                         <span className="material-symbols-outlined text-sm">download</span> {sub.docCount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-sm">
                Xem thêm môn học
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};