import React, { Component } from "react";
import { inject, observer } from "mobx-react";
/*global windows*/
@inject("store")
@observer
class Form extends Component {
  componentDidMount() {
    const { match, store } = this.props;
    const pageId = match.params.id;
    store.selectFilm(pageId);
  }
  handleNameChange = e => {
    this.props.store.editName(e.target.value);
  };

  handleDescriptionChange = e => {
    this.props.store.editDescription(e.target.value);
  };

  handleRatingChange = e => {
    this.props.store.editRating(e.target.value);
  };

  handlePosterChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = e => {
      this.poster = e.target.result;
      this.props.store.editPoster(this.poster);
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.submit();
    this.props.history.goBack();
  };

  handleReset = () => {
    this.props.store.reset();
    this.props.history.goBack();
  };

  render() {
    const ratings = [1, 2, 3, 4, 5];
    const { name, description, rating, poster } = this.props.store;
    return (
      <form
        id="film-form"
        className="form"
        onSubmit={e => this.handleSubmit(e)}
      >
        <p>
          <b>
            <i>Edit form:</i>
          </b>
        </p>
        <div>
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <textarea
            cols="36"
            rows="3"
            value={description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <div>
          <select value={rating} onChange={this.handleRatingChange}>
            {ratings.map((r, index) => (
              <option value={r} key={index}>
                {r} star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input className="file-load" type="file" onChange={this.handlePosterChange} />
        </div>
        <div className="button-wrap">
          <button className="submit" type="submit">Submit</button>
          <button className="reset" type="button" onClick={this.handleReset}>Reset</button>
          {poster && <img className="img-form" alt={name} src={poster} />}
        </div>
      </form>
    );
  }
}

export default Form;
