import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { Shop } from '../../context/ShopContext';
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';
import swal from 'sweetalert2';
import './style.css';

const ContactForm = () => {

  const { cart, clearCart } = useContext(Shop);

  const confirmarOrden = async () => {
    swal.fire({
      title: 'Aguarde un momento',
      text:'Estamos procesando su orden',
      showConfirmButton: false
    });
    const orden = ordenGenerada(cart, form);
    guardarOrden(cart, orden);
    clearCart();
  };

  const initialForm = {
    name:"",
    email:"",
    repetirEmail: "",
    telefono:"",
    comments:"",
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,30}$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTelefono = /^([0-9]){6,20}$/;

    if(!form.name.trim()) {
      errors.name = "El campo 'Nombre' es obligatorio.";
    } else if(!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' solo acepta letras y espacio en blanco. Mínimo 3 caracteres.";
    };

    if(!form.email.trim()) {
      errors.email = "El campo 'Email' es obligatorio.";
    } else if(!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    };

    if(!form.repetirEmail.trim()) {
      errors.repetirEmail = "El campo 'repetir Email' es obligatorio";
    } else if(form.email !== form.repetirEmail) {
      errors.repetirEmail = "Los Emails no coinciden.";
    }

    if(!form.telefono.trim()) {
      errors.telefono = "El campo 'Telefono' es obligatorio.";
    } else if (!regexTelefono.test(form.telefono.trim())) {
      errors.telefono = "El campo 'Telefono' solo acepta números. Mínimo 6 caracteres.";
    };
    
    return errors
  };

  const {form, errors, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);
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
            type="email" 
            name="repetirEmail" 
            placeholder="Repite tu email" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.repetirEmail} 
            required 
          />
          {errors.repetirEmail && <p>{errors.repetirEmail}</p>}
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
            >
          </textarea>
          <input className='botonEnviar' onClick={confirmarOrden} type="button" value="Enviar"/>
        </form>
    </div>
  );
};

export default ContactForm