import React from 'react'
import PessoasI from "../img/pessoas.png"

const  IntroduçaoI= () => {
  return (
    <div>
      <img src={PessoasI} className='PessoasI' alt='Foto de trÊs pessoas' />
      <p className='paragrafo-Intro'>Já pensou em como seria ter o poder de mudar o mundo,
         começando pela sua empresa?</p>
    </div>
  )
}

export default IntroduçaoI
