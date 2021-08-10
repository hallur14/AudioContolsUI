import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './AudioControlsV2.css';

function AudioControlsV2 ({ audioProps }) {
    const [audioData, setAudioData] = useState(audioProps);

    const IncrementSoundProperty = (propertyName) => {
        setAudioData([...audioData].map(audioProperty => {
            if(audioProperty.typeName === propertyName && audioProperty.value < 10){
                return {
                    ...audioProperty,
                    value: audioProperty.value + 1
                }
            }
            else return audioProperty;
        }));
    }

    const DecrementSoundProperty = (propertyName) => {
        setAudioData([...audioData].map(audioProperty => {
            if(audioProperty.typeName === propertyName && audioProperty.value > 0){
                console.log(audioProperty.typeName + ' ' + propertyName + ' ' + audioProperty.value);
                return {
                    ...audioProperty,
                    value: audioProperty.value - 1
                }
            }
            else return audioProperty;
        }));
    }


    return (
        <div className='audio-controls'>
            {audioData.map(audioProp => (
                <AudioControlStrip 
                    key={audioProp.id} 
                    value={audioProp.value} 
                    typeName={audioProp.typeName} 
                    incrementValue={() => IncrementSoundProperty(audioProp.typeName)}
                    decrementValue={() => DecrementSoundProperty(audioProp.typeName)} />
            ))}
        </div>
    );
}

AudioControlsV2.propTypes = {
    audioProps : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        value: PropTypes.number
    }))
};

function AudioControlStrip ({ ...props }) {
    return (
        <div className='audio-control-strip'>
            <DecrementButton onClick={props.decrementValue}/>
            <AudioPropInfo value={props.value} typeName={props.typeName}/>
            <IncrementButton onClick={props.incrementValue}/>
        </div>
    );
}

function DecrementButton ({ ...props }) {
    return (
        <div className='button-container'>
            <button onClick={props.onClick} className='audio-button'>-</button>
        </div>
    );

}

const IncrementButton = ({ ...props }) => (
    <div className='button-container'>
        <button onClick={props.onClick} className='audio-button'>+</button>
    </div>
);

// Show the name and current value.
const AudioPropInfo = ({ value, typeName }) => {
    return (
        <div className='audio-prop-info'>
            <div className='audio-prop-value'>{value}</div>
            <div className='audio-prop-name'>{typeName}</div>
        </div>
    );
}

AudioPropInfo.propTypes = {
    value: PropTypes.number.isRequired,
    typeName: PropTypes.string.isRequired
};

export default AudioControlsV2;