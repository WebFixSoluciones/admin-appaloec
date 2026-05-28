import React from 'react';
import { Users, Crown, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Resumen General</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="premium-card p-6 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Users size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-slate-500 font-medium mb-1">Usuarios Totales</h3>
            <p className="text-4xl font-bold text-slate-800">1,245</p>
          </div>
        </div>

        <div className="premium-card p-6 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary-50 text-primary-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Crown size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-slate-500 font-medium mb-1">Suscripciones Activas</h3>
            <p className="text-4xl font-bold text-primary-600">342</p>
          </div>
        </div>

        <div className="premium-card p-6 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <DollarSign size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-slate-500 font-medium mb-1">Ingresos (Mes)</h3>
            <p className="text-4xl font-bold text-slate-800">$3,420</p>
          </div>
        </div>
      </div>
    </div>
  );
}
