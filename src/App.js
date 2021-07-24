import './App.css';
import CurrentStatus from './components/CurrentStaus/CurrentStatus';
import UrgeWithPleasureComponent from './components/Timer/Timer';

function App() {
  return (
    <div className="Container">
      <h1 className='zenMode'>zenMode</h1>
      <p className='levelUp'>Level up your productivity</p>
      <CurrentStatus/>
      <UrgeWithPleasureComponent className='timerCircle' timerDuration='2'/>
    </div>
  );
}

export default App;
