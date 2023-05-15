import React from 'react'
import '../styles/signin.scss'

function SignIn () {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Connexion</title>
      </head>
      <body className='text-center'>
        <main className='form-signin w-100 m-auto'>
          <form action='/connexion' method='post'>
            <img className='mb-4' src='/images/drcmind.png' alt='' width='72' height='72' />
            <h1 className='h3 mb-3 fw-normal'>Connectez-vous s'il vous plait !</h1>
            <div className='form-floating'>
              <input type='email' name='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
              <label htmlFor='floatingInput'>Adresse e-mail</label>
            </div>
            <div className='form-floating'>
              <input type='password' name='password' className='form-control' id='floatingPassword' placeholder='Password' />
              <label htmlFor='floatingPassword'>Mot de passe</label>
            </div>
            <button className='w-100 btn btn-lg btn-primary' type='submit'>Connexion</button>
            <p><a href='/inscription'>Inscrivez-vous </a> Si vous n'avez pas de compte</p>
            <p className='mt-5 mb-3 text-muted'>&copy; 2022</p>
          </form>
        </main>
      </body>
    </>
  )
}

export default SignIn
