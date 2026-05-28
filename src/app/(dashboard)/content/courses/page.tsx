import React from 'react';
import Link from 'next/link';
import { Plus, Video, Film } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Videocursos</h1>
        <div className="flex gap-4">
          <Link href="/content/lessons" className="btn-secondary flex items-center gap-2">
            <Video size={18} />
            Cargar Lección
          </Link>
          <button className="btn-primary-sm flex items-center gap-2">
            <Plus size={18} />
            Nuevo Curso
          </button>
        </div>
      </div>
      <div className="empty-state">
        <Film size={48} className="text-ink-300 mb-4" />
        <h3 className="text-lg font-semibold text-ink-700 mb-1">Aún no hay cursos</h3>
        <p className="text-ink-500 max-w-sm">TBD - Conectar con Firestore para gestionar y visualizar tu catálogo de cursos.</p>
      </div>
    </div>
  );
}
