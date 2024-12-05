import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { toast } from 'react-hot-toast';
import { LogIn, UserPlus, Loader2 } from 'lucide-react';

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
        toast.success('Bem-vindo de volta!');
      } else {
        if (formData.password !== formData.confirmPassword) {
          toast.error('As senhas não coincidem');
          return;
        }
        await signUp(formData.email, formData.password);
        toast.success('Conta criada com sucesso!');
      }
    } catch (error) {
      toast.error('Falha na autenticação');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-8 bg-black rounded-lg shadow-xl"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {isLogin ? 'Bem-vindo de Volta' : 'Junte-se ao GamerHurb'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              placeholder="Nome completo"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
          </>
        )}
        
        <input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
          required
        />
        
        <input
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
          required
        />
        
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirmar senha"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : isLogin ? (
            <>
              <LogIn size={20} />
              Entrar
            </>
          ) : (
            <>
              <UserPlus size={20} />
              Cadastrar
            </>
          )}
        </button>
      </form>

      <p className="mt-4 text-center text-gray-400">
        {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-purple-500 hover:text-purple-400"
        >
          {isLogin ? 'Cadastre-se' : 'Entre'}
        </button>
      </p>
    </motion.div>
  );
};