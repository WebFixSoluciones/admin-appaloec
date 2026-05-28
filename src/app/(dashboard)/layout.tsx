'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase/config';
import { signOut } from 'firebase/auth';
import AuthGuard from '../../components/AuthGuard';
import { toast } from 'sonner';
import { 
  LayoutDashboard, 
  Users, 
  Video, 
  Droplet, 
  Image as ImageIcon,
  LogOut,
  Menu,
  X
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Sesión cerrada correctamente');
      router.push('/login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      toast.error('Error al cerrar sesión');
    }
  };

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Usuarios', href: '/users', icon: Users },
    { name: 'Cursos', href: '/content/courses', icon: Video },
    { name: 'Jugos', href: '/content/juices', icon: Droplet },
    { name: 'Banners', href: '/marketing/banners', icon: ImageIcon },
  ];

  return (
    <AuthGuard>
      <div className="min-h-screen bg-white flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-ink-200 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'tranink-x-0' : '-tranink-x-full'} md:tranink-x-0 md:static`}>
          <div className="h-16 flex items-center justify-between px-6 border-b border-ink-200">
            <h2 className="text-xl font-bold text-ink-900">ALOEC Admin</h2>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-ink-500 hover:text-ink-900">
              <X size={20} />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${
                    isActive 
                      ? 'bg-ink-50 text-ink-900 font-bold' 
                      : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900 font-medium'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-ink-900' : 'text-ink-500'} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-ink-200">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-ink-600 hover:bg-ink-50 hover:text-red-600 font-medium transition-colors"
            >
              <LogOut size={20} className="text-ink-500 group-hover:text-red-600" />
              Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-screen overflow-hidden bg-white">
          {/* Topbar for mobile */}
          <header className="h-16 bg-white border-b border-ink-200 flex items-center px-4 md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-ink-600 hover:text-ink-900">
              <Menu size={24} />
            </button>
          </header>
          
          <div className="flex-1 overflow-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
