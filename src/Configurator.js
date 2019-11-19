import React from 'react'
import {
  Label,
  Input,
  Select,

} from '@rebass/forms'
import {Box, Button} from 'rebass';

import { Form, Field,FormSpy  } from 'react-final-form'
import initialFactors from './config.json';

const fibNumbs = (count) => {
  let counter = 1; 
  const nums = [];
  return function add(x = 0, y = 1) {
    const sum =  x+y;
    if(count > counter) {
      nums.push(sum);
      counter++;
      return add(y, x+y)
    }
    return nums;
  }
}


export const Configurator = ({onSubmit = () => null}) => {
  return (
  <Form
    onSubmit={onSubmit}
    initialValues={{...initialFactors, ...initialFactors.baseFactors}}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Base Factor Config</h2>

        <Box mb={10}>
          <Label ml={-2}>Epic Base Points</Label>
          
          <Field name="epic"

            render={({ input, meta }) => (
                <Select width={400} {...input} mt={2}>
                {fibNumbs(10)().map(val => <option value={val} key={val}>{val}</option> )}
                  
                </Select>
              )}
          />
          <Label ml={-2}>Task Base Points</Label>
          <Field name="task"

            render={({ input, meta }) => (
                <Select width={400} {...input} mt={2}>
                {fibNumbs(5)().map(val => <option value={val} key={val}>{val}</option> )}
                  
                </Select>
              )}
          />
        </Box>


        <Box mb={10}>
          <Label ml={-2}>Unknowns</Label>
          
          <Field name="unknowns"

            render={({ input, meta }) => (
                <Input width={400} {...input} mt={2} type="number" min="-1" max="1"/>
              )}
          />

        </Box>

        <Box mb={10}>
          <Label ml={-2}>Complexity</Label>
          
          <Field name="complexity"

            render={({ input, meta }) => (
                <Input width={400} {...input} mt={2} type="number" min="-1" max="1"/>
              )}
          />

        </Box>
        

        <Button my={10} width={200}  bg={"#243a"} color="white" type="submit">Submit</Button>
      </form>
    )}
  />
  )
}