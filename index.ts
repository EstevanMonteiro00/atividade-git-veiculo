import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while (true) {
    console.log("\n########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');

    if (opcao === 0) {
        break;
    }

    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 3:
            subirMarcha(carro);
            break;
        case 4:
            descerMarcha(carro);
            break;
        case 5:
            imprimirDados(carro);
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}

console.log("\nPrograma encerrado.");

function acelerar(veiculo: Veiculo): void {
    if (veiculo.marchaAtual !== 0) {
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(`Velocidade: ${veiculo.velocidade.toFixed(1)} km/h`);
    } else {
        console.log("Não é possível acelerar em ponto morto.");
    }
}

function frear(veiculo: Veiculo): void {
    if (veiculo.velocidade === 0) {
        console.log("O veículo já está parado.");
        return;
    }

    const velocidadeAnterior = veiculo.velocidade;

    veiculo.velocidade = Math.max(
        0,
        veiculo.velocidade - veiculo.potencia * 0.15
    );

    console.log(
        `Velocidade: ${velocidadeAnterior.toFixed(1)} → ${veiculo.velocidade.toFixed(1)} km/h`
    );
}

function subirMarcha(veiculo: Veiculo): void {
    if (veiculo.velocidade === 0 && veiculo.marchaAtual === 0) {
        veiculo.marchaAtual = 1;
        console.log("Primeira marcha engatada.");
        return;
    }

    if (veiculo.marchaAtual < veiculo.numeroMarchas) {
        veiculo.marchaAtual++;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    } else {
        console.log("O veículo já está na última marcha.");
    }
}

function descerMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual > 1) {
        veiculo.marchaAtual--;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    } else if (veiculo.marchaAtual === 1) {
        veiculo.marchaAtual = 0;
        console.log("Veículo colocado em ponto morto.");
    } else {
        console.log("O veículo já está em ponto morto.");
    }
}

function imprimirDados(veiculo: Veiculo): void {
    console.log("\n######## DADOS DO VEÍCULO ########");
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Potência: ${veiculo.potencia}`);
    console.log(`Número de marchas: ${veiculo.numeroMarchas}`);
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    console.log(`Velocidade: ${veiculo.velocidade.toFixed(1)} km/h`);
    console.log("##################################");
}

function criaVeiculo(): Veiculo {
    const veiculo: Veiculo = new Veiculo();

    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');

    return veiculo;
}
