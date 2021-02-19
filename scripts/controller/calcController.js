/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
class CalcController {
  constructor(){
    this._operation = [];
    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');

    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize(){
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  addEventListenerAll(element, events, fn){
    events.split(' ').forEach(event => {
      element.addEventListener(event, fn, false);
    });
  }

  clearAll(){
    this._operation = [];
  }

  clearEntry(){
    this._operation.pop();
  }

  getLastOperation(){
    return this._operation[this._operation.length - 1];
  }

  setLastOperation(value){
    this._operation[this._operation.length - 1] = value;
  }

  isOperator(value){
    const sinal = ['+', '-', '*', '/', '%'];
    return sinal.indexOf(value) > -1;
  }

  pushOperator(value){
    this._operation.push(value);
    if (this._operation.length > 3) {
      this.calc();
    }
  }

  calc(){
    const last = this._operation.pop();
    const result = eval(this._operation.join(''));
    this._operation = [result, last];
    console.log(this._operation);
  }

  setLastNumberToDisplay(){

  }

  addOperation(value){
    console.log('A', value, isNaN(this.getLastOperation()));

    if (isNaN(this.getLastOperation())) {
      // string
      if (this.isOperator(value)) {
        // trocar operador
        this.setLastOperation(value);
      } else if (isNaN(value)) {
        // outra coisa
        console.log('OUTRA COISA');
      } else {
        this._operation.push(value);
      }
    } else {
      // number
      if (this.isOperator(value)) {
        this._operation.push(value);
      } else {
        const newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(parseInt(newValue));

        // atualizar display
        this.setLastNumberToDisplay();
      }
    }
  }

  setError(){
    this.displayCalc = 'Error';
  }

  execBtn(value){
    switch (value) {
      case 'ac':
        this.clearAll();
        break;
      case 'ce':
        this.clearEntry();
        break;
      case 'soma':
        this.addOperation('+');
        break;
      case 'subtracao':
        this.addOperation('-');
        break;
      case 'multiplicacao':
        this.addOperation('*');
        break;
      case 'divisao':
        this.addOperation('/');
        break;
      case 'porcento':
        this.addOperation('%');
        break;
      case 'igual':

        break;
      case 'ponto':
        this.addOperation('.');
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(parseInt(value));
        break;
      default:
        this.setError();
        break;
    }
  }

  initButtonsEvents(){
    const buttons = document.querySelectorAll('#buttons > g, #parts > g');

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, 'click drag', e => {
        console.log(btn.className.baseVal.replace('btn-', ''));
        const textBtn = btn.className.baseVal.replace('btn-', '');

        this.execBtn(textBtn);
      });

      this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
        btn.style.cursor = 'pointer';
      });
    });
  }

  setDisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayCalc(){
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value){
    this._displayCalcEl.innerHTML = value;
  }

  get displayTime(){
    return this._timeEl.innerHTML;
  }

  set displayTime(value){
    this._timeEl.innerHTML = value;
  }

  get displayDate(){
    return this._dateEl.innerHTML;
  }

  set displayDate(value){
    this._dateEl.innerHTML = value;
  }

  get currentDate(){
    return new Date();
  }

  set currentDate(value){
    this.currentDate = value;
  }
}
