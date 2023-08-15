import React from 'react';
import './Auth.css'
import '../components/Header/Header'

function Register() {

    return (
        <div className='form-container'>
            <h1 className='title-page'>INSCRIPTION</h1>
            <form>
                <div className='group'>
                    <label htmlFor='surname'>Nom</label>
                    <input type='text' name='surname'></input>
                </div>
                <div className='group'>
                    <label htmlFor='name'>Prénom</label>
                    <input type='text' name='name'></input>
                </div>
                <div className='group'>
                    <label htmlFor='Register'>Identifiant</label>
                    <input type='text' name='Register'></input>
                </div>
                <div className='group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email'></input>
                </div>
                <div className='group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' name='password'></input>
                </div>
                <div className='group'>
                    <button>inscription</button>
                    <a href='/login'>vous avez déjà un compte ?</a>
                </div>
            </form>
        </div>
    );
}

export default Register;
