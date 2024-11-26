let imoveis = {}
let imoveisDados = {}



do {
    let Menu = prompt(`
        imóveis cadastrados => ${imoveis}
        --------------------------------
        - Cadastrar Imoveis
        - Exibir Imoveis
        - Sair
        ---------------------------------
        `);  
        switch(Menu){
            case"Cadastrar Imoveis":
            let nomeProprietarios = prompt("Digite seu nome")
            while(!nomeProprietarios){
                alert("Preencha o campo a seguir para continuar")
                let nomeProprietarios = prompt("Digite seu nome")
            }
            imoveisDados.nome = nomeProprietarios
            let quantidadeQuartos = prompt("Quantos Quartos o imovel possui?")
            while(!quantidadeQuartos){
                alert("Preencha o campo a seguir para continuar")
                let quantidadeQuartos = prompt("Quantos Quartos o imovel possui?")
            }
            imoveisDados.quartos = quantidadeQuartos
            let quantidadeBanheiros = prompt("Quantos Banheiros o imovel possui?")
            while(!quantidadeBanheiros){
                alert("Preencha o campo a seguir para continuar")
                let quantidadeBanheiros = prompt("Quantos Banheiros o imovel possui?")
            }
            imoveisDados.banheiro = quantidadeBanheiros
            let garagem = prompt("O imovel possui Garagem?")
            while(!garagem){
                alert("Preencha o campo a seguir para continuar")
                let garagem = prompt("O imovel possui Garagem?")
            }
            imoveisDados.garagem = garagem
            imoveis + 1
            
            case"Exibir Imoveis":
           alert(`Você tem o total de ${imoveis}
            ----------------------------------
            Dados do imovel:
            ----------------------------------
            Nome do proprietario: ${imoveisDados.nome}
            Quantidade de quartos: ${imoveisDados.quantidadeQuartos}
            Quantiadade de banheiros: ${imoveisDados.quantidadeBanheiros}
            Possui Garagem: ${imoveisDados.garagem} `) 
            break
            case"Sair":
            alert("Saindo do sistema")
            break
        }
} while (Menu = !"Sair");

