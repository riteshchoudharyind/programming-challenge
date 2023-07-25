// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import { AuthProvider } from '../auth';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
