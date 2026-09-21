const listaAgendamentos = document.querySelector("tbody");

const agendamentosSalvos =
    JSON.parse(localStorage.getItem("agendamentos")) || [];

agendamentosSalvos.forEach(function (agendamento) {

    const linha = document.createElement("tr");

    const colunaId = document.createElement("td");
    colunaId.textContent = agendamento.id;

  
    const colunaNome = document.createElement("td");
    colunaNome.textContent = agendamento.nome;

    
    const colunaNomePet = document.createElement("td");
    colunaNomePet.textContent = agendamento.nomePet;

    const colunaEspecie = document.createElement("td");
    colunaEspecie.textContent = agendamento.especie;

    
    const colunaRaca = document.createElement("td");
    colunaRaca.textContent = agendamento.raca;

   
    const colunaCategoria = document.createElement("td");
    colunaCategoria.textContent = agendamento.categoria;

    
    const colunaAcoes = document.createElement("td");
    colunaAcoes.classList.add("acoes");

    
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("botaoEditar");

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("botaoExcluir");

   
    colunaAcoes.append(botaoEditar, botaoExcluir);

   
    linha.append(
        colunaId,
        colunaNome,
        colunaNomePet,
        colunaEspecie,
        colunaRaca,
        colunaCategoria,
        colunaAcoes
    );

   
    listaAgendamentos.append(linha);
});
