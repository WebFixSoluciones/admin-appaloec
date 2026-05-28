import React from 'react';
import { UserPlus, Users } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Gestión de Usuarios</h1>
        <div className="flex gap-4">
          <button className="btn-primary-sm flex items-center gap-2">
            <UserPlus size={18} />
            Añadir Usuario
          </button>
        </div>
      </div>
      <div className="empty-state">
        <Users size={48} className="text-slate-300 mb-4" />
        <h3 className="text-lg font-semibold text-slate-700 mb-1">Sin usuarios recientes</h3>
        <p className="text-slate-500 max-w-sm">TBD - Conectar con Firebase Auth/Firestore para visualizar la tabla.</p>
      </div>
    </div>
  );
}
