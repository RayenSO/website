import React, { useState } from 'react';
import api from '../services/api';
import './Auth.css';

function Register() {

    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        username: '',
        email: '',
        password: '', 
        password2: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await api.post('/api/register/', formData);
            console.log('Inscription réussie:', response.data);
            // Gérer la redirection ou les actions appropriées après l'inscription réussie.
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            // Gérer les erreurs d'inscription, afficher des messages d'erreur, etc.
        }
    };

    return (
        <div className='form-container'>
            <h1 className='title-page'>INSCRIPTION</h1>
            <form onSubmit={handleSubmit}>
                <div className='group'>
                    <label htmlFor='surname'>Nom</label>
                    <input type='text' name='surname' onChange={handleChange} value={formData.surname}/>
                </div>
                
                <div className='group'>
                    <label htmlFor='name'>Prénom</label>
                    <input type='text' name='name' onChange={handleChange} value={formData.name}/>
                </div>
                <div className='group'>
                    <label htmlFor='pseudo'>Identifiant</label>
                </div>
                <div className='group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' onChange={handleChange} value={formData.email}/>
                </div>
                <div className='group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' name='password' onChange={handleChange} value={formData.password}/>
                </div>
                <div className='group'>
                    <label htmlFor='password'>Confirmer votre mot de passe</label>
                    <input type='password' name='password' onChange={handleChange} value={formData.password2}/>
                </div>
                <div className='group'>
                    <button type='submit'>inscription</button>
                    <a href='/login'>vous avez déjà un compte ?</a>
                </div>
            </form>
        </div>
    );
}

export default Register;
