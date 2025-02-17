import { HelmetProvider } from 'react-helmet-async';
import AppNavigation from './navigation/app-navigation';
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <HelmetProvider>
      <ParallaxProvider>
        <AppNavigation />
      </ParallaxProvider>
    </HelmetProvider>
  )
}

export default App
