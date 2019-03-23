import React from 'react';
import Foo from './components/Foo';
import Navbar from './components/UI/Navbar';

const App = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <Foo />
    </>
  );
};

export default App;
