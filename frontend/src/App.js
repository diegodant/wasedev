import React, {useState, useEffect} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGitUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  });
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGitUsername(e.target.value)}/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" 
                id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2975847?s=400&u=d798ffafb0521499d76e934ae90966febc8efa3c&v=4"/>
              <div className="user-info">
                <strong>Diego Dantas</strong>
                <span>ReactJs, Java, NodeJs</span>
              </div>
            </header>
            <p>Desenvolvedor de Sistemas em Java, Node e React</p>
            <a href="https://github.com/diegodant">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2975847?s=400&u=d798ffafb0521499d76e934ae90966febc8efa3c&v=4"/>
              <div className="user-info">
                <strong>Diego Dantas</strong>
                <span>ReactJs, Java, NodeJs</span>
              </div>
            </header>
            <p>Desenvolvedor de Sistemas em Java, Node e React</p>
            <a href="https://github.com/diegodant">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2975847?s=400&u=d798ffafb0521499d76e934ae90966febc8efa3c&v=4"/>
              <div className="user-info">
                <strong>Diego Dantas</strong>
                <span>ReactJs, Java, NodeJs</span>
              </div>
            </header>
            <p>Desenvolvedor de Sistemas em Java, Node e React</p>
            <a href="https://github.com/diegodant">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2975847?s=400&u=d798ffafb0521499d76e934ae90966febc8efa3c&v=4"/>
              <div className="user-info">
                <strong>Diego Dantas</strong>
                <span>ReactJs, Java, NodeJs</span>
              </div>
            </header>
            <p>Desenvolvedor de Sistemas em Java, Node e React</p>
            <a href="https://github.com/diegodant">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
