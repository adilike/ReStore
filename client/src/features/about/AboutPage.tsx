import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import agent from '../../app/api/agent'

const AboutPage = () => {
  const [validationErrors , setValidationErrors] = useState<string []>([]);
  const getValidationErrors = () => {
    agent.TestErrors.getValidationError()
        .then(() => console.log("Should not see this"))
        .catch(error => setValidationErrors(error));
  }
  return (
    <Container>
      <Typography gutterBottom variant='h2'>
          Error for testing purpose
      </Typography>
      <ButtonGroup>
        <Button variant='contained' onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test Bad request Error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test Unauthorized Error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test Not-found Error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test Server Error</Button>
        <Button variant='contained' onClick={getValidationErrors}>Test valodation Error</Button>
      </ButtonGroup>
      {
        validationErrors.length > 0 && 
        <Alert severity='error'>
          <AlertTitle>validation Errors</AlertTitle>
          <List>
            {validationErrors.map(error => (
              <ListItem key={error}>
                <ListItemText>
                  {error}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      }
    </Container>
  )
}

export default AboutPage