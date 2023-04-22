import * as React from "react";
import { Formik, Form } from "formik";
import './CadastroComponent.css'
import Select from 'react-select';

  export const CadastroComponent = () => {    
    return <div className="container-cadastro">    
      <Formik
        initialValues={{}}        
      >
        <div className="container-cadastro2">
        <h1>Cadastro de Usuários</h1>
            <Form className="register-form">

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome Civil</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="nameCivil"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome Social</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="nameSocial"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome da Mãe</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="nomeMae"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>CPF</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="cpf"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>RG</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="rg"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Data de Nasc</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="dataNasc"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Orgão Emissor</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="orgao"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Raça </label>
                        <Select
                            id=""                               
                            name=""
                            value={""}
                            onChange={""}                        
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Sexo </label>
                        <Select
                            id=""                               
                            name=""
                            value={""}
                            onChange={""}                        
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Tipo Sanguineo </label>
                        <Select
                            id=""                               
                            name=""
                            value={""}
                            onChange={""}                        
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Status </label>
                        <Select
                            id=""                               
                            name=""
                            value={""}
                            onChange={""}                        
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>CEP</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="cep"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Endereço - Av/Rua/Travessa</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="endereco"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Número</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="numero"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Complemento</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="complemento"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Bairro</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="bairro"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Cidade</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="cidade"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Estado/Provincia</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="estado"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Pais</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="pais"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Telefone fixo / Recado</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="telefone"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Celular</label>
                        <br></br>
                        <input type="text" className="form-control"
                            name="celular"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Senha</label>
                        <br></br>
                        <input type="password" className="form-control"
                            name="senha"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Confirme sua senha</label>
                        <br></br>
                        <input type="password" className="form-control"
                            name="confsenha"
                            value={""}
                            onChange={e => this.updateField(e)}
                            placeholder=""
                        />
                    </div>
                </div>
                <br></br>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>          
            </Form>
        </div>
      </Formik>
    </div>
  
  }
