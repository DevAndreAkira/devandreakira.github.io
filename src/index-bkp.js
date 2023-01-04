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
  let j;
  let day = [];
  let month = [];
  let holidays = [];
  console.log("Dados: ", dados);

  dados.forEach((e, i) => {
    let regex = e.match(/\d+/g);
    console.log("Dias e meses: ", regex);
    console.log(regex.length);
    if (regex.length > 2) {
      for (j = regex[0]; j < regex[2]; j++) {
        day.push(regex[j.length > 1 ? j : "0" + j]);
        console.log("Days: " + j);
        regex[1] = (regex[1] - 1);
        month.push(String(regex.length > 2 ? 1 && 3 : 1));
        let feriado = e.match(/\w+/g);
        dados.push((j.length > 1 ? j : "0" + j) + "/" + regex[regex.length > 2 ? 1 && 3 : 1] + "-" + feriado[feriado.length - 1]);
        holidays.push(feriado[feriado.length - 1]);
      }
    }
    else {
      day.push(regex[regex.length > 2 ? 0 && 2 : 0]);
    }
    regex[1] = (regex[1] - 1);
    month.push(String(regex[regex.length > 2 ? 1 && 3 : 1]));
    let feriado = e.match(/\w+/g);
    dados.push(feriado[feriado.length - 1]);
    console.log("Dados finais: " + dados);
    holidays.push(feriado[feriado.length - 1]);
    console.log("Feriado Final: " + feriado);
  })
  let elementBody = document.querySelector("html");
  let now = new Date();

  console.log("Entrando dados: " + dados)
  dados.forEach((e, i) => {
    localStorage.setItem("Holiday", holidays);
    if (now.getDate() === parseInt(day[i]) && now.getMonth() === parseInt(month[i]) && now.getFullYear()) {
      elementBody.classList.add(holidays[i]);
    }
  })
}

sazonDate(
  "03/01-11/01-bruxo," +
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

