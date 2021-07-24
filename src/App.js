import './App.css';
import CurrentStatus from './components/CurrentStaus/CurrentStatus';
import UrgeWithPleasureComponent from './components/Timer/Timer';

function App() {
  return (
    <div className="Container">
      <h1>zenMode</h1>
      <small>Level up your productivity</small>
      <CurrentStatus/>
      <UrgeWithPleasureComponent/>
    </div>
  );
}

export default App;
