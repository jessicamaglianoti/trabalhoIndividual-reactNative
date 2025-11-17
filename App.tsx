// App.tsx
import React from 'react';
// IMPORTAÇÃO CORRETA: Caminho direto, pois LoginScreen.tsx está na mesma pasta
import LoginScreen from './LoginScreen'; 
import TelaInstagram from './TelaInstagram';

export default function App() {
  return (
    // Renderiza a tela de login
    //<LoginScreen />
    <TelaInstagram />
  );
}