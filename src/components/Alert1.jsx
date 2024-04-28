import React from 'react'
import Alert from 'react-bootstrap/Alert'

export const Alert1 = ({forAlert}) => {

  return (
    <Alert className='mt-3 text-center' key='success' variant='success'>
        {forAlert}
  </Alert>
  )
}

  //   <div align-items-center>
  // <p className='justify-content-center'>
  //     {forAlert}
  // </p>
  //   </div>