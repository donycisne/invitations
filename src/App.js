import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Invitations</h1>
          <form>
            <input type="text" value="Laura" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Invite</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li className="pending"><span>Dony</span></li>
            <li className="responded"><span>Luciana</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li className="responded"><span>Tom</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li>
              <span>Sabrina</span>
              <label>
                <input type="checkbox" /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
          </ul>
        </div>
        <footer>
          <span>Made with ❤ by &nbsp;
            <a
              href="https://donycisneros.now.sh"
              target="_blank"
              rel="noopener noreferrer"
            >Dony Cisneros</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
