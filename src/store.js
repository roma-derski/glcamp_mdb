import { observable, action } from "mobx";

class FilmList {
  @observable
  films = [
    {
      id: 32424,
      name: "War Games",
      description:
      "A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III.",
      rating: 3,
      poster: null
    },
    {
      id: 23254,
      name: "Jay and Silent Bob Strike Back",
      description:
      "Stoners Jay and Silent Bob discover the Internet and set out to wreck the movie 'Bluntman and Chronic'.",
      rating: 4,
      poster: null
    },
    {
      id: 23234,
      name: "Ex Machina",
      description:
      "A young nerd is selected to participate in a weird experiment in synthetic intelligence by evaluating the human qualities of a sexy humanoid A.I.",
      rating: 5,
      poster: null
    },
    {
      id: 23235,
      name: "Mr Robot",
      description: "Fairy adventures of Elliot, a young programmer.",
      rating: 4,
      poster: null
    },
    {
      id: 23236,
      name: "Halt and Catch Fire",
      description:
      "Personal computing boom through the eyes of a visionary, an engineer and a prodigy.",
      rating: 5,
      poster: null
    }
  ];
  @observable selectedFilmIndex = null;
  @observable name = '';
  @observable description = '';
  @observable rating = '';
  @observable poster = '';

  @action
  selectFilm = index => {
    this.selectedFilmIndex = index;
    this.films.map((film) => {
        if (film.id == index) {
          this.name = film.name;
          this.description = film.description;
          this.rating = film.rating;
          this.poster = film.poster;
        }
    });
  };

  @action
  editName = value => {
    this.name = value;
  };

  @action
  editDescription = value => {
    this.description = value;
  };

  @action
  editRating = value => {
    this.rating = value;
  };

  @action
  editPoster = value => {
    this.poster = value;
  };

  @action
  submit = () => {
    this.films.map((film) => {
      if (film.id == this.selectedFilmIndex) {
        film.name = this.name;
        film.description = this.description;
        film.rating = this.rating;
        film.poster = this.poster;
        console.log('films--->', this.films);
      }
  });
  };

  @action
  reset = () => {
    this.selectedFilmIndex = null;
  };
}

export const store = new FilmList();

