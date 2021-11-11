//  Crie uma classe denominada Elevador para armazenar as informações de um elevador dentro de um prédio.
//  A classe deve armazenar o andar atual (térreo = 0), total de andares no prédio, capacidade do elevador e quantas pessoas estão presentes nele.
//   A classe deve também disponibilizar os seguintes métodos:	

//  - Entra: para acrescentar uma pessoa no elevador (só deve acrescentar se ainda houver espaço);
//  - Sai: para remover uma pessoa do elevador (só deve remover se houver alguém dentro dele);
//  - Sobe: para subir um andar (não deve subir se já estiver no último andar);
//  - Desce: para descer um andar (não deve descer se já estiver no térreo);


class Elevador {

    constructor(andar_atual, total_andares, capacidade_pessoas, qtd_pessoas) {
        this.andar_atual = 0;
        this.total_andares = 0;
        this.capacidade_pessoas = 0;
        this.qtd_pessoas = 0;
    }



    Entra() {
        if (this.capacidade_pessoas > this.qtd_pessoas) {
            this.capacidade += 1;
        }
    }

    Sai() {
        if (this.capacidade_pessoas != 0) {
            this.capacidade -= 1;
        }
    }

    Sobe() {
        if (this.andar_atual != this.total_andares) {
            this.andar_atual += 1;
        }
    }

    Desce() {
        if (this.andar_atual != 0) {
            this.andar_atual -= 1;
        }
    }


}