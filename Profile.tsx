import React, { useState } from 'react';
import { ViewState, Document } from '../types';

interface ProfileProps {
  onNavigate: (view: ViewState) => void;
  onLogout: () => void;
}

// Local interfaces for Profile UI
interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  bg: string;
  description: string;
}

interface Activity {
  id: string;
  type: 'upload' | 'comment' | 'download' | 'like';
  content: string;
  target: string;
  time: string;
}

interface MyReview {
  id: string;
  docTitle: string;
  rating: number;
  content: string;
  date: string;
}

export const Profile: React.FC<ProfileProps> = ({ onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'uploads' | 'library' | 'reviews' | 'settings'>('overview');
  const [libraryFilter, setLibraryFilter] = useState<'saved' | 'downloaded'>('saved');

  // --- Mock Data ---
  const userStats = {
    uploads: 12,
    downloads: 145,
    reputation: 480,
    level: 5,
    nextLevelExp: 600,
    currentExp: 480
  };

  const badges: Badge[] = [
    { id: '1', name: 'Người chia sẻ', icon: 'upload_file', color: 'text-blue-600', bg: 'bg-blue-100', description: 'Đăng tải 10 tài liệu' },
    { id: '2', name: 'Mọt sách', icon: 'menu_book', color: 'text-amber-600', bg: 'bg-amber-100', description: 'Tải xuống 100 tài liệu' },
    { id: '3', name: 'Uy tín', icon: 'verified', color: 'text-emerald-600', bg: 'bg-emerald-100', description: 'Đạt 50 đánh giá 5 sao' },
  ];

  const recentActivities: Activity[] = [
    { id: '1', type: 'upload', content: 'Đã đăng tải tài liệu', target: 'Đề thi Kinh tế Vi mô 2023', time: '2 giờ trước' },
    { id: '2', type: 'comment', content: 'Đã bình luận vào', target: 'Slide Pháp luật đại cương', time: '5 giờ trước' },
    { id: '3', type: 'download', content: 'Đã tải xuống', target: 'Giáo trình Marketing Căn bản', time: '1 ngày trước' },
    { id: '4', type: 'like', content: 'Đã thích bài viết của', target: 'Trần Thị B', time: '2 ngày trước' },
  ];

  const myUploads: Document[] = [
    { id: '1', title: 'Tổng hợp đề thi Kinh tế vi mô 1 (2020-2023)', type: 'PDF', views: 1200, downloads: 350, rating: 4.8, author: 'Nguyễn Văn A', date: '12/10/2023' },
    { id: '2', title: 'Slide thuyết trình Nhập môn Marketing - Nhóm 5', type: 'Slide', views: 450, downloads: 120, rating: 4.5, author: 'Nguyễn Văn A', date: '05/09/2023' },
  ];

  const savedDocs: Document[] = [
    { id: '3', title: 'Giáo trình Toán cao cấp C1 - Đại học Kinh tế Luật', type: 'PDF', views: 1800, downloads: 650, rating: 4.7, author: 'Phạm Minh D', date: '2 tuần trước' },
    { id: '4', title: 'Tiểu luận Pháp luật đại cương - Điểm A', type: 'DOCX', views: 2500, downloads: 800, rating: 4.9, author: 'Lê Hoàng C', date: '1 tuần trước' },
  ];
  
  const downloadedDocs: Document[] = [
     { id: '5', title: 'Slide Nguyên lý Kế toán - Full Chapter', type: 'Slide', views: 2100, downloads: 540, rating: 4.6, author: 'Hoàng Thị E', date: '3 tuần trước' },
  ];

  const myReviews: MyReview[] = [
      { id: '1', docTitle: 'Giáo trình Toán cao cấp C1', rating: 5, content: 'Tài liệu rất chi tiết, cảm ơn bạn đã chia sẻ!', date: '10/10/2023' },
      { id: '2', docTitle: 'Đề thi Vi mô 2022', rating: 4, content: 'Đáp án câu 5 hơi mờ, nhưng nhìn chung rất hữu ích.', date: '05/10/2023' },
  ];

  // --- Helpers ---
  const getFileIconStyle = (type: string) => {
    switch (type) {
      case 'PDF': return { icon: 'picture_as_pdf', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' };
      case 'DOCX': return { icon: 'description', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' };
      case 'Slide': return { icon: 'co_present', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' };
      case 'XLSX': return { icon: 'table_view', color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100' };
      default: return { icon: 'article', color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-200' };
    }
  };

  const renderDocItem = (doc: Document, isOwner: boolean) => {
    const style = getFileIconStyle(doc.type);
    return (
      <div key={doc.id} className="group bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row gap-5 hover:shadow-lg hover:border-primary-200 transition-all duration-300 mb-4">
        {/* Icon / Thumbnail */}
        <div className={`w-full sm:w-20 h-20 ${style.bg} ${style.border} border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
          <span className={`material-symbols-outlined text-4xl ${style.color}`}>{style.icon}</span>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col justify-between py-1">
          <div className="flex justify-between items-start gap-4">
              <div>
                 <h3 
                    className="font-bold text-slate-900 text-lg line-clamp-1 hover:text-primary-600 cursor-pointer transition-colors"
                    onClick={() => onNavigate('document')}
                >
                    {doc.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${style.border} ${style.bg} ${style.color}`}>{doc.type}</span>
                   <span className="text-xs text-slate-400">• {doc.date}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                {isOwner ? (
                    <>
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Chỉnh sửa">
                            <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Xóa">
                            <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                    </>
                ) : (
                     <button className="p-2 text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors" title="Bỏ lưu">
                        <span className="material-symbols-outlined text-xl">bookmark_remove</span>
                     </button>
                )}
              </div>
          </div>
          
          <div className="flex items-center gap-6 mt-3 text-sm text-slate-500 font-medium border-t border-slate-50 pt-3">
               <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">visibility</span> {doc.views.toLocaleString()}</span>
               <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">download</span> {doc.downloads.toLocaleString()}</span>
               <span className="flex items-center gap-1.5 text-amber-500"><span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span> {doc.rating}</span>
          </div>
        </div>
      </div>
    );
  };

  // --- Render Tabs ---

  const renderOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Stats & Badges */}
        <div className="lg:col-span-8 space-y-8">
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                    { label: 'Tài liệu', value: userStats.uploads, icon: 'upload_file', color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Lượt tải về', value: userStats.downloads, icon: 'download', color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'Điểm uy tín', value: userStats.reputation, icon: 'military_tech', color: 'text-amber-600', bg: 'bg-amber-50' },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                            <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-black text-slate-900">{stat.value}</span>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Level Progress */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                     <span className="material-symbols-outlined text-9xl">hotel_class</span>
                 </div>
                 <div className="relative z-10">
                     <div className="flex justify-between items-end mb-3">
                         <div>
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cấp độ hiện tại</span>
                             <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                                <span className="text-primary-600">Level {userStats.level}</span> - Học giả
                             </h3>
                         </div>
                         <span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{userStats.currentExp} / {userStats.nextLevelExp} XP</span>
                     </div>
                     <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden shadow-inner">
                         <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full transition-all duration-1000" style={{ width: `${(userStats.currentExp / userStats.nextLevelExp) * 100}%` }}></div>
                     </div>
                     <p className="mt-4 text-sm text-slate-500">
                        Bạn cần thêm <span className="font-bold text-slate-900">{userStats.nextLevelExp - userStats.currentExp} XP</span> để đạt danh hiệu <strong>"Nhà nghiên cứu"</strong>. Hãy tích cực đăng tải và thảo luận!
                     </p>
                 </div>
            </div>

            {/* Badges */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-slate-900">Bộ sưu tập huy hiệu</h3>
                    <button className="text-sm text-primary-600 font-bold hover:underline">Xem tất cả</button>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
                        {badges.map(badge => (
                            <div key={badge.id} className="flex flex-col items-center min-w-[120px] group cursor-pointer">
                                <div className={`w-16 h-16 rounded-full ${badge.bg} ${badge.color} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ring-4 ring-white border-2 border-slate-50`}>
                                    <span className="material-symbols-outlined text-3xl">{badge.icon}</span>
                                </div>
                                <span className="text-sm font-bold text-slate-800 text-center group-hover:text-primary-600 transition-colors">{badge.name}</span>
                                <span className="text-[10px] text-slate-400 text-center mt-1 px-2">{badge.description}</span>
                            </div>
                        ))}
                        <div className="flex flex-col items-center min-w-[120px] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-not-allowed">
                             <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3 border-2 border-dashed border-slate-300">
                                 <span className="material-symbols-outlined text-3xl">lock</span>
                             </div>
                             <span className="text-sm font-bold text-slate-500 text-center">Bí ẩn</span>
                             <span className="text-[10px] text-slate-400 text-center mt-1">Chưa mở khóa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full overflow-hidden flex flex-col">
                <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-600">history</span> Hoạt động gần đây
                    </h3>
                </div>
                <div className="p-6 flex-grow">
                    <div className="space-y-8 relative">
                         {/* Vertical Line */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="relative pl-10 group">
                                <div className={`absolute left-0 top-0 w-10 h-10 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${
                                    activity.type === 'upload' ? 'bg-blue-100 text-blue-600' : 
                                    activity.type === 'download' ? 'bg-green-100 text-green-600' :
                                    activity.type === 'like' ? 'bg-pink-100 text-pink-600' : 'bg-slate-100 text-slate-600'
                                }`}>
                                    <span className="material-symbols-outlined text-lg">
                                        {activity.type === 'upload' ? 'upload' : 
                                         activity.type === 'download' ? 'download' :
                                         activity.type === 'like' ? 'favorite' : 'chat_bubble'}
                                    </span>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-slate-600">
                                        {activity.content} <span className="font-bold text-slate-900 hover:text-primary-600 cursor-pointer transition-colors">"{activity.target}"</span>
                                    </p>
                                    <span className="text-xs text-slate-400 font-medium mt-1 block">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 border-t border-slate-100 text-center">
                    <button className="text-sm font-bold text-slate-500 hover:text-primary-600 transition-colors">Xem toàn bộ lịch sử</button>
                </div>
            </div>
        </div>
    </div>
  );

  const renderMyDocs = () => (
      <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  Tài liệu của tôi <span className="bg-slate-100 text-slate-600 text-sm px-2 py-0.5 rounded-full">{myUploads.length}</span>
              </h2>
              <div className="flex gap-3">
                   <select className="px-4 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none bg-white font-medium text-slate-700 cursor-pointer">
                       <option>Mới nhất</option>
                       <option>Nhiều lượt xem nhất</option>
                       <option>Đánh giá cao nhất</option>
                   </select>
                   <button 
                    onClick={() => onNavigate('upload_document')}
                    className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary-700 transition-all shadow-md shadow-blue-200 active:scale-95"
                   >
                      <span className="material-symbols-outlined text-lg">add</span> Đăng mới
                   </button>
              </div>
          </div>
          
          <div className="grid grid-cols-1">
              {myUploads.map(doc => renderDocItem(doc, true))}
          </div>

          {myUploads.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                      <span className="material-symbols-outlined text-5xl">folder_open</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Chưa có tài liệu nào</h3>
                  <p className="text-slate-500 font-medium mb-6">Bạn chưa đăng tải tài liệu nào lên hệ thống.</p>
                  <button onClick={() => onNavigate('upload_document')} className="text-primary-600 font-bold hover:underline">Đăng tài liệu ngay</button>
              </div>
          )}
      </div>
  );

  const renderLibrary = () => (
      <div className="space-y-6">
          <div className="bg-white p-1.5 rounded-xl border border-slate-200 inline-flex shadow-sm">
              <button 
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${libraryFilter === 'saved' ? 'bg-primary-50 text-primary-700 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                onClick={() => setLibraryFilter('saved')}
              >
                  Đã lưu ({savedDocs.length})
              </button>
              <button 
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${libraryFilter === 'downloaded' ? 'bg-primary-50 text-primary-700 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                onClick={() => setLibraryFilter('downloaded')}
              >
                  Lịch sử tải xuống ({downloadedDocs.length})
              </button>
          </div>
          
          <div>
            {(libraryFilter === 'saved' ? savedDocs : downloadedDocs).map(doc => renderDocItem(doc, false))}
            
            {(libraryFilter === 'saved' ? savedDocs : downloadedDocs).length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                        <span className="material-symbols-outlined text-5xl">
                            {libraryFilter === 'saved' ? 'bookmark_border' : 'history'}
                        </span>
                    </div>
                    <p className="text-slate-500 font-medium">Danh sách trống.</p>
                </div>
            )}
          </div>
      </div>
  );

  const renderReviews = () => (
      <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Đánh giá của tôi <span className="text-slate-500 text-base font-normal">({myReviews.length})</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myReviews.map(review => (
                <div key={review.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                                <span className="material-symbols-outlined">description</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm hover:text-primary-600 cursor-pointer line-clamp-1">{review.docTitle}</h3>
                                <span className="text-xs text-slate-400">{review.date}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                        {[1,2,3,4,5].map(star => (
                            <span key={star} className={`material-symbols-outlined text-lg ${star <= review.rating ? 'text-amber-400' : 'text-slate-200'}`} style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        ))}
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                        <p className="text-slate-600 text-sm italic relative">
                            "{review.content}"
                        </p>
                    </div>

                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Sửa</button>
                        <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">Xóa</button>
                    </div>
                </div>
            ))}
          </div>
      </div>
  );

  const renderSettings = () => (
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="md:col-span-1 space-y-1">
               <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200 sticky top-24">
                   <button className="w-full text-left px-4 py-3 rounded-xl bg-primary-50 text-primary-700 font-bold text-sm flex items-center gap-3">
                        <span className="material-symbols-outlined">person</span> Chung
                   </button>
                   <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-medium text-sm transition-colors flex items-center gap-3">
                        <span className="material-symbols-outlined">notifications</span> Thông báo
                   </button>
                   <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-medium text-sm transition-colors flex items-center gap-3">
                        <span className="material-symbols-outlined">lock</span> Bảo mật
                   </button>
               </div>
           </div>
           
           <div className="md:col-span-3 space-y-8">
               {/* Personal Info */}
               <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                       <span className="material-symbols-outlined text-primary-600">badge</span> Thông tin cá nhân
                   </h3>
                   <div className="space-y-6">
                       <div className="flex items-center gap-6 mb-8">
                           <div className="relative">
                               <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random&size=128" className="w-24 h-24 rounded-full border-4 border-slate-100 shadow-sm" alt="Avatar" />
                               <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-slate-200 text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                                   <span className="material-symbols-outlined text-lg">edit</span>
                               </button>
                           </div>
                           <div>
                               <h4 className="font-bold text-slate-900">Ảnh đại diện</h4>
                               <p className="text-sm text-slate-500">Chấp nhận file PNG, JPG tối đa 2MB</p>
                           </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                               <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên</label>
                               <input type="text" defaultValue="Nguyễn Văn A" className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none sm:text-sm bg-slate-50 transition-all" />
                           </div>
                           <div>
                               <label className="block text-sm font-bold text-slate-700 mb-2">Mã số sinh viên</label>
                               <input type="text" defaultValue="K194010123" disabled className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-100 text-slate-500 sm:text-sm cursor-not-allowed font-medium" />
                           </div>
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-slate-700 mb-2">Email sinh viên</label>
                           <input type="email" defaultValue="mssv@st.uel.edu.vn" disabled className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-100 text-slate-500 sm:text-sm cursor-not-allowed font-medium" />
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-slate-700 mb-2">Giới thiệu bản thân</label>
                           <textarea rows={4} className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none sm:text-sm transition-all" placeholder="Chia sẻ một chút về sở thích, chuyên ngành của bạn..."></textarea>
                       </div>
                       <div className="flex justify-end pt-4 border-t border-slate-100">
                           <button className="bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 active:scale-95">Lưu thay đổi</button>
                       </div>
                   </div>
               </div>

               {/* Danger Zone */}
               <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                       <span className="material-symbols-outlined text-9xl text-red-500">warning</span>
                   </div>
                   <h3 className="text-xl font-bold text-red-600 mb-2 relative z-10">Vùng nguy hiểm</h3>
                   <p className="text-sm text-slate-500 mb-6 relative z-10">Các hành động dưới đây sẽ ảnh hưởng trực tiếp đến tài khoản của bạn và không thể hoàn tác.</p>
                   
                   <div className="flex flex-col gap-4 relative z-10">
                       <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                           <div>
                               <h4 className="font-bold text-slate-800 text-sm">Đăng xuất khỏi thiết bị này</h4>
                               <p className="text-xs text-slate-500">Kết thúc phiên làm việc hiện tại</p>
                           </div>
                           <button 
                                onClick={onLogout}
                                className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-bold hover:bg-red-600 hover:text-white transition-all shadow-sm"
                           >
                               Đăng xuất
                           </button>
                       </div>
                       <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                           <div>
                               <h4 className="font-bold text-slate-800 text-sm">Xóa tài khoản vĩnh viễn</h4>
                               <p className="text-xs text-slate-500">Xóa toàn bộ dữ liệu và tài liệu đã đăng</p>
                           </div>
                           <button className="px-4 py-2 bg-red-600 text-white border border-red-600 rounded-lg text-sm font-bold hover:bg-red-700 transition-all shadow-md shadow-red-200">
                               Xóa tài khoản
                           </button>
                       </div>
                   </div>
               </div>
           </div>
      </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Profile Header */}
      <div className="bg-white border-b border-slate-200 relative group">
        {/* Cover Image */}
        <div className="h-64 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Cover" 
                className="w-full h-full object-cover"
            />
            
            <div className="absolute top-4 left-4 z-20">
                 <button onClick={() => onNavigate('home')} className="flex items-center text-white hover:bg-white/20 transition-all px-4 py-2 rounded-full backdrop-blur-md font-medium text-sm">
                    <span className="material-symbols-outlined text-lg mr-2">arrow_back</span> Trang chủ
                 </button>
            </div>
            
            <button className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-lg backdrop-blur-md text-sm font-medium transition-all opacity-0 group-hover:opacity-100">
                <span className="material-symbols-outlined text-lg">camera_alt</span> Cập nhật ảnh bìa
            </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
             <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 -mt-12 md:-mt-16 mb-6 relative z-30">
                 {/* Avatar */}
                 <div className="relative group/avatar">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden relative cursor-pointer">
                        <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random&size=256" className="w-full h-full object-cover" alt="Avatar" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white" title="Online"></div>
                 </div>

                 <div className="flex-grow flex flex-col items-center md:items-start pb-2 md:pb-1">
                     <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900">Nguyễn Văn A</h1>
                        <span className="material-symbols-outlined text-blue-500 text-xl filled" style={{fontVariationSettings: "'FILL' 1"}} title="Tài khoản đã xác thực">verified</span>
                     </div>
                     <p className="text-slate-500 font-medium text-sm flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-bold text-xs uppercase">K45</span>
                        <span className="hidden md:inline">•</span>
                        <span className="truncate">Quản trị kinh doanh</span>
                        <span className="hidden md:inline">•</span>
                        <span>UEL</span>
                     </p>
                 </div>
                 
                 <div className="flex gap-3 pb-0 md:pb-4 w-full md:w-auto justify-center md:justify-end">
                      <button className="flex-1 md:flex-none px-5 py-2.5 bg-primary-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all active:scale-95 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                        Chỉnh sửa
                      </button>
                      <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined">share</span>
                      </button>
                 </div>
             </div>

             {/* Navigation Tabs */}
             <div className="flex items-center gap-2 sm:gap-8 border-t border-slate-100 overflow-x-auto scrollbar-hide">
                {[
                    {id: 'overview', label: 'Tổng quan', icon: 'dashboard'},
                    {id: 'uploads', label: 'Tài liệu', icon: 'folder_open'},
                    {id: 'library', label: 'Thư viện', icon: 'bookmarks'},
                    {id: 'reviews', label: 'Đánh giá', icon: 'star'},
                    {id: 'settings', label: 'Cài đặt', icon: 'settings'},
                ].map(tab => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`py-4 px-1 flex items-center gap-2 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        <span className={`material-symbols-outlined text-xl ${activeTab === tab.id ? 'filled' : ''}`} style={activeTab === tab.id ? {fontVariationSettings: "'FILL' 1"} : {}}>{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
             </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-[fadeIn_0.3s_ease-out]">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'uploads' && renderMyDocs()}
          {activeTab === 'library' && renderLibrary()}
          {activeTab === 'reviews' && renderReviews()}
          {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  );
};