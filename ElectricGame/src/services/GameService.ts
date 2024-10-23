import axios from 'axios';
import IGame from '../interfaces/IGame';

const GameService = (
    () => {

        const gameApiEndpoints = {
            games: "https://localhost:7100/api/cartoon",
        };

        const getAllGames = async () => {
            const result = await axios.get(gameApiEndpoints.games);
            console.log(result.data);
            return result.data as IGame[];
        };

        const getGameById = async (id: number) => {
            const result = await axios.get(`${gameApiEndpoints.games}/${id}`);
            console.log(result.data);
            return result.data as IGame;
        };

        const postGame = async (game: IGame) => {
            const result = await axios.post(gameApiEndpoints.games, game);
            console.log(result.data);
            return result.data as IGame;
        };

        const putGame = async (game: IGame) => {
            const result = await axios.put(`${gameApiEndpoints.games}/${game.id}`, game);
            console.log(result.data);
            return result.data as IGame;
        };

        const deleteGame = async (id: number) => {
            const result = await axios.delete(`${gameApiEndpoints.games}/${id}`);
            console.log(result.data);
            return result.data as IGame;
        };

        return {
            getAllGames,
            getGameById,
            postGame,
            putGame,
            deleteGame
        };
    }
)();

export default GameService;