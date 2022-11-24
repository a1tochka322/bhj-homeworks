class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer() {
    this.currentWord = Array.from(this.wordElement.querySelectorAll('.symbol')).length;
    this.seconds = document.getElementById("seconds");
    this.seconds.textContent = this.currentWord;
    this.id = setInterval( () => {
      this.seconds.textContent --;
      if (this.seconds.textContent < 1 ) {
        this.fail();
      }
    }, 1000)
  }

  registerEvents() {
    document.onkeyup = (event) => {
      if (event.key.toLowerCase() === this.currentSymbol.textContent) {
        this.success();
      } else {
        this.fail();
      }
    }
  }

  success() {
    clearInterval(this.id);
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    clearInterval(this.id);
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    this.timer();

  }
}

new Game(document.getElementById('game'))

