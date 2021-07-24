import './ModeContainer.css'
import ModeButton from '../ModeButton/ModeButton'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

function ModeContainer(props) {
    
    const dispatch = useDispatch()

    const currentMode = useSelector(state => state.currentMode)
    const isActive = useSelector(state => state.isActive)

    function onModeClickHandler(mode) {
        
        if (currentMode === mode.name) {
            dispatch({type: 'SET_ACTIVE_FLAG', value: !isActive})
        } else {
            dispatch({type: 'SET_CURR_MODE', newMode: mode.name})
            dispatch({type: 'SET_ACTIVE_FLAG', value: true})
        }        
    }
    
    return (
        <div className='mode-buttons-row'>
            {
                props.possibleModes.map((mode) =>
                    <ModeButton
                    onClick={onModeClickHandler}
                    key={mode.name}
                    mode={mode}/>
                )
            }
        </div>
    )
}

export default ModeContainer