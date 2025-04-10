import ListarAluno from "../../components/aluno/ListarAluno/ListarAlunos";
import CadastrarAluno from "../../components/aluno/CadastrarAluno/CadastraAluno";

function GerenciarAlunos(){

    return(

        <div>
           <ListarAluno/>
            <CadastrarAluno />
        </div>
    )
}

export default GerenciarAlunos;