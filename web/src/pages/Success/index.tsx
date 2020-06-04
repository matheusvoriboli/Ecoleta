import React from 'react'
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'


import logo from '../../assets/logo.svg'


const Success = () => {
    return (
        <div id="page-success">
            
            <div id="success">
                <strong id="message-success">
                    <span>< FiCheckCircle /></span>
                         Cadastro realizado com sucesso
                </strong>
            </div>

            <Link to="/">
                <footer id="come-back">

                    < FiArrowLeft />
                    Voltar para menu inicial

                </footer>
            </Link>


        </div >
    )
}

export default Success


