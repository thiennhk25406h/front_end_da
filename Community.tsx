import React from 'react';
import { ViewState } from '../types';

interface CommunityProps {
  onNavigate: (view: ViewState) => void;
}

export const Community: React.FC<CommunityProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-12 gap-8">
         {/* Left Sidebar - Navigation */}
         <aside className="hidden lg:block col-span-3 space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 sticky top-24">
               <div className="space-y-1">
                  <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-700 rounded-xl font-semibold"><span className="material-symbols-outlined">forum</span> Bảng tin chung</a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium"><span className="material-symbols-outlined">help</span> Hỏi đáp học tập</a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium"><span className="material-symbols-outlined">lightbulb</span> Chia sẻ kinh nghiệm</a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium"><span className="material-symbols-outlined">event</span> Sự kiện UEL</a>
               </div>
            </div>
         </aside>

         {/* Main Feed */}
         <section className="col-span-12 lg:col-span-6 space-y-6">
            {/* Create Post */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
               <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Me" className="rounded-full" alt="Me"/>
                  </div>
                  <input type="text" placeholder="Bạn đang nghĩ gì? Chia sẻ câu hỏi hoặc kinh nghiệm..." className="w-full bg-slate-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"/>
               </div>
               <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <div className="flex gap-2">
                     <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg"><span className="material-symbols-outlined text-green-500">image</span></button>
                     <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg"><span className="material-symbols-outlined text-blue-500">attachment</span></button>
                  </div>
                  <button className="bg-primary-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-primary-700">Đăng</button>
               </div>
            </div>

            {/* Post 1 */}
            <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">NT</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Nguyễn Thành Trung</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                           <span>2 giờ trước</span>
                           <span>•</span>
                           <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md font-medium">Kinh tế Vĩ mô</span>
                        </div>
                     </div>
                  </div>
                  <button className="text-slate-400"><span className="material-symbols-outlined">more_horiz</span></button>
               </div>
               <div className="mb-4" onClick={() => onNavigate('post_detail')}>
                  <h3 className="font-bold text-slate-900 mb-2">Cứu mình bài tập Vĩ mô chương 3 với mọi người ơi! 😭</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                     Mình đang làm bài tập về mô hình IS-LM mà đến đoạn tính lãi suất cân bằng bị kẹt. Có ai giải thích giúp mình tại sao đường LM lại dịch chuyển sang phải trong trường hợp này không ạ?
                  </p>
               </div>
               <div className="flex items-center gap-6 pt-4 border-t border-slate-100 text-slate-500 text-sm font-medium">
                   <button 
                    onClick={(e) => { e.stopPropagation(); onNavigate('post_detail'); }} 
                    className="flex items-center gap-2 hover:text-red-500 transition-colors"
                   >
                       <span className="material-symbols-outlined">favorite</span> 24
                   </button>
                   <button 
                    onClick={(e) => { e.stopPropagation(); onNavigate('post_detail'); }} 
                    className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                   >
                       <span className="material-symbols-outlined">chat_bubble</span> 12 Bình luận
                   </button>
                   <button className="flex items-center gap-2 hover:text-green-500 transition-colors ml-auto"><span className="material-symbols-outlined">share</span> Chia sẻ</button>
               </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                     <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">LA</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Lê Lan Anh</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                           <span>5 giờ trước</span>
                           <span>•</span>
                           <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-md font-medium">Chia sẻ kinh nghiệm</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mb-4" onClick={() => onNavigate('post_detail')}>
                  <h3 className="font-bold text-slate-900 mb-2">Review môn Toán Cao Cấp C1 - Thầy Hưng</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Thầy giảng siêu dễ hiểu nhưng đi thi thì đề hơi khoai nhé các bạn =))). Mọi người nên ôn kỹ phần đạo hàm với tích phân, thầy hay cho mấy câu bẫy ở đó lắm.
                  </p>
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-red-500 text-3xl">picture_as_pdf</span>
                          <div>
                              <p className="text-sm font-bold text-slate-800">Tong_hop_dang_bai_TCC.pdf</p>
                              <p className="text-xs text-slate-500">2.4 MB</p>
                          </div>
                      </div>
                      <button className="text-blue-600 p-2"><span className="material-symbols-outlined">download</span></button>
                  </div>
               </div>
               <div className="flex items-center gap-6 pt-4 border-t border-slate-100 text-slate-500 text-sm font-medium">
                   <button 
                    onClick={(e) => { e.stopPropagation(); onNavigate('post_detail'); }} 
                    className="flex items-center gap-2 text-red-500"
                   >
                       <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span> 156
                   </button>
                   <button 
                    onClick={(e) => { e.stopPropagation(); onNavigate('post_detail'); }} 
                    className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                   >
                       <span className="material-symbols-outlined">chat_bubble</span> 45 Bình luận
                   </button>
               </div>
            </article>
         </section>

         {/* Right Sidebar */}
         <aside className="hidden lg:block col-span-3 space-y-6">
             <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-red-500">local_fire_department</span> Chủ đề Hot</h3>
                 <div className="space-y-4">
                     {[
                         {t: "Cách đăng ký tín chỉ không bị trùng?", v: "1.2k"},
                         {t: "Góc pass đồ dùng học tập K45", v: "856"},
                         {t: "Review nhà trọ khu vực quanh trường", v: "540"}
                     ].map((item, i) => (
                         <div key={i} className="group cursor-pointer">
                             <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary-600 line-clamp-2">{item.t}</h4>
                             <p className="text-xs text-slate-500 mt-1">{item.v} thảo luận</p>
                         </div>
                     ))}
                 </div>
             </div>
             
             <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-5 shadow-lg text-white">
                 <h3 className="font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-yellow-300">workspace_premium</span> Top Thành viên</h3>
                 <div className="space-y-4">
                     {[1,2,3].map(i => (
                         <div key={i} className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">{i}</div>
                             <div className="flex-1">
                                 <div className="font-bold text-sm">Thành viên {i}</div>
                                 <div className="text-xs text-blue-100">{1000 - i*50} điểm</div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         </aside>
      </div>
    </div>
  );
};