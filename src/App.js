import ResponsiveAppBar from './components/Appbar/Appbar';
import BasicGrid from './components/Homehero/Home';
import RowAndColumnSpacing from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/>
    <BasicGrid/>
    <RowAndColumnSpacing/>
    </div>
  );
}

export default App;
