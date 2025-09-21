import React from 'react';
import { FeatureCard } from './components/FeatureCard';
import './App.css';

function App() {
  const features = [
    { id: 'f1', title: 'Скорость', description: 'Наше приложение работает быстро' },
    { id: 'f2', title: 'Надежность', description: 'Гарантия качества' },
    { id: 'f3', title: 'Безопасность', description: 'Ваши данные под защитой' },
    { id: 'f4', title: 'Удобство', description: 'Простой и интуитивный интерфейс' },
  ];

  return (
    <div>
      <h1>Преимущества нашего продукта</h1>
      <div className="features-grid">
        {features.map(feature => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
