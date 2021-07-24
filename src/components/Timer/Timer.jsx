import './Timer.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const renderTime = ({ remainingTime }) => {
  
    return (
      <div className="timerInnerContent">
        <div className="value">{Math.ceil(remainingTime / 60)}</div>
        <div className="text">minutes</div>
        <div className="value">{remainingTime % 60}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  

const UrgeWithPleasureComponent = (props) => (
    <div>
        <CountdownCircleTimer
            isPlaying={false}
            duration={props.timerDuration * 60}
            colors={[
                ['#889773', 1]
            ]}
        >
            {renderTime}
        </CountdownCircleTimer>

    </div>
)

export default UrgeWithPleasureComponent