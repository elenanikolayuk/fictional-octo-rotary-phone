import React from 'react';
import { ThemeProvider } from './components/providers/ThemeProvider';
import Todo from './components/Todo/Todo';
import Loyout from './components/Loyout';

const App = () => (

<ThemeProvider>
  <Loyout> 
    <Todo/>
  </Loyout>
</ThemeProvider>

)

export default App;
