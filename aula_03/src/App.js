import './App.css';

import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Fulano"
  return (
    <div className="App">      
      <Frase />
      <Frase />
      <DigaMeuNome nome="Breno Cardozo"/>
      <DigaMeuNome nome="Fernanda Gomes dos Santos"/>
      <DigaMeuNome nome={nome}/>
      <Pessoa
        nome="Breno"
        idade="17"
        profissao="Aluno"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;