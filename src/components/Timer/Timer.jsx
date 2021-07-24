import react from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const renderTime = ({ remainingTime }) => {
  
    return (
      <div className="timerInnerContent">
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  

const UrgeWithPleasureComponent = () => (
    <div>
    <CountdownCircleTimer
    isPlaying
        duration={10}
        colors={[
            ['#0c75b2', 0.33],
            ['#4a9ecf', 0.33],
            ['#9bcce8', 0.33]
        ]}
    >
        {renderTime}
    </CountdownCircleTimer>

    </div>
)

export default UrgeWithPleasureComponent