import { NavigationContainer } from '@react-navigation/native';
import database from './src/services/database';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RouteStack } from './src/stacks/RouteStack';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toast';

export default function App() {
  useEffect(() => {
    // Função assíncrona para criar e iniciar o banco de dados
    const initializeDatabase = async () => {
      try {
        await database.createDatabase();
        console.log('Banco de dados criado e inicializado com sucesso.');
      } catch (error) {
        console.error('Erro ao criar e inicializar o banco de dados:', error);
      }
    };

    initializeDatabase();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RouteStack />
          <Toast 
            config={toastConfig}
            visibilityTime={6000}
          />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}