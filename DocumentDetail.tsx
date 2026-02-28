import React, { useState } from 'react';
import { ViewState } from '../types';

interface DocumentDetailProps {
  onNavigate: (view: ViewState) => void;
  isLoggedIn: boolean;
}

export const DocumentDetail: React.FC<DocumentDetailProps> = ({ onNavigate, isLoggedIn }) => {
  // Quản lý trạng thái hiển thị của các modal: 'none', 'rating', 'share', 'report'
  const [activeModal, setActiveModal] = useState<'none' | 'rating' | 'share' | 'report'>('none');

  const closeModal = () => setActiveModal('none');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-slate-500">
          <span className="cursor-pointer hover:text-primary-600" onClick={() => onNavigate('home')}>Trang chủ</span>
          <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
          <span className="cursor-pointer hover:text-primary-600" onClick={() => onNavigate('subject')}>Kinh tế Vi mô 1</span>
          <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
          <span className="font-semibold text-slate-900 truncate">Kinh tế vĩ mô - Đề thi 2023</span>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content (Preview) */}
          <div className="lg:w-[70%] flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
               <h1 className="text-2xl font-bold text-slate-900 mb-4">Kinh tế vĩ mô - Đề thi 2023</h1>
               <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-500 text-sm font-medium mb-6">
                 <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600 font-bold text-xs">#Kinhtevimo</span>
                 <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600 font-bold text-xs">#Vmo1</span>
                 <span className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md text-slate-600 font-bold text-xs">#dethi2023</span>
                 
                 <div className="flex-grow"></div>

                 <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">calendar_today</span> 12/10/2023</span>
                 <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">visibility</span> 1.2k lượt xem</span>
                 <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">download</span> 256 lượt tải</span>
                 <div className="flex items-center gap-1 text-amber-500">
                   <div className="flex">
                     {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                     <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
                   </div>
                   <span className="text-slate-700 ml-1 font-bold">4.8</span>
                   <span className="text-slate-400 font-normal ml-1">(62 đánh giá)</span>
                 </div>
               </div>
               
               <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                 <button 
                    onClick={() => setActiveModal('rating')}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-200"
                 >
                   <span className="material-symbols-outlined text-lg">star_rate</span> Đánh giá tài liệu
                 </button>
                 <button 
                    onClick={() => setActiveModal('share')}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg text-sm font-bold transition-all border border-slate-200"
                 >
                   <span className="material-symbols-outlined text-lg">share</span> Chia sẻ
                 </button>
                 <button 
                    onClick={() => setActiveModal('report')}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-red-600 rounded-lg text-sm font-bold transition-all border border-slate-200"
                 >
                   <span className="material-symbols-outlined text-lg">flag</span> Báo cáo
                 </button>
               </div>
            </div>

            {/* Document Preview Area */}
            <div className="bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300 min-h-[800px] flex flex-col items-center">
              {/* Fake Toolbar */}
              <div className="w-full bg-white border-b border-slate-300 p-2 flex justify-between items-center shadow-sm z-10 sticky top-0">
                <div className="flex gap-2">
                   <button className="p-1 hover:bg-slate-100 rounded"><span className="material-symbols-outlined text-slate-600">search</span></button>
                   <button className="p-1 hover:bg-slate-100 rounded"><span className="material-symbols-outlined text-slate-600">zoom_in</span></button>
                   <button className="p-1 hover:bg-slate-100 rounded"><span className="material-symbols-outlined text-slate-600">zoom_out</span></button>
                </div>
                <div className="flex items-center bg-slate-100 rounded-md px-2 py-0.5 gap-2">
                   <button className="p-0.5 hover:bg-slate-200 rounded"><span className="material-symbols-outlined text-sm text-slate-600">chevron_left</span></button>
                   <div className="text-xs font-bold text-slate-600">1 / 15</div>
                   <button className="p-0.5 hover:bg-slate-200 rounded"><span className="material-symbols-outlined text-sm text-slate-600">chevron_right</span></button>
                </div>
                <button className="p-1 hover:bg-slate-100 rounded"><span className="material-symbols-outlined text-slate-600">fullscreen</span></button>
              </div>
              
              {/* Fake Page Content */}
              <div className="w-[90%] bg-white shadow-xl h-[1000px] mt-6 mb-20 p-12 space-y-6">
                <div className="w-2/3 h-8 bg-slate-200 mx-auto rounded"></div>
                <div className="w-full h-4 bg-slate-100 rounded mt-12"></div>
                <div className="w-full h-4 bg-slate-100 rounded"></div>
                <div className="w-full h-4 bg-slate-100 rounded"></div>
                <div className="w-full h-4 bg-slate-100 rounded"></div>
                <div className="w-3/4 h-4 bg-slate-100 rounded"></div>
                
                <div className="w-full h-48 bg-slate-50 border border-slate-100 rounded mt-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-slate-200">image</span>
                </div>
                
                <div className="space-y-3 mt-8">
                    <div className="w-full h-4 bg-slate-100 rounded"></div>
                    <div className="w-full h-4 bg-slate-100 rounded"></div>
                    <div className="w-full h-4 bg-slate-100 rounded"></div>
                    <div className="w-full h-4 bg-slate-100 rounded"></div>
                    <div className="w-1/2 h-4 bg-slate-100 rounded"></div>
                </div>
              </div>

              {/* Login Gate Overlay */}
              {!isLoggedIn && (
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-200 via-slate-100/95 to-transparent flex flex-col items-center justify-end pb-20 z-20 backdrop-blur-[1px]">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 max-w-sm w-full text-center transform translate-y-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 shadow-inner">
                             <span className="material-symbols-outlined">lock</span>
                        </div>
                        <h3 className="text-slate-900 font-bold text-lg mb-2">Đăng nhập để xem tiếp</h3>
                        <p className="text-slate-500 text-sm mb-6">Bạn đang xem trang preview. Để xem trọn bộ 15 trang tài liệu này, vui lòng đăng nhập.</p>
                        <button 
                            onClick={() => onNavigate('login')}
                            className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2"
                        >
                            Đăng nhập ngay <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <p className="mt-4 text-xs text-slate-400">Chưa có tài khoản? <button onClick={() => onNavigate('register')} className="text-primary-600 font-bold hover:underline">Đăng ký</button></p>
                    </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Actions */}
          <aside className="lg:w-[30%] flex flex-col gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
                <button className="flex items-center justify-center gap-2 w-full py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-blue-200 mb-3">
                    <span className="material-symbols-outlined">download</span> Tải xuống ngay
                </button>
                <button className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all mb-6">
                    <span className="material-symbols-outlined">bookmark_border</span> Lưu vào thư viện
                </button>
                
                <div className="grid grid-cols-2 gap-4 text-center border-t border-b border-slate-100 py-4 mb-6">
                    <div>
                        <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                            <span className="material-symbols-outlined text-sm">visibility</span> Lượt xem
                        </div>
                        <span className="text-lg font-bold text-slate-900">1,245</span>
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                            <span className="material-symbols-outlined text-sm">download</span> Lượt tải
                        </div>
                        <span className="text-lg font-bold text-slate-900">256</span>
                    </div>
                </div>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-slate-200 relative border-2 border-white shadow-sm">
                             <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A" className="rounded-full" alt="Author"/>
                             <div className="absolute -bottom-0 -right-0 bg-green-500 rounded-full p-0.5 border-2 border-white">
                                <span className="material-symbols-outlined text-[10px] text-white block">check</span>
                             </div>
                        </div>
                        <div>
                            <p className="text-slate-900 font-bold text-sm">Nguyễn Văn A</p>
                            <p className="text-slate-500 text-xs">Sinh viên - ĐH Kinh tế</p>
                        </div>
                    </div>
                    <button className="text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full text-xs font-bold transition-colors">Theo dõi</button>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100 text-xs">
                     <div className="text-center">
                         <span className="block font-bold text-slate-800 text-sm">4.8</span>
                         <span className="text-slate-400">Uy tín</span>
                     </div>
                     <div className="w-px h-8 bg-slate-200"></div>
                     <div className="text-center">
                         <span className="block font-bold text-slate-800 text-sm">124</span>
                         <span className="text-slate-400">Tài liệu</span>
                     </div>
                     <div className="w-px h-8 bg-slate-200"></div>
                     <div className="text-center">
                         <span className="block font-bold text-slate-800 text-sm">890</span>
                         <span className="text-slate-400">Followers</span>
                     </div>
                </div>
             </div>

             {/* Related Docs */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-600 text-base">layers</span> Tài liệu liên quan
                 </h3>
                 <div className="space-y-4">
                     {[1,2,3].map(i => (
                         <div key={i} className="flex gap-3 group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors">
                             <div className="w-10 h-12 bg-blue-50 border border-blue-100 text-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                                 <span className="material-symbols-outlined text-xl">description</span>
                             </div>
                             <div>
                                 <h4 className="text-sm font-bold text-slate-700 line-clamp-2 group-hover:text-primary-600 transition-colors">Giải bài tập Kinh tế vĩ mô kỳ 1 - Chi tiết</h4>
                                 <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-slate-400">10 trang</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span className="text-xs text-slate-400">1.1k lượt xem</span>
                                 </div>
                             </div>
                         </div>
                     ))}
                     {[4,5].map(i => (
                         <div key={i} className="flex gap-3 group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors">
                             <div className="w-10 h-12 bg-orange-50 border border-orange-100 text-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                                 <span className="material-symbols-outlined text-xl">article</span>
                             </div>
                             <div>
                                 <h4 className="text-sm font-bold text-slate-700 line-clamp-2 group-hover:text-primary-600 transition-colors">Đề cương ôn tập trắc nghiệm vi mô</h4>
                                 <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-slate-400">42 trang</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span className="text-xs text-slate-400">845 lượt xem</span>
                                 </div>
                             </div>
                         </div>
                     ))}
                     <div key="last" className="flex gap-3 group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors">
                             <div className="w-10 h-12 bg-green-50 border border-green-100 text-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                                 <span className="material-symbols-outlined text-xl">book</span>
                             </div>
                             <div>
                                 <h4 className="text-sm font-bold text-slate-700 line-clamp-2 group-hover:text-primary-600 transition-colors">Tóm tắt kiến thức vi mô từ A-Z</h4>
                                 <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-slate-400">8 trang</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span className="text-xs text-slate-400">2.5k lượt xem</span>
                                 </div>
                             </div>
                     </div>
                 </div>
                 
                 <button className="w-full mt-4 py-2.5 bg-slate-50 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-100 hover:text-primary-600 transition-colors flex items-center justify-center gap-1">
                     Xem thêm 12 tài liệu cùng chủ đề <span className="material-symbols-outlined text-sm">arrow_forward</span>
                 </button>
             </div>
          </aside>
        </div>
      </div>

      {/* --- MODALS --- */}

      {/* 1. Rating Modal */}
      {activeModal === 'rating' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[scaleIn_0.2s_ease-out]">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900">Đánh giá tài liệu</h3>
                    <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition-colors"><span className="material-symbols-outlined">close</span></button>
                </div>
                
                <div className="p-6">
                    {/* Document Info Snippet */}
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mb-6 border border-slate-100">
                         <div className="w-10 h-12 bg-blue-100 text-blue-600 rounded flex items-center justify-center flex-shrink-0">
                             <span className="material-symbols-outlined">description</span>
                         </div>
                         <div className="overflow-hidden">
                             <h4 className="text-sm font-bold text-slate-800 truncate">Kinh tế vĩ mô - Đề thi 2023</h4>
                             <p className="text-xs text-slate-500">Đăng bởi Nguyễn Văn A</p>
                         </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 mb-6">
                        <span className="text-sm font-bold text-slate-900">Chất lượng tài liệu</span>
                        <div className="flex gap-2">
                             {[1,2,3,4,5].map(s => (
                                 <span key={s} className="material-symbols-outlined text-4xl text-slate-200 cursor-pointer hover:text-amber-400 hover:scale-110 transition-transform active:text-amber-500">star</span>
                             ))}
                        </div>
                        <span className="text-xs text-slate-500">Chọn số sao để đánh giá</span>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nhận xét của bạn</label>
                        <textarea 
                            className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none placeholder-slate-400" 
                            rows={4} 
                            placeholder="Viết nhận xét của bạn về tài liệu này... (nội dung chi tiết, độ chính xác, v.v.)"
                        ></textarea>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={closeModal} className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors">Hủy</button>
                        <button className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2">
                            Gửi đánh giá <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* 2. Share Modal */}
      {activeModal === 'share' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[scaleIn_0.2s_ease-out]">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900">Chia sẻ tài liệu</h3>
                    <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition-colors"><span className="material-symbols-outlined">close</span></button>
                </div>
                
                <div className="p-6">
                    <p className="text-sm text-slate-600 mb-4">Chia sẻ tài liệu này với bạn bè của bạn thông qua các mạng xã hội.</p>
                    
                    <div className="flex justify-between gap-4 mb-6">
                        <button className="flex flex-col items-center gap-2 group">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform shadow-md">
                                <span className="material-symbols-outlined">facebook</span>
                            </div>
                            <span className="text-xs font-medium text-slate-600">Facebook</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 group">
                            <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform shadow-md">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </div>
                            <span className="text-xs font-medium text-slate-600">Instagram</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 group">
                            <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform shadow-md">
                                <span className="material-symbols-outlined">chat</span>
                            </div>
                            <span className="text-xs font-medium text-slate-600">Messenger</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 group">
                            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform shadow-md">
                                Z
                            </div>
                            <span className="text-xs font-medium text-slate-600">Zalo</span>
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700">Sao chép liên kết</label>
                        <div className="flex rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                            <input 
                                type="text" 
                                readOnly 
                                value="https://uel.hub/doc/kinh-te-vi-mo-2023" 
                                className="flex-grow px-4 py-3 bg-transparent text-sm text-slate-600 outline-none"
                            />
                            <button className="px-4 py-2 bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 transition-colors">
                                Sao chép
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* 3. Report Modal */}
      {activeModal === 'report' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[scaleIn_0.2s_ease-out]">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900">Báo cáo tài liệu</h3>
                    <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition-colors"><span className="material-symbols-outlined">close</span></button>
                </div>
                
                <div className="p-6">
                    <p className="text-sm text-slate-600 mb-4">Hãy cho chúng tôi biết vấn đề bạn gặp phải với tài liệu này. Ý kiến của bạn giúp cộng đồng tốt hơn.</p>
                    
                    <div className="space-y-3 mb-6">
                        {[
                            "Tài liệu sai nội dung", 
                            "Tài liệu rác (spam)", 
                            "Vi phạm bản quyền", 
                            "Chất lượng hình ảnh kém", 
                            "Khác..."
                        ].map((reason, idx) => (
                            <label key={idx} className="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-primary-200 transition-all group">
                                <input type="radio" name="report_reason" className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-gray-300" />
                                <span className="ml-3 text-sm text-slate-700 font-medium group-hover:text-slate-900">{reason}</span>
                            </label>
                        ))}
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ghi chú thêm</label>
                        <textarea 
                            className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none placeholder-slate-400" 
                            rows={3} 
                            placeholder="Mô tả chi tiết vấn đề bạn gặp phải..."
                        ></textarea>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={closeModal} className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors">Hủy bỏ</button>
                        <button className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">flag</span> Gửi báo cáo
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};