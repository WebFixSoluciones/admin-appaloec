'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthGuard from '../../components/AuthGuard';
import { auth } from '../../lib/firebase/config';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <AuthGuard>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-brand">ALOEC</h2>
            <p className="sidebar-subtitle">Admin Panel</p>
          </div>
          <nav className="sidebar-nav">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Dashboard</Link>
            <Link href="/users" className={`nav-link ${pathname === '/users' ? 'active' : ''}`}>Usuarios</Link>
            <Link href="/content/juices" className={`nav-link ${pathname === '/content/juices' ? 'active' : ''}`}>Catálogo de Jugos</Link>
            <Link href="/content/courses" className={`nav-link ${pathname === '/content/courses' ? 'active' : ''}`}>Videocursos</Link>
            <Link href="/marketing/banners" className={`nav-link ${pathname === '/marketing/banners' ? 'active' : ''}`}>Banners</Link>
          </nav>
          <div className="sidebar-footer">
            <button onClick={handleLogout} className="btn-logout">Cerrar sesión</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header className="topbar">
            <h1 className="topbar-title">Panel de Control</h1>
          </header>
          <div className="content-area">
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
