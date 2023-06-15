import React from "react"
import axios from 'axios'
import { useState } from 'react'
import './agenda.css'
function Agendar() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [cpf, setCpf] = useState(0)


  async function addUsers(){
    const response = await axios.post("http://127.0.0.1:8000/Pacientes/",{nome: nome, idade: idade, cpf: cpf})
  }
  

  return (
    <div id='agendar'>

      Nome: <input type="text" className="input"  onChange={(e) => setNome(e.target.value)}/>
      <br></br><br></br>
      Idade: <input type="number" className="input"  onChange={(e) => setIdade(e.target.value)}/>
      <br></br><br></br>
      CPF: <input type="number" className="input"  onChange={(e) => setCpf(e.target.value)}/>
      <button onClick={addUsers} id='botao'>
            Pega Usuarios
      </button>
      
    </div>
  )
}
export default Agendar