import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Formulario = (forAlert) => {

  const CheckData = (e ) => {
    e.preventDefault()
    const validar = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if(datos.nombre == '' || datos.email == '' || datos.password == '' || datos.confirmPassword == '') {
      forAlert 
      return
    } else if(!validar.test(datos.email)){
      console.log('escribe bien el correo po wn')
      return
    }else if (datos.password !== datos.confirmPassword){
      console.log('escribiste mal la caga de contraseña')
      return
    }else {
      console.log('bien')
    }return
  }

  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
 }
 
  return (
      <Form className='d-grid gap-2' onSubmit={CheckData} >
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
            <Button variant="success" type='submit'>Registrarse</Button>{' '}
      </Form>
  )
}
