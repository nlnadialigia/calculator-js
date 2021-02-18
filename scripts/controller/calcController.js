/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
class CalcController {
  constructor () {
    this._displayCalc = '0';
    this._currentDate;
    this.initialize();
  }

  initialize () {
    const displayCalcEl = document.querySelector('#display');
    const dateEl = document.querySelector('#data');
    const timeEl = document.querySelector('#hora');

    displayCalcEl.innerHTML = '0';
    dateEl.innerHTML = '01/05/2020';
    timeEl.innerHTML = '00.00';
  }

  get displaCalc () {
    return this._displayCalc;
  }

  set displaCalc (value) {
    this.displaCalc = value;
  }

  get currentDate () {
    return this._currentDate;
  }

  set currentDate (value) {
    this.currentDate = value;
  }
}
