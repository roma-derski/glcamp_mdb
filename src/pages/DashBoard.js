import React from 'react';
import { Link } from 'react-router-dom'
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class DashBoard extends React.Component {
    renderTopFilms = () => {
        const { match, store } = this.props;
        const pageId = match.params.id;
        const sortedFilms = store.films.sort((a,b) => b.rating > a.rating)
        const coupleFilms = sortedFilms.slice((pageId-1)*2, (pageId-1)*2+2);
        return (
            coupleFilms.map((film, index) => (
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
                    {film.name} - <span className="rating">{film.rating}</span>
                    </p>
                    <Link className="edit" to={`/flmedit/${film.id}`}> edit </Link>
                </div>
                ))
        )
    }
    renderNav = () => {
        const { films } = this.props.store;
        const totalPages = Math.ceil(films.length/2);
        const pagesArray = [...Array(totalPages)];
        pagesArray.map((item, index) => {
            return pagesArray[index] = <Link key={index} className="nav" to={`/top/${index+1}`}> {index+1} </Link>
        })
        return pagesArray;
    }
    render() {

        return (
            <div>
                <h2>Top</h2>
                {this.renderTopFilms()}
                <div className="nav-wrap">
                    {this.renderNav()}
                </div>
                <Link to='/filmlist'>All Films</Link>
            </div>
        )
    }
}
