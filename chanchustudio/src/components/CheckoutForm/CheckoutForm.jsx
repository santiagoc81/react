import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, 
            phone, 
            email
        };

        onConfirm(userData);
    };

    return (
        <div className='Container text-center'>
            <form onSubmit={handleConfirm} className='Form'>
                <div class="mb-3">
                    <label className='form-label'>
                        Nombre
                        <input 
                            className='form-control'
                            type='text'
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                </div>
                <div class="mb-3">
                    <label className='form-label'>
                        Teléfono
                        <input 
                            className='form-control'
                            type='text'
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </label>
                </div>
                <div class="mb-3">
                    <label className='form-label'>
                        Email
                        <input 
                            className='form-control'
                            type='text'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                </div>
                <div className='Label'>
                    <button type='submit' className='btn btn-primary'>Crear Orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
