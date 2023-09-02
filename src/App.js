import logo from './logo.svg';
import './App.css';
import { Flex } from "@aws-amplify/ui-react";
import { PetCardCollection } from './ui-components';

function App() {
  return (
    <div className="App">
      <Flex justifyContent="center">
        <PetCardCollection />
      </Flex>
    </div>
  );
}

export default App;
