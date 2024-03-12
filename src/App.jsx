
import Game from "./components/Game.jsx"
import NewGameForm from "./components/NewGameForm.jsx"
import useGameCollection from "./hooks/useGameCollections.js"



export default function App() {
 
  const {games, addGame, removeGame} = useGameCollection()


  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm 
      addGame={addGame}
      />
      <div className="games">
        {games.length > 0 ? games.map((game)=> ( <Game  key={game.id} title={game.title} cover={game.cover}
        onRemove={()=> removeGame(game.id)}
        />
        ))
      : (<h2>Não tem nada aqui. Tente adicionar um jogo</h2>)
      }
      </div>
    </div>
  )
}