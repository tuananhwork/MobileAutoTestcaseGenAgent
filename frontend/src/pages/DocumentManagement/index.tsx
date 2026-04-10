import React from 'react';
import { TopBar } from '@/components/layout/TopBar';

export const DocumentManagement: React.FC = () => {
  return (
    <>
      <TopBar />
      <div className="pt-20 px-6 pb-6 h-screen flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-extrabold text-on-surface font-headline tracking-tight">Quản lý tài liệu</h2>
            <p className="text-sm text-on-surface-variant mt-1">Cơ sở tri thức cho các tác nhân AI phân tích hệ thống.</p>
          </div>
        </div>

        <div className="flex-1 flex gap-6 overflow-hidden min-h-0">
          {/* Left: Folder Tree & Navigation */}
          <div className="w-[30%] flex flex-col gap-6 overflow-hidden">
            <section className="bg-surface-container-low rounded-2xl p-6 border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
              </div>
              <h3 className="font-headline font-bold text-sm mb-1">Tải tài liệu mới</h3>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-wide mb-4">PDF, DOCX, PNG hoặc TXT</p>
              <button className="bg-surface-container-highest px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                Browse Files
              </button>
            </section>

            <section className="flex-1 bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-4 shrink-0">
                <h3 className="text-[10px] text-on-surface-variant font-label tracking-widest uppercase font-bold">Thư mục dự án</h3>
                <button className="text-primary hover:bg-primary-fixed p-1 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-lg">create_new_folder</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl shadow-sm border border-primary/20 ring-1 ring-primary/10">
                  <span className="material-symbols-outlined text-primary">folder_open</span>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-bold text-primary truncate">Project Alpha</p>
                    <p className="text-[9px] text-primary/60 uppercase">12 Files • 4.5 MB</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-sm">chevron_right</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container-high rounded-xl transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">folder</span>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-medium truncate">Requirement Specs</p>
                    <p className="text-[9px] text-on-surface-variant uppercase">8 Files • 2.1 MB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container-high rounded-xl transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">folder</span>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-medium truncate">Design Assets</p>
                    <p className="text-[9px] text-on-surface-variant uppercase">15 Files • 8.2 MB</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Content Panels */}
          <div className="flex-1 flex flex-col gap-6 overflow-hidden">
            <section className="h-[45%] bg-surface-container-low rounded-2xl shadow-sm overflow-hidden border border-outline-variant/10 flex flex-col">
              <div className="px-5 py-4 bg-surface-container flex items-center justify-between shrink-0 border-b border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <h2 className="font-headline font-bold text-sm uppercase tracking-wider">Danh sách tài liệu</h2>
                  <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Project Alpha</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-lg hover:bg-surface-container-highest transition-colors" title="Filter">
                    <span className="material-symbols-outlined text-on-surface-variant text-lg">filter_list</span>
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-surface-container-highest transition-colors" title="Grid View">
                    <span className="material-symbols-outlined text-on-surface-variant text-lg">grid_view</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[9px] text-on-surface-variant font-label tracking-widest uppercase bg-surface-container/50 sticky top-0 z-10">
                      <th className="px-6 py-3 font-bold">Tên tệp</th>
                      <th className="px-6 py-3 font-bold">Loại</th>
                      <th className="px-6 py-3 font-bold">Ngày tạo</th>
                      <th className="px-6 py-3 font-bold">Trạng thái</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5 text-xs">
                    <tr className="hover:bg-primary/5 transition-colors group cursor-pointer bg-primary/5">
                      <td className="px-6 py-3 font-medium flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-500 text-lg">picture_as_pdf</span>
                        Product_Spec_v1.pdf
                      </td>
                      <td className="px-6 py-3 text-on-surface-variant">PDF Document</td>
                      <td className="px-6 py-3 text-on-surface-variant">Oct 24, 2023</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase">Ready</span>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-surface-container transition-all">
                          <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
                      <td className="px-6 py-3 font-medium flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-500 text-lg">description</span>
                        User_Flow_v2.docx
                      </td>
                      <td className="px-6 py-3 text-on-surface-variant">Word Doc</td>
                      <td className="px-6 py-3 text-on-surface-variant">Oct 23, 2023</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant uppercase">Processing</span>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-surface-container transition-all">
                          <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
                      <td className="px-6 py-3 font-medium flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-600 text-lg">image</span>
                        System_Architecture.png
                      </td>
                      <td className="px-6 py-3 text-on-surface-variant">PNG Image</td>
                      <td className="px-6 py-3 text-on-surface-variant">Oct 20, 2023</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase">Ready</span>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-surface-container transition-all">
                          <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="flex-1 bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10 flex flex-col relative">
              <div className="px-5 py-3 bg-surface-container flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">visibility</span>
                  <h3 className="font-headline font-bold text-sm uppercase tracking-wider">Bản xem trước tài liệu</h3>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-lg bg-surface-container-lowest shadow-sm hover:scale-105 transition-transform" title="Export">
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                  <button className="p-1.5 rounded-lg bg-surface-container-lowest shadow-sm hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-sm">open_in_full</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-white m-4 rounded-xl shadow-inner overflow-hidden flex flex-col z-10 border border-outline-variant/5">
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                  <div className="max-w-3xl mx-auto space-y-6">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-outline-variant/10">
                      <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-500 text-3xl">picture_as_pdf</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-base">Product_Spec_v1.pdf</h4>
                        <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">PDF Document • 1.2 MB</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                      <h1 className="text-xl font-extrabold text-on-surface font-headline">1. Introduction</h1>
                      <p>This document outlines the technical specifications for Project Alpha. The goal is to build a robust system architecture that supports high scalability and modular development.</p>
                      <h2 className="text-lg font-bold text-on-surface mt-6 font-headline">2. Business Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Multi-tenant support with data isolation.</li>
                        <li>Real-time data synchronization across nodes.</li>
                        <li>Automated testing pipeline for YAML schema validation.</li>
                      </ul>
                      <div className="aspect-video w-full bg-surface-container-low rounded-xl relative overflow-hidden mt-8 border border-outline-variant/10">
                        <img alt="Document illustration" className="w-full h-full object-cover opacity-20 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPrk1hOr0aMulKhmGt_aUOjfdTf-r19LJ9-lhWmGZpt0Y8DwMmlcoHHbeDHNj9L_xuidY5Y9S5H9Ojo042ZuM7wi24yvUzFQLVPp5G9nyafqLm9iIuM3028WWXm5vS6WUwJPjJvZ3usq0UzmRNaVp5gKnfSLMUkmFuuRReQ_QKMqKlSbome1IzWiczWH2wbLeS_k6zBBg_EPeClvpaYEDX7BjiBS4ZBenJnZTiRXpEBYIg7JHm5XPZnTz3zd3L3kVimm7YSvOsmvs" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm border border-outline-variant/20 shadow-sm font-bold">PDF Content Visualized</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
