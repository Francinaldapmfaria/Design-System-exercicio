import { ChakraProvider, Flex } from '@chakra-ui/react' 
import { useState } from 'react';
import Card from './components/Card'
import frutas from './assets/fruta.json'

function App() {

  // const [frutas, setFrutas] = useState(frutas)
  

  return (

    <ChakraProvider>
      
        {frutas.map((fruta) => {
          return <Card key={fruta.id} 
          fruta={fruta}
          />
        })}

    </ChakraProvider>
   
  );
}

export default App;
