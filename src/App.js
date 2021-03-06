import React, {useState} from 'react';
import {Box, Text, Button, Image, Flex} from 'rebass';
import posed from 'react-pose';
import { Estimator } from './Estimator';
import robot from './RobotLogo.svg';
import initialFactors from './config.json';
import { Configurator } from './Configurator';
import net from './brain';
import { trainMapping } from './trainingData';


const roundToNearestFib = (number ,x=0,y=1) => y < number ? roundToNearestFib(number, y, x+y) : y - number > number - x ? x : y;

const calculateResult = (result, factors = initialFactors) => {
  const classification = result.classification;
  const complexity = result.complexity / 1;
  console.log(result.complexity)
  const unknowns = result.unknowns / 1;
  console.log(complexity, unknowns)
  const baseFactor = factors.baseFactors[classification]
  const total = baseFactor + (factors.complexity * complexity * (complexity > 0 ? baseFactor : 1)) + (factors.unknowns * unknowns * (complexity > 0 ? baseFactor : 1));
  console.log(total)
  return total <= 1 ? 1 : roundToNearestFib(total);
}

const PosedBox = posed.div(  {visible: { opacity: 1, applyAtEnd: {display:'block'} },
  hidden: { opacity: 0, applyAtEnd: { display: 'none' } }});

function App() {
  const [estimate, setEstimate] = useState(null);
  const [botEstimate, setBotEstimate] = useState(0);
  const [currentConfig, setCurrentConfig] = useState(initialFactors);
  const [classification, setClassification] = useState('');

  const handleEstimator = result => {
    const estimate = calculateResult(result, currentConfig)
    setClassification(result.classification);
    setEstimate(estimate);
    
    const brainClass = trainMapping.classification[result.classification];
    const brainComplexity = trainMapping.scale[result.complexity];
    const brainUnknowns = trainMapping.scale[result.unknowns];
    const run = net.run([brainClass, brainComplexity, brainUnknowns]);
    
    console.log(
      'calculating result', result, currentConfig,
      'net data', brainClass, brainComplexity, brainUnknowns
    )
    setBotEstimate(roundToNearestFib(run.points * 89))
  }

  const handleConfigurator = result => {
    setCurrentConfig({...result, baseFactors: {epic: result.epic / 1, task: result.task / 1}});
  }

  const handleClear = () => {
    setEstimate(null);
    setBotEstimate(null);
  };

  return (
    <div className="App">
      <Box as="header" bg="#288" p={40} >
      <Flex alignItems="center">

        <Text as="h1" color="#223993" fontSize={[30, 30, 38, 40]}>Agile-O-Tron

        </Text>
        <Image src={robot} alt="agile-o-tron" width={75} />
      </Flex>
      </Box>
      <Box as="main" justifyContent="center" p={[35, 45]}>
      <Text as="h2">Points Estimator</Text>
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
          <Box as="div" textAlign="center">
            <Text as="p" fontSize={30} textAlign="center">Your {classification} estimate is: <Box as="strong" color="#235aaa">{estimate}</Box></Text>
            <Text as="p" fontSize={25}><Image src={robot} alt="agile-o-tron" width={50} /> Agile-o-tron thought it should have been estimated <Box as="strong" color="#22a564 ">{botEstimate}</Box></Text>
            <Button my={10} width={200} onClick={handleClear} bg={"#243a"} color="white">Okay</Button>
          </Box>
        </PosedBox>
      </Box>
    </div>
  );
}

export default App;
