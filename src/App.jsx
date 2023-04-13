import { useEffect, useState } from 'react'

function App() {
  const [aposta, setAposta] = useState(0)
  const [sorteado, setSorteado] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [erros, setErros] = useState(0)
  const [mensa, setMensa] = useState("")

  function apostaCopo(num) {
    // alert(`Você apostou no copo ${num}`)
    setAposta(num)
    if (num == sorteado) {
      setMensa(<h2 className='text-primary'>Parabéns! Você Acertou!</h2>)
      setAcertos(acertos + 1)
    } else {
      setMensa(<h2 className='text-danger'>Você errou. Tente novamente.</h2>)
      setErros(erros + 1)
    }
  }

  //''efeito colateral'', que ocorre quando a página é recarregada
  useEffect(() => {
    const numero = Math.ceil(Math.random() * 3)
    setSorteado(numero)
  }, [])

  let imagem1
  let imagem2
  let imagem3
  if (aposta == 0) {
    imagem1 = <img src='copo.png' onClick={() => apostaCopo(1)} />
    imagem2 = <img src='copo.png' onClick={() => apostaCopo(2)} />
    imagem3 = <img src='copo.png' onClick={() => apostaCopo(3)} />
  } else {
    imagem1 = <img src='copo_vazio.png' />
    imagem2 = <img src='copo_vazio.png' />
    imagem3 = <img src='copo_vazio.png' />
    if (sorteado == 1) {
      imagem1 = <img src='copo_certo.png' />
    } else if (sorteado == 2) {
      imagem2 = <img src='copo_certo.png' />
    } else {
      imagem3 = <img src='copo_certo.png' />
    }
  }

  function jogarNovamente(){
    setAposta(0)
    const numero = Math.ceil(Math.random() * 3)
    setSorteado(numero)
    setMensa("")
  }


  return (
    <div className='container'>
      <h1>Jogo dos Copos</h1>
      <h2>Descubra o brinde clicando sobre o copo</h2>
      {imagem1}
      {imagem2}
      {imagem3}
      <hr />
      <h2>Nº de Acertos: {acertos}</h2>
      <h2>Nº de Erros: {erros}</h2>
      {mensa}

      <input type="buttom" className='btn btn-success btn-lg' value="Jogar Novamente" onClick={jogarNovamente} />

    </div>
  )
}

export default App
