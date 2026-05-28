import React from 'react';
import { Plus, Droplet } from 'lucide-react';

export default function JuicesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Catálogo de Jugos</h1>
        <div className="flex gap-4">
          <button className="btn-primary-sm flex items-center gap-2">
            <Plus size={18} />
            Añadir Jugo
          </button>
        </div>
      </div>
      <div className="empty-state">
        <Droplet size={48} className="text-slate-300 mb-4" />
        <h3 className="text-lg font-semibold text-slate-700 mb-1">El catálogo está vacío</h3>
        <p className="text-slate-500 max-w-sm">TBD - Conectar con Firestore para visualizar las recetas de jugos verdes.</p>
      </div>
    </div>
  );
}
