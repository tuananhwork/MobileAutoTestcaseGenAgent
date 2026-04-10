import React from 'react';

interface TopBarProps {
  userName?: string;
  userRole?: string;
  avatarUrl?: string;
  searchPlaceholder?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  userName = 'Admin Console',
  userRole = 'v1.2.4',
  avatarUrl = 'https://i.pravatar.cc/150?img=11',
  searchPlaceholder = 'Search...',
}) => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 z-40 bg-[#F8F9FA]/80 backdrop-blur-xl flex justify-between items-center px-8 border-none shadow-sm">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-xl text-sm focus:ring-1 focus:ring-primary/30 outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-outline-variant/10 pr-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold font-headline leading-none">{userName}</p>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest leading-none mt-1">
              {userRole}
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
