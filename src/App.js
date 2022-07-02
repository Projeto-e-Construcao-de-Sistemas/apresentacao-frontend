import { useState } from "react";

function App() {
  const [logado, setLogado] = useState(true);

  const deslogar = () => {
    setLogado(false);
  };

  const logar = () => {
    setLogado(true);
  };

  return (
    <div>
      <p>
        {logado === true && (
          <div>
            <p>Esta logado</p>
            <button onClick={deslogar}>Deslogar</button>
          </div>
        )}
      </p>

      <p>
        {logado === false && (
          <div>
            <p>Não está logado</p>
            <button onClick={logar}>Logar</button>
          </div>
        )}
      </p>
    </div>
  );
}

export default App;
