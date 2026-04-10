import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';

export const YamlExport: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TopBar userName="Alex Nguyen" userRole="Lead Architect" />

      {/* Floating Preview Window */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-on-surface/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-surface-container-lowest w-full max-w-2xl h-[70vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
                <div>
                  <h4 className="text-sm font-bold font-headline">system_context.md</h4>
                  <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Preview Mode</p>
                </div>
              </div>
              <button 
                className="p-2 hover:bg-error/10 hover:text-error rounded-full transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 p-8 overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed text-on-surface-variant">
              <p className="text-primary font-bold mb-4"># Architecture Guidelines</p>
              <p>This document outlines the core principles for YAML script generation within the Architect Intelligence framework.</p>
              <h2 className="text-lg font-bold mt-6 mb-2 text-on-surface">1. Modular Structure</h2>
              <p>Every script must include a header section containing `name`, `version`, and `description`. Use comments liberally to define logical blocks of execution.</p>
              <h2 className="text-lg font-bold mt-6 mb-2 text-on-surface">2. Selector Strategy</h2>
              <ul className="list-disc ml-4 space-y-2 mt-2">
                <li>Primary: `accessibility_id`</li>
                <li>Secondary: `id` (platform specific)</li>
                <li>Tertiary: `xpath`</li>
              </ul>
            </div>
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/20 flex justify-end gap-3">
              <button 
                className="px-4 py-2 text-xs font-bold font-headline text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Đóng
              </button>
              <button className="px-4 py-2 text-xs font-bold font-headline bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-20 px-6 pb-6 h-screen flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-extrabold text-on-surface font-headline tracking-tight">Xuất kịch bản YAML</h2>
            <p className="text-sm text-on-surface-variant mt-1">Quản lý, xem trước và tải xuống các file YAML đã được khởi tạo.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-bold hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-lg">folder_zip</span>
              Download All (ZIP)
            </button>
          </div>
        </div>

        <div className="flex-1 flex gap-6 overflow-hidden min-h-0">
          {/* Left Panel: YAML File Explorer */}
          <div className="w-[30%] flex flex-col bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10">
            <div className="px-5 py-4 bg-surface-container flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">archive</span>
                <span className="text-xs font-bold font-headline uppercase tracking-wider">Thư viện YAML</span>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant opacity-60">3 FILES</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3">
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">description</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold truncate">login_flow.yaml</h4>
                    <p className="text-[10px] text-on-surface-variant">2 giờ trước • 1.2 KB</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-xl opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                </div>
              </div>
              <div className="p-3 bg-primary/5 rounded-xl border border-primary/20 ring-1 ring-primary/20 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">code_blocks</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-primary truncate">checkout_process.yaml</h4>
                    <p className="text-[10px] text-primary/70">Đang chọn • 3.5 KB</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">description</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold truncate">user_profile_edit.yaml</h4>
                    <p className="text-[10px] text-on-surface-variant">Hôm qua • 0.8 KB</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-xl opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-outline-variant/10">
              <button className="w-full py-2.5 bg-surface-container-highest text-on-surface text-xs font-bold rounded-xl hover:bg-surface-dim transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">add</span>
                Khởi tạo File mới
              </button>
            </div>
          </div>

          {/* Center Panel: IDE Code Preview */}
          <div className="w-[40%] flex flex-col bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border border-white/5">
            <div className="px-5 py-3 bg-inverse-surface flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-[10px] font-mono text-white/50 ml-2">checkout_process.yaml — Preview</span>
              </div>
              <button className="text-[10px] font-bold text-primary-fixed-dim hover:text-white transition-colors flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                COPY
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 font-mono text-[12px] leading-relaxed custom-scrollbar text-white/90 relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-black/20 text-white/20 text-right pr-2 py-6 select-none border-r border-white/5">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16
              </div>
              <div className="pl-8">
                <div className="mb-1"><span className="text-[#9CDCFE]">name</span><span className="text-white">:</span> <span className="text-[#CE9178]">Automated Checkout Test</span></div>
                <div className="mb-1"><span className="text-[#9CDCFE]">description</span><span className="text-white">:</span> <span className="text-[#CE9178]">End-to-end testing for mobile flow</span></div>
                <div className="mb-1"><span className="text-[#9CDCFE]">version</span><span className="text-white">:</span> <span className="text-[#B5CEA8]">1.0.2</span></div>
                <div className="text-[#6A9955] my-2"># Main execution block</div>
                <div className="mb-1"><span className="text-[#9CDCFE]">steps</span><span className="text-white">:</span></div>
                <div className="pl-4">
                  <div className="mb-1"><span className="text-white">- </span><span className="text-[#9CDCFE]">action</span><span className="text-white">:</span> <span className="text-[#CE9178]">launch_app</span></div>
                  <div className="mb-1"><span className="text-[#9CDCFE]">package</span><span className="text-white">:</span> <span className="text-[#CE9178]">com.automobile.v3</span></div>
                  <div className="mb-1 mt-3"><span className="text-white">- </span><span className="text-[#9CDCFE]">action</span><span className="text-white">:</span> <span className="text-[#CE9178]">click</span></div>
                  <div className="mb-1"><span className="text-[#9CDCFE]">target</span><span className="text-white">:</span> <span className="text-[#CE9178]">id/btn_add_to_cart</span></div>
                  <div className="mb-1 mt-3"><span className="text-white">- </span><span className="text-[#9CDCFE]">action</span><span className="text-white">:</span> <span className="text-[#CE9178]">input</span></div>
                  <div className="mb-1"><span className="text-[#9CDCFE]">target</span><span className="text-white">:</span> <span className="text-[#CE9178]">id/input_promo_code</span></div>
                  <div className="mb-1"><span className="text-[#9CDCFE]">value</span><span className="text-white">:</span> <span className="text-[#CE9178]">"SAVE50"</span></div>
                  <div className="mb-1 mt-3"><span className="text-white">- </span><span className="text-[#9CDCFE]">action</span><span className="text-white">:</span> <span className="text-[#CE9178]">assert_visible</span></div>
                  <div className="mb-1"><span className="text-[#9CDCFE]">target</span><span className="text-white">:</span> <span className="text-[#CE9178]">text/Discount Applied</span></div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-inverse-surface border-t border-white/5 flex gap-2 shrink-0">
              <button className="flex-1 py-2.5 bg-white/5 text-white/70 rounded-xl text-[10px] font-bold font-headline hover:bg-white/10 transition-colors">Edit in Studio</button>
              <button className="flex-1 py-2.5 bg-primary text-white rounded-xl text-[10px] font-bold font-headline hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Download Single File
              </button>
            </div>
          </div>

          {/* Right Panel: System Prompt Management */}
          <div className="w-[30%] flex flex-col bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 bg-surface-container-high flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-container text-xl">settings</span>
                <span className="text-xs font-bold font-headline uppercase tracking-wider">System Prompts</span>
              </div>
              <button className="p-1 hover:bg-surface-container-highest rounded transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">add_circle</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-6">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Active Profile</h5>
                <div 
                  className="group p-4 bg-surface-container-lowest rounded-xl cursor-pointer border border-primary/20 hover:ring-2 hover:ring-primary/20 transition-all shadow-sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold font-headline text-primary">system_context.md</span>
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant line-clamp-3 leading-relaxed italic">"You are an expert test automation engineer. Generate clean, modular YAML scripts for mobile UI testing..."</p>
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Library</h5>
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest hover:bg-surface-container-low hover:border-primary/30 transition-all cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-xl group-hover:text-primary">description</span>
                      <span className="text-[11px] font-medium">legacy_v2_schema.txt</span>
                    </div>
                    <span className="text-[9px] text-on-surface-variant font-mono">1.8 KB</span>
                  </div>
                  <div 
                    className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest hover:bg-surface-container-low hover:border-primary/30 transition-all cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-xl group-hover:text-primary">description</span>
                      <span className="text-[11px] font-medium">ios_accessibility_id.md</span>
                    </div>
                    <span className="text-[9px] text-on-surface-variant font-mono">3.2 KB</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors group cursor-pointer bg-white/50">
                <span className="material-symbols-outlined text-primary/40 text-3xl group-hover:scale-110 transition-transform">cloud_upload</span>
                <p className="text-[10px] font-bold text-on-surface-variant text-center uppercase tracking-wide">Tải lên Prompt mới<br/><span className="opacity-50 font-normal lowercase">.txt, .md only</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Execution Terminal */}
        <div className="h-24 bg-inverse-surface rounded-2xl flex flex-col shadow-2xl relative overflow-hidden shrink-0 border border-white/5">
          <div className="px-4 py-2 bg-black/30 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]/40"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/40"></div>
                <div className="w-2 h-2 rounded-full bg-[#27C93F]/40"></div>
              </div>
              <span className="text-[9px] font-mono text-primary-fixed-dim uppercase tracking-widest font-bold">Live Execution Log</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[9px] font-mono text-on-primary-container/60">YAML_GEN_AGENT_ACTIVE</span>
            </div>
          </div>
          <div className="flex-1 p-3 font-mono text-[10px] leading-relaxed overflow-y-auto custom-scrollbar text-primary-fixed-dim/80">
            <div className="flex gap-2 mb-0.5"><span className="opacity-30">[14:45:12]</span> <span className="text-white">✅ checkout_process.yaml generated successfully.</span></div>
            <div className="flex gap-2 mb-0.5"><span className="opacity-30">[14:45:12]</span> <span className="text-secondary-fixed-dim">Linting: No syntax errors found (YAML 1.2).</span></div>
            <div className="flex gap-2"><span className="opacity-30">[14:45:13]</span> <span>Awaiting user action: Export or Edit.</span></div>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/5 via-transparent to-transparent"></div>
        </div>
      </div>
    </>
  );
};
