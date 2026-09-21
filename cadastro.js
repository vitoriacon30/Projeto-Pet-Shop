const formulario = document.querySelector("#formProduto");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const nomePet = document.querySelector("#nomePet").value.trim();
    const raca = document.querySelector("#raca").value.trim();
    const especie = document.querySelector("#especie").value.trim();
    const categoria = document.querySelector("#categoria").value;

    mensagem.classList.remove("erro", "sucesso");

   
    if (
        nome === "" ||
        nomePet === "" ||
        raca === "" ||
        especie === "" ||
        categoria === ""
    ) {
        mensagem.textContent = "Erro: preencha todos os campos.";
        mensagem.classList.add("erro");
        return;
    }

    const agendamentosSalvos =
        JSON.parse(localStorage.getItem("agendamentos")) || [];

   
    const proximoId =
        Number(localStorage.getItem("proximoId")) || 1;

  
    const novoAgendamento = {
        id: proximoId,
        nome: nome,
        nomePet: nomePet,
        raca: raca,
        especie: especie,
        categoria: categoria
    };

    agendamentosSalvos.push(novoAgendamento);

  
    localStorage.setItem(
        "agendamentos",
        JSON.stringify(agendamentosSalvos)
    );

   
    localStorage.setItem(
        "proximoId",
        proximoId + 1
    );

    mensagem.textContent =
        "Sucesso! O atendimento do pet " +
        nomePet +
        " foi cadastrado com o ID: " +
        proximoId;

    mensagem.classList.add("sucesso");

  
    formulario.reset();
});

