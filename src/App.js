import './App.css';
import CurrentStatus from './components/CurrentStaus/CurrentStatus';
import UrgeWithPleasureComponent from './components/Timer/Timer';
import {useSelector} from 'react-redux'

function App() {
  
  const currentMode = useSelector(state => state.currentMode)
  const possibleModes = useSelector(state => state.possibleModes)
  const isActive = useSelector(state => state.isActive)
  const timerMinutesDuration = useSelector(
    state => state.possibleModes.find(mode => mode.name === currentMode).time 
  )

  return (
    <div className="Container">
      <h1 className='zenMode'>zenMode</h1>
      <p className='levelUp'>Level Up Your Productivity.</p>
      <CurrentStatus value={currentMode}/>
      <UrgeWithPleasureComponent className='timerCircle' timerDuration={timerMinutesDuration}/>
    </div>
  );
}

export default App;
