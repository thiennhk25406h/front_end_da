import React from 'react';
import { ViewState } from '../types';

interface PostDetailProps {
  onNavigate: (view: ViewState) => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation Back */}
        <button 
            onClick={() => onNavigate('community')} 
            className="flex items-center text-slate-500 hover:text-primary-600 mb-6 transition-colors font-medium"
        >
            <span className="material-symbols-outlined text-xl mr-1">arrow_back</span> Quay lại cộng đồng
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-6">
                
                {/* The Original Post */}
                <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">LA</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-base">Lê Lan Anh</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span>5 giờ trước</span>
                                <span>•</span>
                                <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-md font-medium">Chia sẻ kinh nghiệm</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-slate-400 hover:bg-slate-50 p-2 rounded-full"><span className="material-symbols-outlined">more_horiz</span></button>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Review môn Toán Cao Cấp C1 - Thầy Hưng</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Thầy giảng siêu dễ hiểu nhưng đi thi thì đề hơi khoai nhé các bạn =))). Mọi người nên ôn kỹ phần đạo hàm với tích phân, thầy hay cho mấy câu bẫy ở đó lắm. Mình có tổng hợp một số dạng bài hay ra thi ở file đính kèm bên dưới, mọi người tải về tham khảo nhé.
                        </p>
                        
                        <div className="mt-3 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between hover:bg-blue-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-red-500 text-2xl">picture_as_pdf</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800 group-hover:text-primary-700">Tong_hop_dang_bai_TCC.pdf</p>
                                    <p className="text-xs text-slate-500">2.4 MB • Đã tải 156 lần</p>
                                </div>
                            </div>
                            <button className="text-blue-600 bg-white p-2 rounded-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><span className="material-symbols-outlined">download</span></button>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                        <button className="flex items-center gap-2 text-red-500 font-medium px-3 py-1.5 bg-red-50 rounded-lg">
                            <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span> 156
                        </button>
                        <button className="flex items-center gap-2 text-blue-600 font-medium px-3 py-1.5 bg-blue-50 rounded-lg">
                            <span className="material-symbols-outlined">chat_bubble</span> 45 Bình luận
                        </button>
                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors ml-auto">
                            <span className="material-symbols-outlined">share</span> Chia sẻ
                        </button>
                    </div>
                </article>

                {/* Comment Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 bg-slate-50">
                        <h3 className="font-bold text-slate-900">Bình luận (45)</h3>
                    </div>

                    {/* Input */}
                    <div className="p-4 border-b border-slate-100 flex gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0">
                            <img src="https://ui-avatars.com/api/?name=Me" className="rounded-full" alt="Me"/>
                        </div>
                        <div className="flex-grow relative">
                            <textarea 
                                placeholder="Viết bình luận của bạn..." 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none transition-all text-sm min-h-[60px]"
                            ></textarea>
                            <button className="absolute bottom-2 right-2 bg-primary-600 text-white p-1.5 rounded-lg hover:bg-primary-700 transition-colors">
                                <span className="material-symbols-outlined text-lg">send</span>
                            </button>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="p-4 space-y-6">
                        {/* Comment 1 */}
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold flex-shrink-0">TA</div>
                            <div className="flex-grow">
                                <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none inline-block">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-slate-900 text-sm">Trần Tuấn Anh</span>
                                        <span className="text-xs text-slate-400">2 giờ trước</span>
                                    </div>
                                    <p className="text-sm text-slate-700">File tài liệu xịn quá, cảm ơn bạn nhiều nhé! Đúng cái mình đang cần ôn gấp.</p>
                                </div>
                                <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-medium text-slate-500">
                                    <button className="hover:text-primary-600">Thích</button>
                                    <button className="hover:text-primary-600">Phản hồi</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 2 (Nested) */}
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">MH</div>
                            <div className="flex-grow">
                                <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none inline-block">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-slate-900 text-sm">Minh Hoàng</span>
                                        <span className="text-xs text-slate-400">3 giờ trước</span>
                                    </div>
                                    <p className="text-sm text-slate-700">Thầy Hưng dạy hay nhưng điểm danh gắt thật sự :(( Vắng 2 buổi là xác định cấm thi.</p>
                                </div>
                                <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-medium text-slate-500">
                                    <button className="hover:text-primary-600 text-primary-600 font-bold">Đã thích (5)</button>
                                    <button className="hover:text-primary-600">Phản hồi</button>
                                </div>

                                {/* Reply */}
                                <div className="flex gap-3 mt-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs flex-shrink-0">LA</div>
                                    <div>
                                        <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none inline-block">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-slate-900 text-sm">Lê Lan Anh</span>
                                                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded">Tác giả</span>
                                            </div>
                                            <p className="text-sm text-slate-700">Chuẩn luôn, nên mình mới note là phải đi học đầy đủ đó =)))</p>
                                        </div>
                                         <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-medium text-slate-500">
                                            <button className="hover:text-primary-600">Thích</button>
                                            <button className="hover:text-primary-600">Phản hồi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Comment 3 */}
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold flex-shrink-0">QD</div>
                            <div className="flex-grow">
                                <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none inline-block">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-slate-900 text-sm">Quốc Dũng</span>
                                        <span className="text-xs text-slate-400">4 giờ trước</span>
                                    </div>
                                    <p className="text-sm text-slate-700">Phần tích phân suy rộng năm ngoái có ra không bạn ơi?</p>
                                </div>
                                <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-medium text-slate-500">
                                    <button className="hover:text-primary-600">Thích</button>
                                    <button className="hover:text-primary-600">Phản hồi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="w-full py-3 bg-slate-50 text-slate-500 text-sm font-bold hover:bg-slate-100 transition-colors border-t border-slate-100">
                        Xem thêm bình luận
                    </button>
                </div>
            </div>

            {/* Sidebar Right */}
            <div className="md:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                     <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Bài viết cùng chủ đề</h3>
                     <div className="space-y-4">
                        <a href="#" className="block group">
                            <span className="text-xs font-semibold text-purple-600 mb-1 block">Toán cao cấp</span>
                            <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary-600 line-clamp-2">Tổng hợp công thức C1 dễ nhớ nhất</h4>
                            <span className="text-xs text-slate-400 mt-1 block">23 bình luận</span>
                        </a>
                         <div className="border-t border-slate-100"></div>
                        <a href="#" className="block group">
                            <span className="text-xs font-semibold text-purple-600 mb-1 block">Chia sẻ kinh nghiệm</span>
                            <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary-600 line-clamp-2">Kinh nghiệm đạt A môn Đại số tuyến tính</h4>
                            <span className="text-xs text-slate-400 mt-1 block">45 bình luận</span>
                        </a>
                     </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2">Quy tắc thảo luận</h3>
                    <ul className="text-sm text-blue-800 space-y-2 list-disc pl-4">
                        <li>Tôn trọng các thành viên khác.</li>
                        <li>Không spam hoặc quảng cáo.</li>
                        <li>Nội dung phải liên quan đến học tập.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};