import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/"><FiArrowLeft/> Voltar para home</Link>
      </header>

      <form action="">
        <h1>Cadastro do <br /> ponto de coleta</h1>
        
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="name">E-mail</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="name">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp"/>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado</label>
              <select name="uf" id="uf">
                <option value="0">Selecione o estado</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="cidade">Cidade</label>
              <select name="cidade" id="cidade">
                <option value="0">Selecione a cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens coletados</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo" />
              <span>Oléo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo" />
              <span>Oléo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo" />
              <span>Oléo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo" />
              <span>Oléo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo" />
              <span>Oléo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Oleo" />
              <span>Oléo de cozinha</span>
            </li>
          </ul>
          
        </fieldset>
      </form>
    </div>
  );
}

export default CreatePoint;