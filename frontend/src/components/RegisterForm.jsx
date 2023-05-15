import React from 'react'
import '../styles/signin.scss'

function Inscription () {
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Inscription</title>
        <link href='/assets/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet' />
        <link href='/assets/styles_personalises/signin.css' rel='stylesheet' />
      </head>
      <body className='text-center'>
        <main className='form-signin w-100 m-auto'>
          <form action='/inscription' method='post'>
            <img className='mb-4' src='/images/drcmind.png' alt='' width='72' height='72' />
            <h1 className='h3 mb-3 fw-normal'>Inscrivez-vous</h1>

            <div className='form-floating'>
              <input type='text' name='nom' className='form-control' id='floatingPassword' placeholder='Votre nom' />
              <label htmlFor='floatingPassword'>Nom</label>
            </div>

            <div className='form-floating'>
              <input type='email' name='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
              <label htmlFor='floatingInput'>Adresse e-mail</label>
            </div>
            <div className='form-floating'>
              <input type='password' name='password' className='form-control' id='floatingPassword' placeholder='Password' />
              <label htmlFor='floatingPassword'>Mot de passe</label>
            </div>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>Inscription</button>
            <p><a href='/connexion'>Connectez-vous </a> Si vous avez déjà un compte</p>
            <p className='mt-5 mb-3 text-muted'>&copy; 2022</p>
          </form>
        </main>
      </body>
    </html>
  )
}

export default Inscription
