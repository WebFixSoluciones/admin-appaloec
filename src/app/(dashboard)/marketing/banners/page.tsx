import React from 'react';

export default function BannersPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Banners Promocionales</h1>
        <div className="page-actions">
          <button className="btn-primary-sm">Subir Banner</button>
        </div>
      </div>
      <div className="empty-state">
        Gestión de Banners (TBD - Conectar con Firebase Storage)
      </div>
    </div>
  );
}
