import React, {useState} from 'react';
import logo from './logo.svg';
import {Box, Text, Button} from 'rebass';
import posed from 'react-pose';
import { Estimator } from './Estimator';

import initialFactors from './config.json';
import { Configurator } from './Configurator';
import { circIn } from '@popmotion/easing';

const roundToNearestFib = (number ,x=0,y=1) => y < number ? roundToNearestFib(number, y, x+y) : y - number > number - x ? x : y;
const calculateResult = (result, factors = initialFactors) => {
  const classification = result.classification;
  const complexity = result.complexity / 1;
  const unknowns = result.unknowns / 1;

  const total = factors.baseFactors[classification] + (factors.complexity * complexity) + (factors.unknowns * unknowns);
  return roundToNearestFib(total);
}
const PosedBox = posed.div(  {visible: { opacity: 1, applyAtEnd: {display:'block'} },
  hidden: { opacity: 0, applyAtEnd: { display: 'none' } }});

function App() {
  const [estimate, setEstimate] = useState(null);
  const [currentConfig, setCurrentConfig] = useState(initialFactors);
  const [classification, setClassification] = useState('');
  const handleEstimator = result => {
    const estimate = calculateResult(result, currentConfig)
    setClassification(result.classification);
    setEstimate(estimate);
  }

  const handleConfigurator = result => {
    setCurrentConfig({...result, baseFactors: {epic: result.epic, task: result.task}});
  }

  const handleClear = () => setEstimate(null);

  return (
    <div className="App">
      <Box as="header" bg="#288" p={40}>
        <Text as="h1" color="#444" fontSize={[30, 30, 38, 40]}>Agile Estimator</Text>
      </Box>
      <Box as="main" justifyContent="center" p={[35, 45]}>
        <Box as="article">

        <Text as="h3" mb={20}>Unknowns:</Text>
        <p>Unknowns identify the uncertainties behind a particular goal or task. It is a qualitative
        description of the potential for a task increase in effort. The increase can happen for a number of reasons
        including:  </p>
        <ul>
          <li>required learnings/training to perform task </li>
          <li>the possibility of this task exposing higher priority issues</li>
          <li>the research in feasibility to complete the task</li>
        </ul>

        <Text as="h3" mb={20}>Complexity:</Text>
        <p>Complexity is a qualitative measure of how straight or non-straight forward a task is. A task 
        that has many intricate pieces that need working with in order to be completed is more complex. 
         </p>
        </Box>

        <Configurator onSubmit={handleConfigurator} />
        <pre>
          <code>{
            `
            Current Config:
            Epic Base Size: ${currentConfig.baseFactors.epic}
            Task Base Size: ${currentConfig.baseFactors.task}
            Unknowns Factor: ${currentConfig.unknowns}
            Complexity Factor: ${currentConfig.complexity}
            `
          }
          </code>
        </pre>
        <PosedBox pose={estimate === null ? 'visible' : 'hidden'}>
          <Estimator onSubmit={handleEstimator} />
        </PosedBox>
        <PosedBox pose={estimate !== null ? 'visible' : 'hidden'}>
          <Box as="article" textAlign="center">
            <Text as="h2" fontSize={30} textAlign="center">Your {classification} estimate is: <Box as="strong" color="#235aaa">{estimate}</Box></Text>
            <Button my={10} width={200} onClick={handleClear} bg={"#243a"} color="white">Okay</Button>
          </Box>
        </PosedBox>
      </Box>
    </div>
  );
}

export default App;