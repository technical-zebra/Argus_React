import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import ArgusHeader from './header'
import ArgusFooter from './footer'
import Homepage from './home'

function App() {
  return (
    <div className="App">
      <ArgusHeader />
      <Homepage />
      <ArgusFooter />
    </div>
  );
}

export default App;
