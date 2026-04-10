import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const MainLayout: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-hidden min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Outlet />
      </div>
    </div>
  );
};
