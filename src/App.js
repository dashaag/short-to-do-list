import Goodbye from './components/goodbye/goodbay';
import './App.css';
import { Welcome } from './components/welcome/welcome.js';
import { ColorredText } from './components/colorText/colorText';
function formatName(firstname, lastName) {
  return `${firstname} ${lastName}`;
}
function App() {
 
  
  return (
    <div className="App">
     <ColorredText/>
    </div>
  );
}

export default App;
