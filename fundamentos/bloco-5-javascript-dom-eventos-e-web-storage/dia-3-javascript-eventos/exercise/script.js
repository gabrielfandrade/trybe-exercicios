function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function days() {
    let daysWeek = document.querySelector('#days');
    for (let i = 0; i < dezDaysList.length; i += 1) {
      let day = dezDaysList[i];
      let dayLi = document.createElement('li');
      dayLi.classList.add('day');
      if (day === 24 || day === 25 || day === 31) {
        dayLi.classList.add('holiday');
      }
      if (day === 4 || day === 11 || day === 18 || day === 25) {
        dayLi.classList.add('friday');
      }
      dayLi.innerHTML = day;
      daysWeek.appendChild(dayLi);
    }
  }

  days();

  //Exercício 2
  function holidays(name) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = name;
    let div = document.querySelector('.buttons-container');
    div.appendChild(button);
  }

  holidays('Feriados');

  //Exercício 3
  function showHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');

    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === 'aqua') {
          getHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          getHolidays[index].style.backgroundColor = 'aqua';
        }
      }
    })
  }

  showHolidays();

  //Exercício 4
  function fridays(name) {
    let button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = name;
    let div = document.querySelector('.buttons-container');
    div.appendChild(button);
  }

  fridays('Sexta-feira');

  //Exercício 5
  function showFridays(fridaysList) {
    let getFridayButton = document.querySelector('#btn-friday');
    let getFridays = document.querySelectorAll('.friday');

    getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < getFridays.length; index += 1) {
        if (getFridays[index].innerHTML !== 'Sexta-Feira') {
          getFridays[index].innerHTML = 'Sexta-Feira';
        } else {
          getFridays[index].innerHTML = fridaysList[index];
          }
        }
    })
  }

  let fridaysList = [ 4, 11, 18, 25 ];
  showFridays(fridaysList);

  //Exercício 6
  function zoomOn() {
    let daysZoom = document.querySelector('#days');

    daysZoom.addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '25px';
      event.target.style.fontWeight = '600';
    })
  }

  function zoomOut() {
    let daysZoom = document.querySelector('#days');

    daysZoom.addEventListener('mouseout', function (event) {
      event.target.style.fontWeight = '250';
      event.target.style.fontSize = '20px';
    })
  }

  zoomOn();
  zoomOut();

  //Exercício 7
  function spanTarefa(tarefa){
    let span = document.createElement('span');
    span.innerText = tarefa;
    document.querySelector('.my-tasks').appendChild(span);
  }