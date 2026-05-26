import React from 'react';
import Colorbox from './components/Colorbox';
import { ColorProvider } from './contexts/colors';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <Colorbox/>
      </div>
    </ColorProvider>
  )
}

export default App;