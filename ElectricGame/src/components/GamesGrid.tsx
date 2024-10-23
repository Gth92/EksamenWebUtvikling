import IGame from "../interfaces/IGame";
import "../styles/App.css";

function GamesGrid({
  games,
  handleDelete,
  handleEdit,
}: {
  games: IGame[];
  handleDelete: (id: number) => void;
  handleEdit: (game: IGame) => void;
}) {
  return (
    <div className="grid">
      {games.map((game) => (
        <div className="card" key={game.id}>
          <div>
            <img src={game.image} alt={game.title} />
          </div>
          <div>
            <h3>{game.title}</h3>
            <div className="card-info">
              <p>{game.platform}</p>
              <p>{game.releaseYear}</p>
            </div>
          </div>
          <div>
            <button
              className="edit-button"
              onClick={() => {
                handleEdit(game);
              }}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={
                () => handleDelete(game.id!) // The ! is a non-null assertion operator
              }
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GamesGrid;
