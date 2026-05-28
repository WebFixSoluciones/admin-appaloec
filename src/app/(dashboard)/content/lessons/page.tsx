'use client';

import React, { useState } from 'react';

export default function VideoUploadPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoSource, setVideoSource] = useState<'url' | 'upload'>('url');
  const [videoUrl, setVideoUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    // Simular integración con Firestore y guardado de URL
    setTimeout(() => {
      alert('Video guardado correctamente en la base de datos (Vimeo/CDN)');
      setIsUploading(false);
      setTitle('');
      setDescription('');
      setVideoUrl('');
    }, 1500);
  };

  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">Cargar Nueva Lección / Video</h1>
      
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-group">
          <label className="form-label">Título de la Lección</label>
          <input 
            type="text" 
            required
            className="form-input"
            placeholder="Ej: Introducción a los Jugos Verdes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Descripción</label>
          <textarea 
            rows={4}
            className="form-input"
            placeholder="Resumen del contenido de este video..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Fuente del Video</label>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="source" 
                checked={videoSource === 'url'} 
                onChange={() => setVideoSource('url')}
              />
              <span style={{ color: 'var(--color-text-main)', fontSize: '14px' }}>URL Externa (Vimeo / Bunny Stream)</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="source" 
                checked={videoSource === 'upload'} 
                onChange={() => setVideoSource('upload')}
              />
              <span style={{ color: 'var(--color-text-main)', fontSize: '14px' }}>Subida Directa (No recomendado)</span>
            </label>
          </div>

          {videoSource === 'url' ? (
            <input 
              type="url" 
              required
              className="form-input"
              placeholder="https://vimeo.com/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          ) : (
            <div style={{ border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: '8px' }}>Haz clic o arrastra un archivo de video aquí (MP4, MOV)</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>Tamaño máximo recomendado: 500MB</div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid var(--color-border)', marginTop: '24px' }}>
          <button 
            type="submit" 
            disabled={isUploading}
            className="btn-primary"
            style={{ width: 'auto' }}
          >
            {isUploading ? 'Guardando...' : 'Guardar Lección'}
          </button>
        </div>
      </form>
    </div>
  );
}
