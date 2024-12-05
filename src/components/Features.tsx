import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Newspaper, MessageSquare, Gamepad2, Users, Shield } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Tutoriais de Jogos',
      description: 'Acesse tutoriais completos de gamers profissionais em diversos gêneros.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunidade',
      description: 'Conecte-se com gamers que compartilham dos mesmos interesses.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Recursos',
      description: 'Biblioteca extensa de guias, dicas e estratégias para jogos.'
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: 'Últimas Notícias',
      description: 'Fique por dentro das últimas novidades do mundo dos games.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Integração Discord',
      description: 'Integração perfeita com Discord para comunicação em tempo real.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ambiente Seguro',
      description: 'Comunidade moderada garantindo uma experiência positiva.'
    }
  ];

  return (
    <section id="features" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Eleve Sua Experiência Gaming
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra todos os recursos que fazem do GamerHurb o destino definitivo para gamers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <div className="text-purple-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};