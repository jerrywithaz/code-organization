import React from 'react';
import Button from './components/Button';
import ConfirmButton from './components/ConfirmButton';

function App() {
  return (
    <React.Fragment>
      <Button>My Button</Button>
      <ConfirmButton confirmed={true}>My Confirm Button</ConfirmButton>
    </React.Fragment>
  );
}

export default App;
