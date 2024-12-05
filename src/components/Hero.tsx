import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Trophy, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 animate-gradient"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Bem-vindo ao{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              GamerHurb
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Conecte-se com outros gamers, aprenda com profissionais e eleve seu nível
            em nossa comunidade gamer futurista.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/auth"
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Gamepad2 size={20} />
              Participar Agora
            </Link>
            <a
              href="#features"
              className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Users className="w-8 h-8" />, title: '+10 Mil Membros', description: 'Comunidade ativa de gamers' },
            { icon: <Trophy className="w-8 h-8" />, title: 'Tutoriais Pro', description: 'Aprenda com os melhores' },
            { icon: <Sparkles className="w-8 h-8" />, title: 'Eventos Diários', description: 'Mantenha-se conectado' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <div className="text-purple-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};