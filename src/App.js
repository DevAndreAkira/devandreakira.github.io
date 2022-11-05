import './App.css';
import Router from './routes'
// import ReactPlayer from 'react-player'

// import snow from '../src/assets/img/snow.mp4';
// import lua from '../src/assets/img/lua.mp4';

// import logo from './assets/img/mee.webp';
// import logoNatal from './assets/img/mee-natal.png';
// import logoBruxo from './assets/img/mee-bruxo.png';

function App() {

  const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  registerServiceWorker();

  return (
    <div className="App d-flex">
      <Router />
    </div>
  );
}

export default App;
