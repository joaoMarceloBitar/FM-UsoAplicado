class Carro {
  modelo: string;
  cor: string;

  constructor(modelo: string, cor: string) {
    this.modelo = modelo;
    this.cor = cor;
  }

  info(): string {
    return `Carro modelo: ${this.modelo}, cor: ${this.cor}`;
  }
}
abstract class CarroFactory {
  abstract criarSedan(): Carro;
  abstract criarSUV(): Carro;
}
class CarroPopularFactory extends CarroFactory {
  criarSedan(): Carro {
    return new Carro("Sedan", "Vermelho");
  }

  criarSUV(): Carro {
    return new Carro("Hatch", "Branco");
  }
}
class CarroLuxoFactory extends CarroFactory {
  criarSedan(): Carro {
    return new Carro("Sedan", "Preto");
  }

  criarSUV(): Carro {
    return new Carro("SUV", "Prata");
  }
}
function clienteCompra(factory: CarroFactory) {
  const sedan = factory.criarSedan();
  const suv = factory.criarSUV();

  console.log(sedan.info());
  console.log(suv.info());
}
