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
                        <label>Nome Completo</label>
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
                        <input type="confirmepassword" className="form-control"
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
