import React from 'react'
import {
  Label,
  Input,
  Select,

} from '@rebass/forms'
import {Box, Button} from 'rebass';

import { Form, Field } from 'react-final-form'

export const Estimator = ({onSubmit = () => null}) => {
  return (
  <Form
    onSubmit={onSubmit}
    initialValues={{
      classification: 'epic',
      unknowns: '0',
      complexity: '0'
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Calculate Effort</h2>

        <Box mb={10}>
          <Label ml={-2}>Item Classification</Label>
          
          <Field name="classification"

            render={({ input, meta }) => (
                <Select width={400} {...input} mt={2}>
                  <option value="epic">Epic</option>
                  <option value="task">Task</option>
                </Select>
              )}
          />
        </Box>

        <Box mb={10}>
          <Label ml={-2}>Unknowns</Label>
          
          <Field name="unknowns"

            render={({ input, meta }) => (
                <Select width={400} {...input} mt={2}>
                  <option value="-1">No Unknowns</option>
                  <option value="0">Little Unknowns</option>
                  <option value="1">Some Unknowns</option>
                  <option value="2">Many Unknowns</option>
                </Select>
              )}
          />

        </Box>
        <Box mb={10}>
          <Label ml={-2}>Complexity</Label>
                  <Field name="complexity"

                  render={({ input, meta }) => (
                      <Select width={400} {...input} mt={2}>
                        <option value="-1">Trivial</option>
                        <option value="0">Steps to success are clear</option>
                        <option value="1">Requires some research/planning/consideration</option>
                        <option value="2">Complicated but possible</option>
                        <option value="3">Complex</option>
                      </Select>
                    )}
                  />
        </Box>

        

        <Button my={10} width={200}  bg={"#243a"} color="white" type="submit">Submit</Button>
      </form>
    )}
  />
  )
}