const presentes = [
    { nome: "Abridor de lata" },
    { nome: "Açucareiro" },
    { nome: "Afiador de facas" },
    { nome: "Avental (P)" },
    { nome: "Balança" },
    { nome: "Bandeja de bambu", link: "https://www.bambushome.com.br/produtos/bandeja-de-bambu-retangular-media/" },
    { nome: "Boleira" },
    { nome: "Cafeteira italiana" },
    { nome: "Colheres e pegadores de silicone" },
    { nome: "Colher de pau" },
    { nome: "Copo de medida" },
    { nome: "Cuscuzeira de peitinho" },
    { nome: "Descascador de legumes" },
    { nome: "Descanso de panela" },
    { nome: "Escorredor de louça" },
    { nome: "Escumeira" },
    { nome: "Espremedor de alho" },
    { nome: "Filtro de água", link: "https://www.magazineluiza.com.br/purificador-de-agua-consul-cpb34as-agua-natural-e-gelada/p/fj0e9e8559/ep/purf/" },
    { nome: "Forma de gelo" },
    { nome: "Formas e assadeiras" },
    { nome: "Frigideira de 4 furos", link: "https://www.amazon.com.br/Frigideira-Antiaderente-Hamburguer-Resistente-Multifuncional/dp/B0CK8NHBNQ" },
    { nome: "Funil" },
    { nome: "Garrafa térmica" },
    { nome: "Grill de assar carne" },
    { nome: "Jarra" },
    { nome: "Jogo de copo" },
    { nome: "Jogo de panela de alumínio" },
    { nome: "Jogo de sobremesa" },
    { nome: "Leiteira" },
    { nome: "Lixeiras de cozinha" },
    { nome: "Marinex/travessa de servir" },
    { nome: "Mini adega" },
    { nome: "Organizador para armário", link: "https://shopee.com.br/Kit-5-Organizador-de-Armario-Cozinha-Preto-i.420372684.22492645837" },
    { nome: "Organizador para geladeira" },
    { nome: "Panela de pressão" },
    { nome: "Panos de prato subversivos", link: "https://www.panossubversivos.com.br" },
    { nome: "Pegador de macarrão" },
    { nome: "Petisqueira" },
    { nome: "Pipoqueira" },
    { nome: "Peneira de metal" },
    { nome: "Porta detergente e esponja" },
    { nome: "Porta guardanapo" },
    { nome: "Porta papel alumínio/papel toalha", link: "https://www.magazineluiza.com.br/organizador-rustico-porta-papel-toalha-aluminio-de-bambu-y888/p/cgge515bj1/ud/orgm/" },
    { nome: "Porta tempero de bambu" },
    { nome: "Potes multiuso (microondas)", link: "https://www.amazon.com.br/Potes-Vidro-Retangular-Tampa-Hermética/dp/B08CPMMFL5" },
    { nome: "Processador de alimentos" },
    { nome: "Protetor de airfryer" },
    { nome: "Ralador" },
    { nome: "Saladeira" },
    { nome: "Sanduicheira" },
    { nome: "Tábua para cortar carne" },
    { nome: "Tigela inox" },
    { nome: "Toalha de mesa" },
    { nome: "Abajur de chão tripé", link: "https://shopee.com.br/Abajur-De-Chão-Tripé-1-50-Cm-Completo-Com-Cúpula-E-Fiação-Luminária-De-Piso-Para-Sala-Quarto-i.349149441.22696976027" },
    { nome: "Aspirador de pó vertical", link: "https://www.casasbahia.com.br/aspirador-de-po-vertical-2-em-1-mondial-turbo-cycle-ap36-1100w-vermelho-220v/p/15003643" },
    { nome: "Baldes (P, M, G)" },
    { nome: "Cadeira Acapulco", link: "https://shopee.com.br/CADEIRA-ACAPULCO-FIBRA-SINTETICA-PARA-AREA-EXTERNA-E-INTERNA-COR-AMENDOA-i.1293006748.18797988442" },
    { nome: "Cesto para roupa de bambu", link: "https://shopee.com.br/Cesto-de-Roupa-Suja-70-LITROS-Lavanderia-Bambu-c-Tampa-Retangular-Forrado-Quarto-Banheiro-Dobr%C3%A1vel-i.356841149.19624229559" },
    { nome: "Cortina da sala 3mx2,8" },
    { nome: "Escada/plataforma para armários altos" },
    { nome: "Kit de ferramentas básicas" },
    { nome: "Mesa de centro", link: "https://www.lojasimperio.com.br/produto/mesa-centro-redonda-0-59m-jasmin-menta-carvalho-a46xl59xp59-artely-088030830.html" },
    { nome: "MOP" },
    { nome: "Repetidor de sinal Wi-Fi" },
    { nome: "Tapete da sala (2m x 2.5m sisal)", link: "https://br.shp.ee/DeySgdi" },
    { nome: "Varal de chão", link: "https://shopee.com.br/Varal-De-Chão-Roupa-Calcinha-Grade-3-Andares-Dobr%C3%A1vel-Port%C3%A1til-i.325008325.21071530577" },
    { nome: "Cabideiro" },
    { nome: "Capacho para banheiro" },
    { nome: "Cesto organizador de bambu" },
    { nome: "Edredom/jogo de cama", link: "https://www.conamore.com.br/colcha-piquet-leve-casal-200-x-240cm-branco" },
    { nome: "Ferro de passar roupa" },
    { nome: "Jogo de toalha", link: "https://www.conamore.com.br/toalha-de-banho-atacado-suit-profissional-conamore" },
    { nome: "Lixeira para banheiro" },
    { nome: "Tapete do quarto (2m x 1.5m sisal)" },
    { nome: "Travesseiro/almofada" },
    { nome: "Vaso decorativo" },
    { nome: "Ventilador de coluna" },
    { nome: "Banquinho dobrável" },
    { nome: "Cortina leve (voil)" },
    { nome: "Jardineira vertical" },
    { nome: "Luzes de LED solar" },
    { nome: "Vasos" },
    { nome: "Prateleirinha de canto" },
    { nome: "Regador pequeno (500ml)", link: "https://shopee.com.br/product/372103398/23697383493" }
  ];
  
  const ul = document.getElementById("lista-presentes");

    presentes.forEach(presente => {
    const li = document.createElement("li");
    
    if (presente.link) {
        const a = document.createElement("a");
        a.href = presente.link;
        a.target = "_blank";
        a.textContent = presente.nome;
        li.appendChild(a);
    } else {
        const span = document.createElement("span");
        span.textContent = presente.nome;
        li.appendChild(span);
    }
    
    ul.appendChild(li);
});