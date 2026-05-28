import React from 'react';

export default function JuicesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Catálogo de Jugos</h1>
        <div className="page-actions">
          <button className="btn-primary-sm">Añadir Jugo</button>
        </div>
      </div>
      <div className="empty-state">
        Grid de Jugos (TBD - Conectar con Firestore)
      </div>
    </div>
  );
}
