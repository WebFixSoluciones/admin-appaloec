'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase/config';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists() && userDoc.data()?.role === 'admin') {
        router.push('/');
      } else {
        await auth.signOut();
        setError('Acceso denegado. No tienes permisos de administrador.');
      }
    } catch (err: any) {
      console.error(err);
      setError('Credenciales inválidas o error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-ink-900 mb-2">ALOEC Admin</h1>
          <p className="text-ink-600">Inicia sesión en el panel de control</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-ink-900 mb-2">Correo electrónico</label>
            <input 
              type="email" 
              required 
              className="w-full p-3 bg-white border border-ink-300 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-colors text-ink-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              placeholder="admin@aloec.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink-900 mb-2">Contraseña</label>
            <input 
              type="password" 
              required 
              className="w-full p-3 bg-white border border-ink-300 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-colors text-ink-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-[#00df68] hover:bg-[#00c65c] text-white font-bold transition-colors duration-200 flex justify-center items-center gap-2 mt-4"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Continuar'}
          </button>
        </form>
      </div>
    </div>
  );
}
