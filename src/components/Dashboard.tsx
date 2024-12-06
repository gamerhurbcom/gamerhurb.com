import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { motion } from 'framer-motion';
import {
  LogOut,
  Gamepad2,
  BookOpen,
  Newspaper,
  MessageSquare,
  Trophy,
  Users,
  Bell,
  Search,
  TrendingUp
} from 'lucide-react';

export const Dashboard = () => {
  const { user, signOut } = useAuthStore();
  const [activeTab, setActiveTab] = useState('inicio');
  const [newPost, setNewPost] = useState(''); // Estado para o texto da nova postagem
  const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar as postagens

  const notifications = [
    { id: 1, title: 'Novo tutorial de League of Legends disponível', time: '5min atrás' },
    { id: 2, title: 'Evento de CS2 começando em breve', time: '30min atrás' },
    { id: 3, title: 'Nova conquista desbloqueada!', time: '2h atrás' },
  ];

  const recentGames = [
    { id: 1, name: 'League of Legends', hours: '2.5', progress: 75 },
    { id: 2, name: 'Counter-Strike 2', hours: '1.8', progress: 60 },
    { id: 3, name: 'Valorant', hours: '3.2', progress: 90 },
  ];

  // Função para criar uma nova postagem
  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        user: user?.email?.split('@')[0],
        content: newPost,
        time: new Date().toLocaleTimeString(),
      };
      setPosts([post, ...posts]);
      setNewPost(''); // Limpar o campo após a postagem
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar Superior */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">GamerHurb</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-purple-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  3
                </span>
              </div>
              
              <button
                onClick={signOut}
                className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut size={20} />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho do Dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Olá, {user?.email?.split('@')[0]}!</h1>
          <p className="text-gray-400">Bem-vindo de volta ao seu hub gamer</p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar jogos, tutoriais ou outros gamers..."
            className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Formulário de Postagem */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
          <h2 className="text-xl font-bold mb-4">Compartilhe algo com a comunidade</h2>
          <textarea
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Escreva sua postagem..."
            rows={4}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button
            onClick={handleCreatePost}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Postar
          </button>
        </div>

        {/* Lista de Postagens */}
        <div className="space-y-8">
          {posts.length > 0 && (
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Postagens Recentes</h2>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-200">{post.user}</p>
                      <p className="text-sm text-gray-400">{post.time}</p>
                    </div>
                    <p className="text-gray-400 mt-2">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna da Esquerda */}
          <div className="lg:col-span-2 space-y-8">
            {/* Estatísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                { icon: <Trophy className="w-6 h-6" />, title: 'Conquistas', value: '27' },
                { icon: <Users className="w-6 h-6" />, title: 'Amigos Online', value: '12' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Nível', value: '42' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800"
                >
                  <div className="text-purple-500 mb-2">{stat.icon}</div>
                  <p className="text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Jogos Recentes */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Jogos Recentes</h2>
              <div className="space-y-4">
                {recentGames.map((game) => (
                  <div key={game.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{game.name}</h3>
                      <p className
                      <p className="text-sm text-gray-400">{game.hours}h jogadas</p>
                      </div>
                      <div className="w-32 bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${game.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Coluna da Direita */}
            <div className="space-y-8">
              {/* Notificações */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Notificações</h2>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="border-b border-gray-800 last:border-0 pb-4 last:pb-0"
                    >
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-gray-400">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Ações Rápidas */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Gamepad2 className="w-5 h-5" />, title: 'Jogar' },
                    { icon: <Users className="w-5 h-5" />, title: 'Amigos' },
                    { icon: <MessageSquare className="w-5 h-5" />, title: 'Chat' },
                    { icon: <Trophy className="w-5 h-5" />, title: 'Ranking' },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {action.icon}
                      <span>{action.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  