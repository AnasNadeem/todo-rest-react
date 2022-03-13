import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import MainSec from './Main/MainSec';
import Navbar from './Navbar/Navbar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      {/* <MainSec/> */}
    </ChakraProvider>
  );
}

export default App;
