import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { Shop } from '../../context/ShopContext'
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';
import './style.css'

const ContactForm = () => {

  const { cart } = useContext(Shop);

  const confirmarOrden = async () => {
    const orden = ordenGenerada(ContactForm, cart);
    guardarOrden(cart, orden);
  }

  const initialForm = {
    name:"",
    email:"",
    telefono:"",
    comments:"",
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTelefono = /^([0-9])*$/;

    if(!form.name.trim()) {
      errors.name = "El campo 'Nombre' es obligatorio.";
    } else if(!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' solo acepta letras y espacio en blanco";
    }

    if(!form.email.trim()) {
      errors.email = "El campo 'Email' es obligatorio.";
    } else if(!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.telefono.trim()) {
      errors.telefono = "El campo 'Telefono' es obligatorio.";
    } else if (!regexTelefono.test(form.telefono.trim())) {
      errors.telefono = "El campo 'Telefono' solo acepta números";
    }
    
    return errors
  };

  const {form, errors, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);
  return (
    <div>
        <h2 className='titulo'>Formulario de contacto</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input className='input'
            type="text" 
            name="name" 
            placeholder="Escribe tu nombre" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.name} 
            required 
          />
          {errors.name && <p>{errors.name}</p>}
          <input className='input'
            type="email" 
            name="email" 
            placeholder="Escribe tu email" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.email} 
            required 
          />
          {errors.email && <p>{errors.email}</p>}
          <input className='input'
            type="text" 
            name="telefono" 
            placeholder="Escribe tu número telefónico" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.telefono} 
            required 
          />
          {errors.telefono && <p>{errors.telefono}</p>}
          <textarea className='input'
            name="comments" 
            cols="50" 
            rows="5" 
            placeholder='Escribe tus comentarios'
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.comments} 
            required ></textarea>
            <input className='boton' onClick={confirmarOrden} type="submit" value="Enviar"/>
        </form>
        {/* {response && alert("El formulario ha sido enviado")} */}
    </div>
  )
}

export default ContactForm