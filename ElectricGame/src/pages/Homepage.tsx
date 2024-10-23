import "../styles/App.css";

export default function Homepage() {
  return (
    <>
      <div className="hero-section">
        <h1 className="title">Electric Games Inc</h1>
        <p>Checkout our amazing games catalogue!</p>
      </div>
      <div className="container">
        <h2>Our Featured Games</h2>
        <p>Here is our selection of the best games of the year!</p>
        <div className="grid">
          <div className="card">
            <div>
              <img
                src="https://image.api.playstation.com/vulcan/img/rnd/202010/0220/y7N5IayWNS7e008hUsfgPkh1.jpg?w=440"
                alt="Assasains Creed game"
              />
            </div>
            <div>
              <h3>Assasains Creed Syndicate</h3>
              <div className="card-info">
              <p>PC</p>
              <p>2020</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/208650/capsule_616x353.jpg?t=1634156452"
                alt="Batman: Arkham Knight"
              />
            </div>
            <div>
              <h3>Batman: Arkham Knight</h3>
              <div className="card-info">
              <p>Playstation 4</p>
              <p>2010</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src="https://www.lego.com/cdn/cs/catalog/assets/blt955bb4165576569d/1/kids_lego-city-city-builder.jpg"
                alt="Lego game"
              />
            </div>
            <div>
              <h3>Lego City Builder</h3>
              <div className="card-info">
              <p>Nintende Switch</p>
              <p>2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
