import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Formulario = () => {


  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
     setDatos({
       ...datos,
       [event.target.name] : event.target.value
     })
  }

  return (
      <Form className='d-grid gap-2'>
            <Form.Group className='mb-1' controlId='exampleForm.ControlInput1' onChange={handleInputChange}>
              <Form.Control type='text' placeholder='Nombre' name='nombre' />
            </Form.Group>
            <Form.Group className='mb-1' controlId='exampleForm.ControlInput1' onChange={handleInputChange}>
              <Form.Control type='email' placeholder='tuemail@ejemplo.com' name='email'/>
            </Form.Group>
            <Form.Group className='mb-1' controlId='exampleForm.ControlInput1' onChange={handleInputChange}>
              <Form.Control type='password' placeholder='contraseña' name='password'/>
            </Form.Group>
            <Form.Group className='mb-1' controlId='exampleForm.ControlInput1' onChange={handleInputChange}>
              <Form.Control type='password' placeholder='confirma tu contraseña' name='confirmPassword' />
            </Form.Group>
            <Button variant="success">Registrarse</Button>{' '}
      </Form>
  )
}
