import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import "./style.css";

@inject("store")
@observer
class App extends React.Component {
  render() {

    const { films, selectedFilmIndex } = this.props.store;
    
    return (
      <div>
        <div>
          {films.map((film, index) => (
            <div
              className="item"
              key={film.id}
            >
              {film.poster && (
                <img
                  className="poster"
                  alt="poster is coming... "
                  src={film.poster}
                />
              )}
              <p>
                {film.name} -
                {film.rating} {index === selectedFilmIndex && <Selected />}
              </p>
              <Link className="edit" to={`/flmedit/${film.id}`}> edit </Link>
            </div>
          ))}
          <Link className="gototoplist" to={`/top/1`}> go to Top List </Link>
        </div>
      </div>
    );
  }
}

function Selected(currentIdx) {
  return <b>{"<="}</b>;
}

export default App;
