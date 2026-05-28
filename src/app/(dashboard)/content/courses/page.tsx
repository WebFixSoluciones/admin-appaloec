import React from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Videocursos</h1>
        <div className="page-actions">
          <Link href="/content/lessons" className="btn-secondary">Cargar Lección</Link>
          <button className="btn-primary-sm">Nuevo Curso</button>
        </div>
      </div>
      <div className="empty-state">
        Lista de Cursos (TBD - Conectar con Firestore)
      </div>
    </div>
  );
}
