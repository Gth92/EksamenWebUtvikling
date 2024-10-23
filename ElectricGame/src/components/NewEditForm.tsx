import IGame from "../interfaces/IGame";
import "../styles/NewEditForm.css";
import ImageUploadService from "../services/ImageUploadService";
import { useState, ChangeEvent  } from "react";

const NewEditForm = ({
  game,
  handleSubmit,
  closeForm,
}: {
  game: IGame;
  handleSubmit: (game: IGame) => void;
  closeForm: () => void;
}) => {
  const [newImage, setNewImage] = useState<File | null>(null);

  const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files != null) {
      setNewImage(files[0]);
    }
    console.log(files);
  };

  const uploadImage = () => {
    if (newImage != null) {
      ImageUploadService.postImage(newImage);
    }
  };

  return (
    <div>
      <div className="form-background">
        <div className="form-wrapper">
          <form className="form" key={game.id}>
            <div className="form-header">
              <h2>{game.id ? "Edit Game" : "Add Game"}</h2>
              <button
                className="close-button"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the page from reloading
                  closeForm();
                }}
              >
                X
              </button>
            </div>
            <input type="file" id="img" name="img" onChange={setImageHandler} onClick={uploadImage} />
            <input onClick={uploadImage} type="button" value="Upload" />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={game.title}
            />

            <div className="duo-wrapper">
              <div className="wrapper">
                <label htmlFor="platform">Platform</label>
                <select
                  id="platform"
                  name="platform"
                  defaultValue={game.platform}
                >
                  <option value="PC">PC</option>
                  <option value="Xbox">Xbox</option>
                  <option value="Playstation">Playstation</option>
                  <option value="Nintendo">Nintendo</option>
                </select>
              </div>
              <div className="wrapper">
                <label htmlFor="releaseYear">Release Year</label>
                <input
                  type="number"
                  id="releaseYear"
                  name="releaseYear"
                  min="1900"
                  max="2500"
                  defaultValue={game.releaseYear}
                />
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              onClick={(e) => {
                const imgName = (document.getElementById("img") as HTMLInputElement).value.split("\\").pop();
                const imgURL = `https://localhost:7264/images/${imgName}`; // change to your localhost..
                e.preventDefault();
                handleSubmit({
                  id: game.id,
                  title: (document.getElementById("name") as HTMLInputElement)
                    .value,
                  platform: (
                    document.getElementById("platform") as HTMLInputElement
                  ).value,
                  releaseYear: parseInt(
                    (document.getElementById("releaseYear") as HTMLInputElement)
                      .value
                  ),
                  image: game.id
                    ? game.image
                    : imgURL,
                });
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEditForm;
