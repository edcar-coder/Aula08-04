import React, { useState } from "react";
import { criar } from '../../../service/alunoService';

function CadastrarAluno() {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMsg, setErroMsg] = useState('');
    const [sucessoMsg, setSucessoMsg] = useState('');

    async function criarAluno() {
        try {
            await criar({ matricula, nome, email, senha } );
            setSucessoMsg('Aluno Cadastrado com Sucesso');
            setErroMsg('');
        } catch (error) {
            setErroMsg(error.response.data.mensagem)

        }
    }

    return (
        <div>
            <h2>Cadastrar Aluno</h2>
            <input
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                placeholder="Digite o numero da Matricula"
            />

            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome"

            />
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o  seu email"

            />
            <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite a Senha"
            />
            <button onClick={criarAluno}>Cadastrar</button>
            {erroMsg && <p>{erroMsg}</p>}
            {sucessoMsg && <p>{sucessoMsg}</p>}
        </div>
    )
}

export default CadastrarAluno