import { useEffect, useState } from "react";
import axios from "axios";

import GamesGrid from "../components/GamesGrid";
import NewEditForm from "../components/NewEditForm";
import IGame from "../interfaces/IGame";
import "../styles/App.css";

export default function Games() {
  const [form, setForm] = useState(false); // This is the state for the New Edit Form
  const [gameToEdit, setGameToEdit] = useState<IGame | null>(null); // This is the state for the game to edit

  const [games, setGames] = useState([] as IGame[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const LOCALHOSTAPI = "https://localhost:7264/game/";  // must have / in the end!

  // handleSubmit is a function that will be passed to the NewEditForm component
  // It will be called when the form is submitted
  const handleSubmit = (game: IGame) => {
    // If the game has an id, we are editing an existing game
    if (game.id) {
      axios
        .put(`${LOCALHOSTAPI}${game.id}`, game)
        .then((response) => {
          // Find the game in the games array and replace it with the updated game
          const updatedGames = games.map((g) =>
            g.id === game.id ? response.data : g
          );
          setGames(updatedGames);
          setForm(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // If the game does not have an id, we are creating a new game
      axios
        .post(LOCALHOSTAPI, game)
        .then((response) => {
          // Add the new game to the games array
          setGames([...games, response.data]);
          setForm(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`${LOCALHOSTAPI}${id}`)
      .then((response) => {
        setGames(games.filter((game) => game.id !== id));
        console.log("Game deleted", response);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const closeForm = () => {
    setForm(false);
    setGameToEdit(null);
  };

  useEffect(() => {
    axios
      .get(LOCALHOSTAPI)
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Catch any errors we hit
        setError(true);
        setLoading(false);
      });
  }, [form]);

  return (
    <div className="container">
      <h2>Games Catalogue</h2>

      <button className="new-game-button" onClick={() => setForm(true)}>
        {form ? "Close Form" : "Add New Game"}
      </button>
      <p>
        Feel free to add a new game to the catalogue or edit an existing game.
      </p>
      {loading && <p>Loading...</p>}
      {error ? (
        <p>There was an error loading the games</p>
      ) : (
        <GamesGrid
          games={games}
          handleDelete={handleDelete}
          handleEdit={(game: IGame) => {
            setForm(true);
            setGameToEdit(game);
          }}
        />
      )}

      {form && (
        <NewEditForm
          handleSubmit={handleSubmit}
          game={
            gameToEdit
              ? gameToEdit
              : {
                  title: "",
                  platform: "",
                  releaseYear: 2000,
                  image: "",
                }
          }
          closeForm={closeForm}
        />
      )}
    </div>
  );
}
