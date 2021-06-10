function Calculadora() {
  this.display = document.querySelector('.display');
  
  this.inicia = () => {
    this.clickBotoes();
  };

  this.clickBotoes = () => {
    document.addEventListener('click', event => {
      const el = event.target;

      if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
      if(el.classList.contains('btn-clear')) this.clearDisplay();
      if(el.classList.contains('btn-del')) this.apagaUm();
      if(el.classList.contains('btn-eq')) this.realizaConta();

    });
  };

  this.btnParaDisplay = valor => {
    this.display.value += valor;
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    // Função perigosa, pois permite scripts maliciosos
    let conta = this.display.value;

    try{
      conta = eval(conta);
      
      if(!conta){
        alert('Conta inválida')
        return;
      }
      
      this.display.value = String(conta);
    } catch(e){
      alert('Conta inválida')
      return;
    }
  };
}

const calculator = new Calculadora();
calculator.inicia();