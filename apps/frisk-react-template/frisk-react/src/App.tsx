import { Provider } from 'react-redux';
import { VideoProvider } from './modals/VideoContext';
import AppNavigation from './navigation/app-navigation';
import { ParallaxProvider } from "react-scroll-parallax";
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <VideoProvider>
          <AppNavigation />
        </VideoProvider>
      </ParallaxProvider>
    </Provider>
  )
}

export default App
