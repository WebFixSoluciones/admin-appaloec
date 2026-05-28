import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="page-title">Resumen General</h1>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3 className="metric-label">Usuarios Totales</h3>
          <p className="metric-value">1,245</p>
        </div>
        <div className="metric-card">
          <h3 className="metric-label">Suscripciones Activas</h3>
          <p className="metric-value highlight">342</p>
        </div>
        <div className="metric-card">
          <h3 className="metric-label">Ingresos (Mes)</h3>
          <p className="metric-value">$3,420</p>
        </div>
      </div>
    </div>
  );
}
