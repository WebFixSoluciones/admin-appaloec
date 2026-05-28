import React from 'react';
import { ImagePlus, ImageIcon } from 'lucide-react';

export default function BannersPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Banners Promocionales</h1>
        <div className="flex gap-4">
          <button className="btn-primary-sm flex items-center gap-2">
            <ImagePlus size={18} />
            Subir Banner
          </button>
        </div>
      </div>
      <div className="empty-state">
        <ImageIcon size={48} className="text-ink-300 mb-4" />
        <h3 className="text-lg font-semibold text-ink-700 mb-1">Sin Banners</h3>
        <p className="text-ink-500 max-w-sm">TBD - Conectar con Firebase Storage para la gestión de banners.</p>
      </div>
    </div>
  );
}
