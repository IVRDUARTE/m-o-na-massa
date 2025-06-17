let animals = [];
let trees = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
  
  // Criando árvores
  for (let i = 0; i < 5; i++) {
    trees.push(createTree(random(width * 0.3), random(height - 100, height - 50)));
  }
  
  // Criando animais
  for (let i = 0; i < 3; i++) {
    animals.push(createAnimal(random(width * 0.3, width), random(height - 200, height - 100)));
  }
}

function draw() {
  background(135, 206, 235); // Céu claro

  // Desenhando o campo (verde)
  fill(34, 139, 34);
  rect(0, height - 150, width, 150);
  
  // Desenhando a cidade (prédios)
  fill(169, 169, 169);
  rect(0, height - 300, width, 150); // Solo urbano
  drawBuildings();

  // Desenhando árvores no campo
  for (let tree of trees) {
    tree.show();
  }

  // Desenhando animais no campo
  for (let animal of animals) {
    animal.show();
  }
}

function drawBuildings() {
  // Prédios simples
  for (let i = 0; i < 5; i++) {
    let w = random(50, 100);
    let h = random(100, 200);
    fill(150);
    rect(i * w + 50, height - 300 - h, w, h);
  }
}

function createTree(x, y) {
  return {
    x: x,
    y: y,
    show: function() {
      // Tronco
      fill(139, 69, 19); // Cor do tronco
      rect(this.x, this.y, 20, 60);
      
      // Folhagem
      fill(34, 139, 34); // Cor das folhas
      ellipse(this.x + 10, this.y - 10, 60, 60);
    }
  };
}

function createAnimal(x, y) {
  return {
    x: x,
    y: y,
    show: function() {
      // Corpo do animal (um quadrado simples)
      fill(255, 223, 186); // Cor do corpo (bege claro)
      ellipse(this.x, this.y, 30, 30);
      
      // Cabeça
      fill(139, 69, 19); // Cor da cabeça
      ellipse(this.x, this.y - 20, 20, 20);
      
      // Olhos
      fill(0);
      ellipse(this.x - 5, this.y - 25, 5, 5);
      ellipse(this.x + 5, this.y - 25, 5, 5);
      
      // Pernas
      fill(139, 69, 19); // Cor das pernas
      rect(this.x - 7, this.y + 15, 5, 10);
      rect(this.x + 2, this.y + 15, 5, 10);
    }
  };
}
