import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Month table
// 0 - Jan // 1 - Feb  // 2 - Mar // 3 - Aph
// 4 - May // 5 - Jun // 6 - Jul // 7 - Agu
// 8 - Set // 9 - Out //10 - Nov //11 - Dez

// function sazonDate(day = [], month = [], holidays = []) {
//   let elementBody = document.querySelector("html");
//   let now = new Date();

//   day.forEach((e, i) => {
//     localStorage.setItem("Holiday", holidays);
//     if (now.getDate() === day[i] && now.getMonth() === month[i] && now.getFullYear()) {
//       elementBody.classList.add(holidays[i]);
//     }
//   })
// }

// sazonDate([14, 25, 8, 21], [8, 11, 2, 8], ['bruxo', 'natal', 'pascoa', 'arvore']);

function sazonDate(dados) {
  dados = dados.split(",");
  // console.log(dados);
  let day = [];
  let month = [];
  let holidays = [];
  dados.forEach((e, i) => {
    let regex = e.match(/\d+/g)
    day.push(regex[0]);
    regex[1] = (regex[1] - 1);
    month.push(String(regex[1]));
    let feriado = e.match(/\w+/g);
    holidays.push(feriado[2]);
  })
  let elementBody = document.querySelector("html");
  let now = new Date();

  dados.forEach((e, i) => {
    localStorage.setItem("Holiday", holidays);
    if (now.getDate() === parseInt(day[i]) && now.getMonth() === parseInt(month[i]) && now.getFullYear()) {
      elementBody.classList.add(holidays[i]);
    }
  })
}

sazonDate("12/04-pascoa," +
  "21/09-arvore," +
  "31/10-bruxo," +
  "25/12-natal"
);

function sazonColor(arraySazon = [], variable = [], color = []) {
  let objArrayholidays = {
    input: variable,
    style: color
  }
  arraySazon.forEach((e, i) => {
    if (document.querySelector("html").classList.value === arraySazon[i]) {
      variable.forEach((e, j) => {
        document.querySelector(':root').style.setProperty(objArrayholidays.input[j], objArrayholidays.style[j])
      })
    }
  })
}

sazonColor(['bruxo'], [
  '--primary-color',
  '--secondary-color',
  '--tertiary-color',
  '--quaternary-color',
  '--quinary-color',
  '--lines',
  '--border-primary',
  '--shadow',
  '--bg1',
  '--bg2'
], [
  '#50fa7b',
  '#50fa7b',
  '#6200ff',
  '#50fa7b',
  '#a4b6c9',
  '#c800ff1a',
  '#09ff0034',
  '#09ff001c',
  '#52006A40',
  '#270033',
]);

sazonColor(['natal'], [
  '--primary-color',
  '--secondary-color',
  '--tertiary-color',
  '--quaternary-color',
  '--quinary-color',
  '--lines',
  '--border-primary',
  '--shadow',
  '--bg1',
  '--bg2'
], [
  '#fff',
  '#ff1d1d',
  '#A60017',
  '#fff',
  '#fff',
  '#ffffff15',
  '#ffffff34',
  '#ffffff1c',
  '#64000040',
  '#4b000a',
]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
