// Idades: 18 anos, 14 anos, livre
// Gêneros: Terror, Ação, Ficção e Romance.

// Idade 18 anos:
// Terror - O farol
// Ação - La casa de papel
// Ficção - Centopéia Humana
// Romance - 50 tons de cinza

// Idade 14 anos:
// Terror - Invocação do mal
// Ação - Velozes e furiosos 10
// Ficção - Moonfall - Ameaça Lunar
// Romance - Fabricante de lágrimas

// Idade livre:
// Terror - A casa monstro
// Ação - Hot well
// Ficção - Megamente
// Romance - A bela e a fera

let campoIdade; 
let campoTerror;
let campoAcao;
let campoFiccao;
let campoRomance;

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Séries');
  createSpan('idade: ')
  campoIdade = createInput();
  campoTerror = createCheckbox('Terror');
  campoAcao = createCheckbox('Acao');
  campoFiccao = createCheckbox('Ficcao');
  campoRomance = createCheckbox('Romance');
}

function draw() {
  background('rgb(4,4,85)');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('rgb(178,204,241)')
  
  let idade = campoIdade.value();
  let terror = campoTerror.checked();
  let acao = campoAcao.checked();
  let ficcao = campoFiccao.checked();
  let romance = campoRomance.checked();
  
  let filme = geraRecomendacao(idade, terror, acao, ficcao, romance);

  text(filme, width/2, height/2);
  
}

function geraRecomendacao(idade, terror, acao, ficcao, romance){
  if(idade >= 18){
    if(terror){
      return 'O Farol'
    }else if(acao){
      return 'La casa de papel'
    }else if(ficcao){
      return 'Centopéia Humana'
    }else if(romance){
      return '50 Tons e Cinza'
    }else{
      return 'La casa de papel'
    }
    
    
  }else if(idade >=14){
    if(terror){
      return 'Invocação do mal'
    }else if(acao){
      return 'Velozes e furiosos 10'
    }else if(ficcao){
      return 'Moonfall - Ameaça Lunar'
    }else if(romance){
      return 'Fabricante de Lágrimas'
    }else{
      return 'Velozes e furiosos 10'
    }
  }else {
    if(terror){
      return 'A Casa Monstro'
    }else if(acao){
      return 'Hot Wheels'
    }else if(ficcao){
      return 'Megamente'
    }else if(romance){
      return 'A Bela e a Fera'
    }else{
      return 'Hot Wheels'
    }
  }
}
