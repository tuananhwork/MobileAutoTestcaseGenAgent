import React from 'react';
import { TopBar } from '@/components/layout/TopBar';

export const TestScenarios: React.FC = () => {
  return (
    <>
      <TopBar userName="The Digital Curator" userRole="Admin Console" />
      <div className="pt-20 px-6 pb-6 h-screen flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-extrabold text-on-surface font-headline tracking-tight">Cấu trúc kịch bản thử nghiệm</h2>
            <p className="text-sm text-on-surface-variant mt-1">Phát triển kịch bản kiểm thử từ luồng nghiệp vụ đã phân tích.</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-xl border border-surface-container">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Validation</span>
            </div>
            <div className="w-8 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">2</div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Generating</span>
            </div>
            <div className="w-8 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-[10px] font-bold">3</div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant opacity-40">Negative</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex gap-6 overflow-hidden min-h-0">
          {/* Left Column: Input (User Flows) */}
          <div className="w-[30%] flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 bg-surface-container flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">account_tree</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Analyzed User Flows</span>
              </div>
              <span className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">SOURCE: AGENT 1</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded bg-[#E2DFFF] text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">login</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface">Entry: Login Screen</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">User enters credentials and clicks the primary login action button.</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-primary ring-1 ring-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">security</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface">Validation: Auth API</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">System validates session tokens and cross-references LDAP permissions.</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded bg-[#E2DFFF] text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">dashboard</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface">Success Path: Dashboard</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">Redirection to the primary dashboard with role-based widgets.</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded bg-[#E2DFFF] text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">error</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface">Failure Path: Error 401</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">Invalid credentials trigger inline error and cooldown.</p>
              </div>
            </div>
          </div>

          {/* Middle Column: Output (Structured Testcases) */}
          <div className="w-[40%] flex flex-col bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 bg-surface-container-high flex justify-between items-center shrink-0 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">TC-001: Login Success</span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-primary/5 text-primary text-[9px] font-bold rounded-full border border-primary/10">HAPPY PATH</span>
                <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">edit</span></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-5 custom-scrollbar space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-black flex items-center justify-center">1</div>
                  <div className="flex-1 w-[1px] bg-surface-container-highest my-1"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Mô tả bước</h4>
                  <p className="text-xs text-on-surface">Truy cập vào trang chủ qua URL chính thức.</p>
                  <div className="mt-2 p-3 bg-surface-container-low rounded-lg border border-surface-container">
                    <span className="text-[9px] font-bold text-on-surface-variant/60 uppercase block mb-1">Kết quả mong đợi</span>
                    <p className="text-[11px] italic text-on-surface">Màn hình đăng nhập hiển thị đầy đủ các trường.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center ring-4 ring-primary/10">2</div>
                  <div className="flex-1 w-[1px] bg-surface-container-highest my-1"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Thực hiện xác thực</h4>
                  <p className="text-xs text-on-surface font-semibold">Nhập thông tin hợp lệ và nhấn "Sign In".</p>
                  <div className="mt-2 p-3 bg-primary/5 border-l-2 border-primary rounded-r-lg">
                    <span className="text-[9px] font-bold text-primary uppercase block mb-1">Kết quả mong đợi</span>
                    <p className="text-[11px] italic text-on-surface">Hệ thống gửi token tới Auth API và nhận HTTP 200 OK.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-black flex items-center justify-center">3</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Chuyển hướng Dashboard</h4>
                  <p className="text-xs text-on-surface">Tải dữ liệu cấu hình người dùng từ database.</p>
                  <div className="mt-2 p-3 bg-surface-container-low rounded-lg border border-surface-container">
                    <span className="text-[9px] font-bold text-on-surface-variant/60 uppercase block mb-1">Kết quả mong đợi</span>
                    <p className="text-[11px] italic text-on-surface">Người dùng thấy giao diện Dashboard chính.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low border-t border-surface-container flex justify-between items-center shrink-0">
              <button className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-[10px] font-bold hover:bg-surface-dim transition-colors uppercase tracking-widest">Reset</button>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-primary font-bold text-[10px] hover:bg-primary/5 rounded-lg transition-colors uppercase tracking-widest">Hủy</button>
                <button className="px-6 py-2 bg-primary text-white rounded-lg text-[10px] font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform uppercase tracking-widest">Lưu kịch bản</button>
              </div>
            </div>
          </div>

          {/* Right Column: System Prompt Management */}
          <div className="w-[30%] flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 bg-surface-container-high flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-container text-xl">smart_toy</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Prompts</span>
              </div>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-surface-container-highest rounded transition-colors"><span className="material-symbols-outlined text-on-surface-variant text-sm">upload</span></button>
                <button className="p-1 hover:bg-surface-container-highest rounded transition-colors"><span className="material-symbols-outlined text-on-surface-variant text-sm">add_circle</span></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-5">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-sm">search</span>
                <input className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border-none rounded-lg text-[11px] focus:ring-1 focus:ring-primary/20 placeholder-on-surface-variant/40 outline-none" placeholder="Search instructions..." type="text" />
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Active Profile</h5>
                <div className="group p-3 bg-primary/5 rounded-xl border border-primary/20 ring-1 ring-primary/5 cursor-pointer transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center text-[9px] font-black">MD</div>
                      <span className="text-[11px] font-bold text-primary">system_role_config.md</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  </div>
                  <p className="text-[10px] text-primary/60 italic leading-relaxed line-clamp-2">"You are a Senior QA Engineer agent specialized in security validation..."</p>
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Library</h5>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest hover:bg-white hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#E2DFFF]/50 flex items-center justify-center text-primary text-[9px] font-black">MD</div>
                      <span className="text-[11px] font-medium text-on-surface">security_auth_v2.md</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-primary text-sm">visibility</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest hover:bg-white hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant text-[9px] font-black">TXT</div>
                      <span className="text-[11px] font-medium text-on-surface">edge_case_logic.txt</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-primary text-sm">visibility</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto p-3 bg-surface-container rounded-xl border border-surface-container-highest">
                <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-2">Prompt Strategy</p>
                <div className="flex items-center justify-between p-2 bg-surface-container-lowest rounded-lg border border-surface-container-highest cursor-pointer">
                  <span className="text-[10px] text-on-surface">Zero-shot Logical</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Footer */}
        <div className="p-4 bg-surface/80 backdrop-blur-xl rounded-2xl border border-surface-container-highest shadow-xl flex items-center gap-5 shrink-0">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
          </div>
          <div className="flex-1">
            <h5 className="text-xs font-bold text-on-surface">AI Suggestion: Missing Negative Scenario</h5>
            <p className="text-[11px] text-on-surface-variant">Potential security breach if 'Session Timeout' logic is not verified in Step 2.</p>
          </div>
          <div className="flex gap-3">
            <button className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hover:text-on-surface transition-colors">Ignore</button>
            <button className="bg-primary text-white px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-primary/20 transition-all">Generate Case</button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-10 z-50">
        <button className="w-14 h-14 bg-inverse-surface text-on-primary rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-all duration-300">
          <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
        </button>
      </div>
    </>
  );
};
