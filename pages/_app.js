// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import { AuthProvider } from '../auth';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
