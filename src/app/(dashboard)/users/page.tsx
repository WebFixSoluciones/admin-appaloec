import React from 'react';

export default function UsersPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Gestión de Usuarios</h1>
        <div className="page-actions">
          <button className="btn-primary-sm">Añadir Usuario</button>
        </div>
      </div>
      <div className="empty-state">
        Tabla de usuarios (TBD - Conectar con Firebase Auth/Firestore)
      </div>
    </div>
  );
}
