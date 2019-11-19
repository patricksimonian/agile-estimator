import brain from 'brain.js';

import {trainingData} from './trainingData';


const net = new brain.NeuralNetwork();

net.train(trainingData);

export default net;