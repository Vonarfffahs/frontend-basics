import React, { Component } from 'react';
import Image from '../image/Image';
import './content.css';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ['Історія', 'Спорт', 'Фільми'],
      favoriteMovies: [
        { title: 'The Passion Of The Christ', year: 2004 },
        { title: 'Risen', year: 2016 },
        { title: 'Luther', year: 2003 },
      ],
      eighthElemClass: '',
      ninthElemClass: '',
    };
  }

  changeElemColor = (elemClass, newColorClass) => {
    if (this.state[`${elemClass}`] === newColorClass) {
      this.setState({ [`${elemClass}`]: '' });
    } else {
      this.setState({ [`${elemClass}`]: newColorClass });
    }
  };

  render() {
    return (
      <div id="content">
        <p>Хобі:</p>
        <ul>
          {this.state.hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>
        <p
          id="eighth-element"
          onClick={() =>
            this.changeElemColor('eighthElemClass', 'eighth-elem-color-change')
          }
          className={this.state.eighthElemClass}
        >
          Улюблені фільми:
        </p>
        <ol>
          {this.state.favoriteMovies.map((movie, i) =>
            i === 0 ? (
              <li
                key={i}
                id="ninth-element"
                onClick={() =>
                  this.changeElemColor(
                    'ninthElemClass',
                    'ninth-elem-color-change',
                  )
                }
                className={this.state.ninthElemClass}
              >
                {movie.title}, {movie.year}
              </li>
            ) : (
              <li key={i}>
                {movie.title}, {movie.year}
              </li>
            ),
          )}
        </ol>
        <p>
          Ка́м'яне́ць-Поді́льський (колишні назви — Кам'янець, у 1795—1944 роках —
          Кам'янець-Подільськ) — місто на південному-заході України, на Поділлі,
          одне з двох найбільших міст Хмельницької області, адміністративний
          центр.
          <br />
          Місто магдебурзького права, один з головних центрів історичного
          регіону Поділля. Королівське місто в складі Речі Посполитої, історично
          головна адміністративно-територіальна одиниця Західного Поділля, з 22
          березня 1919 по листопад 1920 року — столиця УНР, колишній обласний
          центр Кам'янець-Подільської області (1937—1954), з перервами місто
          було центром: князівства, воєводства, намісництва, губернії, землі,
          округу, області, району.
        </p>
        <Image />
      </div>
    );
  }
}
