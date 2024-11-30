






import React from 'react';
import type {PropsWithChildren} from 'react';
import {Provider} from 'mobx-react';

import Navigation from '../navigation/index';
import MainStore from '../../store/MainStore';



function App(): React.JSX.Element {
  return (
    <Provider {...MainStore}> 
    <Navigation />
    </Provider>
  );
}


export default App;
