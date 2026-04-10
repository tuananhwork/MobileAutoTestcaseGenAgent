import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: 'Quản lý tài liệu',
    path: '/',
    icon: 'description',
  },
  {
    title: 'Phân tích luồng',
    path: '/flow-analysis',
    icon: 'account_tree',
  },
  {
    title: 'Kịch bản thử nghiệm',
    path: '/test-scenarios',
    icon: 'biotech',
  },
  {
    title: 'Xuất kịch bản YAML',
    path: '/yaml-export',
    icon: 'terminal',
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-[#F3F4F5] dark:bg-slate-900 flex flex-col border-none z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm">smart_toy</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#191C1D] dark:text-slate-100 tracking-tight font-headline">
              Architect Intelligence
            </h1>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest opacity-60">
              v1.2.4
            </p>
          </div>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-3 rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-[#E1E3E4] dark:bg-slate-800 text-[#3525CD] dark:text-[#C3C0FF] font-bold scale-[0.99] relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 before:bg-[#3525CD] before:rounded-r-full"
                    : "text-[#191C1D] dark:text-slate-400 opacity-70 hover:bg-[#EDEEEF] dark:hover:bg-slate-800 font-medium"
                )
              }
            >
              <span className={cn("material-symbols-outlined mr-3 text-xl", "group-hover:text-primary")}>
                {item.icon}
              </span>
              <span className="text-[0.6875rem] tracking-wider uppercase font-label">
                {item.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-6">
        <button className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-headline font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base">play_arrow</span>
          Run Agent
        </button>
      </div>
    </aside>
  );
};
