import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';

export const FlowAnalysis: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TopBar userName="The Digital Curator" userRole="Admin Console" />
      
      {/* Floating Preview Window */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-on-surface/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-surface-container-lowest w-full max-w-2xl h-[70vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
                <div>
                  <h4 className="text-sm font-bold font-headline">system_extraction_logic.md</h4>
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
              <p className="text-primary font-bold mb-4"># Role Definition</p>
              <p>You are a highly analytical software architect. Your task is to ingest technical documentation (PRDs, RFCs) and extract precise user flows, system transitions, and business logic constraints.</p>
              <p className="mt-4 text-primary font-bold mb-4"># Guidelines</p>
              <ul className="list-disc ml-4 space-y-2">
                <li>Prioritize edge cases defined in conditional logic blocks.</li>
                <li>Map all "Trigger -&gt; Action" sequences.</li>
                <li>Output structured JSON for test suite integration.</li>
              </ul>
            </div>
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/20 flex justify-end gap-3">
              <button 
                className="px-4 py-2 text-xs font-bold font-headline text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button className="px-4 py-2 text-xs font-bold font-headline bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                Apply to Agent
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-20 px-6 pb-6 h-screen flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-extrabold text-on-surface font-headline tracking-tight">Phân tích luồng người dùng</h2>
            <p className="text-sm text-on-surface-variant mt-1">Agent 1: Extraction of logic from technical specifications.</p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Live Analysis
            </div>
          </div>
        </div>

        <div className="flex-1 flex gap-6 overflow-hidden min-h-0">
          {/* Left Panel: PDF Document Preview */}
          <div className="w-[35%] flex flex-col bg-surface-container-low rounded-xl overflow-hidden relative border border-outline-variant/10">
            <div className="px-5 py-4 bg-surface-container flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">description</span>
                <span className="text-xs font-semibold font-headline truncate max-w-[150px]">PRD_Checkout_V2.pdf</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-surface-container-highest rounded transition-colors"><span className="material-symbols-outlined text-sm">zoom_in</span></button>
                <button className="p-1 hover:bg-surface-container-highest rounded transition-colors"><span className="material-symbols-outlined text-sm">zoom_out</span></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-white m-3 rounded-lg shadow-inner">
              <div className="space-y-6">
                <h1 className="text-xl font-bold border-b border-outline-variant/20 pb-4">Product Requirement Document: Checkout Flow</h1>
                <section className="space-y-3">
                  <h3 className="text-md font-semibold text-primary">1. Overview</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">The checkout flow must support both guest and registered user types. The primary goal is to minimize friction while ensuring all legal and tax data is collected per regional requirements.</p>
                </section>
                <section className="space-y-3">
                  <h3 className="text-md font-semibold text-primary">2. User Action Sequence</h3>
                  <div className="bg-surface-container-low p-3 rounded-lg border-l-4 border-primary/20">
                    <p className="text-[11px] italic font-mono text-on-surface-variant">
                      [Trigger: Click 'Add to Cart'] -&gt; [System: Validate Inventory] -&gt; [Action: View Mini-Cart]
                    </p>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">If the user is not logged in, show the 'Login/Register/Guest' modal.</p>
                </section>
              </div>
            </div>
          </div>

          {/* Center Panel: Structured Results */}
          <div className="w-[35%] flex flex-col bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 bg-surface-container-high flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">data_object</span>
                <span className="text-xs font-semibold font-headline">Extracted User Flows</span>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Conf: 98.4%</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3">
              <div className="group p-3 rounded-lg hover:bg-surface-container-low transition-colors border-l-2 border-transparent hover:border-primary">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[11px] font-bold font-headline text-primary">Standard Checkout (Guest)</h4>
                  <span className="text-[8px] px-1.5 py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-label">LINEAR</span>
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[10px] text-on-surface-variant">
                    <span className="w-4 h-4 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold text-[9px]">1</span>
                    <span>PDP Navigation</span>
                  </li>
                  <li className="flex items-center gap-2 text-[10px] text-on-surface-variant">
                    <span className="w-4 h-4 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold text-[9px]">2</span>
                    <span>Add to Cart</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low/30 border-l-2 border-primary">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[11px] font-bold font-headline text-primary">High-Value Order</h4>
                  <span className="text-[8px] px-1.5 py-0.5 bg-error-container text-on-error-container rounded font-label">COND</span>
                </div>
                <div className="text-[9px] font-mono bg-inverse-surface text-primary-fixed-dim p-2 rounded-md overflow-x-auto">
                  <span className="text-secondary-fixed-dim">IF</span> order &gt; 500:<br/>
                  &nbsp;&nbsp;<span className="text-tertiary-fixed-dim">TRIGGER</span> verify
                </div>
              </div>
            </div>
            <div className="p-3 bg-surface-container flex gap-2 shrink-0">
              <button className="flex-1 py-2 bg-surface-container-highest text-on-surface rounded-lg text-[10px] font-bold font-headline hover:bg-surface-dim transition-colors">JSON</button>
              <button className="flex-1 py-2 bg-primary text-white rounded-lg text-[10px] font-bold font-headline hover:opacity-90 transition-opacity">Push Suite</button>
            </div>
          </div>

          {/* Right Panel: System Prompt Config */}
          <div className="w-[30%] flex flex-col bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 bg-surface-container-high flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-container text-xl">settings_suggest</span>
                <span className="text-xs font-semibold font-headline">System Prompts</span>
              </div>
              <button className="p-1 hover:bg-surface-container-highest rounded transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">add_circle</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-4">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Active Profile</h5>
                <div 
                  className="group p-3 bg-surface-container-highest rounded-xl cursor-pointer hover:ring-1 hover:ring-primary/40 transition-all border border-transparent hover:border-primary/20"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold font-headline text-primary">extraction_v4.md</span>
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant line-clamp-2 leading-relaxed italic">"You are a highly analytical software architect. Your task is to ingest technical..."</p>
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Library</h5>
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between p-2.5 rounded-lg border border-outline-variant/20 bg-surface-container-lowest hover:bg-surface hover:border-primary/30 transition-all cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-base group-hover:text-primary">description</span>
                      <span className="text-[11px] font-medium">summarizer.txt</span>
                    </div>
                    <span className="text-[9px] text-on-surface-variant">2.4 KB</span>
                  </div>
                  <div 
                    className="flex items-center justify-between p-2.5 rounded-lg border border-outline-variant/20 bg-surface-container-lowest hover:bg-surface hover:border-primary/30 transition-all cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-base group-hover:text-primary">description</span>
                      <span className="text-[11px] font-medium">test_gen_v2.md</span>
                    </div>
                    <span className="text-[9px] text-on-surface-variant">4.1 KB</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto border-2 border-dashed border-outline-variant/30 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-on-surface-variant opacity-40 text-2xl group-hover:scale-110 transition-transform">cloud_upload</span>
                <p className="text-[10px] font-medium text-on-surface-variant text-center">Drag or click to upload<br/><span className="opacity-50 font-normal">.txt, .md only</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal: Agent Live Execution */}
        <div className="h-32 bg-inverse-surface rounded-xl flex flex-col shadow-2xl relative overflow-hidden shrink-0">
          <div className="px-4 py-2 bg-black/30 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
              </div>
              <span className="text-[10px] font-mono text-primary-fixed-dim uppercase tracking-widest font-bold">Live Execution Log</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-mono text-on-primary-container/60">AGENT_01_ACTIVE</span>
            </div>
          </div>
          <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed overflow-y-auto custom-scrollbar text-primary-fixed-dim">
            <div className="flex gap-3 mb-1">
              <span className="text-on-surface-variant opacity-40">[14:22:01]</span>
              <span className="text-secondary-fixed-dim">🧠 Thinking...</span>
              <span>Applying system prompt: extraction_v4.md</span>
            </div>
            <div className="flex gap-3 mb-1">
              <span className="text-on-surface-variant opacity-40">[14:22:03]</span>
              <span className="text-tertiary-fixed-dim">🛠 Tool: PDF Extractor</span>
              <span>Mapped semantic token: [Action: Proceed to Checkout]</span>
            </div>
            <div className="flex gap-3">
              <span className="text-on-surface-variant opacity-40">[14:22:05]</span>
              <span className="text-white">✅ Found 8 flows</span>
              <span className="text-on-surface-variant opacity-60">(Confidence threshold met: 0.95)</span>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/5 via-transparent to-transparent"></div>
        </div>
      </div>
    </>
  );
};
