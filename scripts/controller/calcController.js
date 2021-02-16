/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
class CalcController {
  constructor () {
    this._displayCalc = '0';
    this._dataAtual;
  }

  get displaCalc () {
    return this._displayCalc;
  }

  set displaCalc (value) {
    this.displaCalc = value;
  }

  get dataAtual () {
    return this._dataAtual;
  }

  set dataAtual (value) {
    this.dataAtual = value;
  }
}
