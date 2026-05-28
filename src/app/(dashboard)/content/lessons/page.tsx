'use client';

import React, { useState } from 'react';
import { UploadCloud, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function VideoUploadPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoSource, setVideoSource] = useState<'url' | 'upload'>('url');
  const [videoUrl, setVideoUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      toast.error('El título es obligatorio');
      return;
    }
    if (videoSource === 'url' && !videoUrl) {
      toast.error('La URL del video es obligatoria');
      return;
    }

    setIsUploading(true);
    const toastId = toast.loading('Guardando lección...');

    setTimeout(() => {
      toast.success('Lección guardada correctamente', { id: toastId });
      setIsUploading(false);
      setTitle('');
      setDescription('');
      setVideoUrl('');
    }, 1500);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink-900 tracking-tight">Cargar Nueva Lección / Video</h1>
        <p className="text-ink-500 mt-2">Agrega contenido a tu catálogo de cursos de manera rápida y sencilla.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="premium-card p-8">
        <div className="space-y-6">
          <div>
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

          <div>
            <label className="form-label">Descripción</label>
            <textarea 
              rows={4}
              className="form-input resize-none"
              placeholder="Resumen del contenido de este video..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Fuente del Video</label>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <label className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${videoSource === 'url' ? 'border-primary-500 bg-primary-50/50' : 'border-ink-200 hover:border-primary-200 bg-ink-50'}`}>
                <input 
                  type="radio" 
                  name="source" 
                  className="hidden"
                  checked={videoSource === 'url'} 
                  onChange={() => setVideoSource('url')}
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${videoSource === 'url' ? 'border-primary-500' : 'border-ink-300'}`}>
                  {videoSource === 'url' && <div className="w-2.5 h-2.5 bg-primary-500 rounded-full" />}
                </div>
                <LinkIcon className={videoSource === 'url' ? 'text-primary-500' : 'text-ink-400'} size={20} />
                <div>
                  <div className="font-semibold text-ink-700">URL Externa</div>
                  <div className="text-xs text-ink-500">Vimeo / Bunny Stream</div>
                </div>
              </label>

              <label className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${videoSource === 'upload' ? 'border-primary-500 bg-primary-50/50' : 'border-ink-200 hover:border-primary-200 bg-ink-50'}`}>
                <input 
                  type="radio" 
                  name="source" 
                  className="hidden"
                  checked={videoSource === 'upload'} 
                  onChange={() => setVideoSource('upload')}
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${videoSource === 'upload' ? 'border-primary-500' : 'border-ink-300'}`}>
                  {videoSource === 'upload' && <div className="w-2.5 h-2.5 bg-primary-500 rounded-full" />}
                </div>
                <UploadCloud className={videoSource === 'upload' ? 'text-primary-500' : 'text-ink-400'} size={20} />
                <div>
                  <div className="font-semibold text-ink-700">Subida Directa</div>
                  <div className="text-xs text-ink-500">No recomendado</div>
                </div>
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
              <div className="border-2 border-dashed border-ink-300 rounded-xl p-10 text-center hover:bg-ink-50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-ink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors">
                  <UploadCloud size={32} className="text-ink-400 group-hover:text-primary-500" />
                </div>
                <div className="text-ink-700 font-medium mb-1">Haz clic o arrastra un archivo de video aquí (MP4, MOV)</div>
                <div className="text-sm text-ink-500">Tamaño máximo recomendado: 500MB</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-ink-100 mt-8">
          <button 
            type="submit" 
            disabled={isUploading}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all ${
              isUploading ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600 shadow-liquid transform hover:-tranink-y-0.5'
            }`}
          >
            <CheckCircle2 size={20} />
            {isUploading ? 'Guardando...' : 'Guardar Lección'}
          </button>
        </div>
      </form>
    </div>
  );
}
