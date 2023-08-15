import React from 'react';
import './Auth.css'
import '../components/Header/Header'

function Login() {

    return (
        <div className='form-container'>
            <h1 className='title-page'>CONNEXION</h1>
            <form>
                <div className='group'>
                    <label htmlFor='login'>Identifiant</label>
                    <input type='text' name='Login'></input>
                </div>
                <div className='group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' name='password'></input>
                </div>
                <div className='group'>
                    <button>Connexion</button>
                    <a href='/register'>Pas encore de compte ?</a>
                </div>

            </form>
        </div>
    );
}

export default Login;
