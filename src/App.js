
import './App.css';
import ChartBox from './Components/chartbox/ChartBox';
import Dashboard from './Components/dashboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Taklist from './Components/taskList/Taklist';

function App() {
  return (
    <div className="App">
       <Nav/>
       <Dashboard/>
       <div className='join'>
      <Taklist/>
       <ChartBox/>
       </div>
    </div>
  );
}

export default App;
