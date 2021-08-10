import React from 'react';
import ReactDOM from 'react-dom';
import AudioControlsV2 from './AudioControlsV2';

const audioProps = [
  {
    id: 1,
    typeName: 'Volume',
    value: 7
  },
  {
    id: 2,
    typeName: 'Treble',
    value: 3
  },
  {
    id: 3,
    typeName: 'Mid',
    value: 2
  },
  {
    id: 4,
    typeName: 'Bass',
    value: 4
  }
]

ReactDOM.render(
  <React.StrictMode>
    <AudioControlsV2  audioProps={audioProps}/>
  </React.StrictMode>,
  document.getElementById('root')
);