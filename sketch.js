let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de mistério?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("GREEN");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "X-men";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Até o último homem";          
        } else{
         return "Homem Aranha sem volta pra casa";
        }
      } else {
        if (gostaDeFantasia) {
          return "Vingadores Guerra infinita";
        } else {
          return "Vingadores Ultimato";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Turma da Mônica";
    } else {
      return "Backyardigans";
    }
  }
}