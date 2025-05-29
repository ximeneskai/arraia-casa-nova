const presentes = [
  { nome: "Abajur de chão tripé", link: "https://shopee.com.br/Abajur-De-Chão-Tripé-1-50-Cm-Completo-Com-Cúpula-E-Fiação-Luminária-De-Piso-Para-Sala-Quarto-i.349149441.22696976027", jaTem: false },
  { nome: "Abridor de lata", jaTem: false },
  { nome: "Açucareiro", jaTem: false },
  { nome: "Afiador de facas", jaTem: false },
  { nome: "Airfryer", jaTem: true },
  { nome: "Aspirador de pó vertical", link: "https://www.casasbahia.com.br/aspirador-de-po-vertical-2-em-1-mondial-turbo-cycle-ap36-1100w-vermelho-220v/p/15003643", jaTem: false },
  { nome: "Avental (P)", jaTem: false },
  { nome: "Baldes (P, M, G)", jaTem: false },
  { nome: "Balança", jaTem: false },
  { nome: "Banquinho dobrável", jaTem: false },
  { nome: "Bandeja de bambu", link: "https://www.bambushome.com.br/produtos/bandeja-de-bambu-retangular-media/", jaTem: false },
  { nome: "Batedeira", jaTem: true },
  { nome: "Boleira", jaTem: false },
  { nome: "Cafeteira italiana", jaTem: false },
  { nome: "Cadeira Acapulco", link: "https://shopee.com.br/CADEIRA-ACAPULCO-FIBRA-SINTETICA-PARA-AREA-EXTERNA-E-INTERNA-COR-AMENDOA-i.1293006748.18797988442", jaTem: false },
  { nome: "Cabideiro", jaTem: false },
  { nome: "Cama", jaTem: true },
  { nome: "Capacho para banheiro", jaTem: false },
  { nome: "Cesto organizador de bambu", jaTem: false },
  { nome: "Cesto para roupa de bambu", link: "https://shopee.com.br/Cesto-de-Roupa-Suja-70-LITROS-Lavanderia-Bambu-c-Tampa-Retangular-Forrado-Quarto-Banheiro-Dobr%C3%A1vel-i.356841149.19624229559", jaTem: true },
  { nome: "Chaleira", jaTem: true },
  { nome: "Colheres (conjunto pra um casal)", jaTem: true },
  { nome: "Colheres e pegadores de silicone", jaTem: false },
  { nome: "Colher de pau", jaTem: false },
  { nome: "Colheres grandes de uso", jaTem: true },
  { nome: "Conjunto de guardanapo", jaTem: true },
  { nome: "Conjunto de xícara", jaTem: true },
  { nome: "Copo de medida", jaTem: false },
  { nome: "Cortina da sala 3mx2,8", jaTem: false },
  { nome: "Cortina leve (voil)", jaTem: false },
  { nome: "Cuscuzeira de peitinho", jaTem: false },
  { nome: "Descascador de legumes", jaTem: false },
  { nome: "Descanso de panela", jaTem: false },
  { nome: "Edredom/jogo de cama", link: "https://www.conamore.com.br/colcha-piquet-leve-casal-200-x-240cm-branco", jaTem: false },
  { nome: "Escada/plataforma para armários altos", jaTem: false },
  { nome: "Escorredor de louça", jaTem: false },
  { nome: "Escumeira", jaTem: false },
  { nome: "Espelho adnet", jaTem: true },
  { nome: "Espremedor de alho", jaTem: false },
  { nome: "Ferro de passar roupa", jaTem: false },
  { nome: "Filtro de água", link: "https://www.magazineluiza.com.br/purificador-de-agua-consul-cpb34as-agua-natural-e-gelada/p/fj0e9e8559/ep/purf/", jaTem: false },
  { nome: "Filtro de linha/extensão", jaTem: true },
  { nome: "Fogão", jaTem: true },
  { nome: "Forma de gelo", jaTem: false },
  { nome: "Formas e assadeiras", jaTem: false },
  { nome: "Frigideira de 4 furos", link: "https://www.amazon.com.br/Frigideira-Antiaderente-Hamburguer-Resistente-Multifuncional/dp/B0CK8NHBNQ", jaTem: false },
  { nome: "Frigideira pequena", jaTem: true },
  { nome: "Funil", jaTem: false },
  { nome: "Garrafa térmica", jaTem: false },
  { nome: "Geladeira", jaTem: true },
  { nome: "Grill de assar carne", jaTem: false },
  { nome: "Jardineira vertical", jaTem: false },
  { nome: "Jarra", jaTem: false },
  { nome: "Jogo de copo", jaTem: false },
  { nome: "Jogo de panela de alumínio", jaTem: false },
  { nome: "Jogo de pratos", jaTem: true },
  { nome: "Jogo de sobremesa", jaTem: false },
  { nome: "Jogo de toalha", link: "https://www.conamore.com.br/toalha-de-banho-atacado-suit-profissional-conamore", jaTem: false },
  { nome: "Kit de ferramentas básicas", jaTem: false },
  { nome: "Leiteira", jaTem: false },
  { nome: "Liquidificador", jaTem: true },
  { nome: "Lixeira para banheiro", jaTem: false },
  { nome: "Lixeiras de cozinha", jaTem: false },
  { nome: "Luzes de LED solar", jaTem: false },
  { nome: "Máquina de lavar", jaTem: true },
  { nome: "Marinex/travessa de servir", jaTem: false },
  { nome: "Mesa de centro", link: "https://www.lojasimperio.com.br/produto/mesa-centro-redonda-0-59m-jasmin-menta-carvalho-a46xl59xp59-artely-088030830.html", jaTem: false },
  { nome: "Mesa de jantar com cadeiras", jaTem: true },
  { nome: "Microondas", jaTem: true },
  { nome: "Mini adega", jaTem: false },
  { nome: "Mini lixeirinho pra cozinha", jaTem: true },
  { nome: "MOP", jaTem: false },
  { nome: "Móvel de cozinha", jaTem: true },
  { nome: "Organizador de fios", jaTem: true },
  { nome: "Organizador para armário", link: "https://shopee.com.br/Kit-5-Organizador-de-Armario-Cozinha-Preto-i.420372684.22492645837", jaTem: false },
  { nome: "Organizador para geladeira", jaTem: false },
  { nome: "Panela de pressão", jaTem: false },
  { nome: "Panos de prato subversivos", link: "https://www.panossubversivos.com.br", jaTem: false },
  { nome: "Pegador de macarrão", jaTem: false },
  { nome: "Peneira de metal", jaTem: false },
  { nome: "Petisqueira", jaTem: true },
  { nome: "Pipoqueira", jaTem: true },
  { nome: "Porta chave", jaTem: true },
  { nome: "Porta detergente e esponja", jaTem: false },
  { nome: "Porta guardanapo", jaTem: false },
  { nome: "Porta papel alumínio/papel toalha", link: "https://www.magazineluiza.com.br/organizador-rustico-porta-papel-toalha-aluminio-de-bambu-y888/p/cgge515bj1/ud/orgm/", jaTem: false },
  { nome: "Porta tempero de bambu", jaTem: false },
  { nome: "Potes multiuso (microondas)", link: "https://www.amazon.com.br/Potes-Vidro-Retangular-Tampa-Hermética/dp/B08CPMMFL5", jaTem: false },
  { nome: "Prateleirinha de canto", jaTem: false },
  { nome: "Processador de alimentos", jaTem: false },
  { nome: "Protetor de airfryer", jaTem: false },
  { nome: "Rack da sala", jaTem: true },
  { nome: "Ralador", jaTem: false },
  { nome: "Rede", jaTem: true },
  { nome: "Regador pequeno (500ml)", link: "https://shopee.com.br/product/372103398/23697383493", jaTem: false },
  { nome: "Repetidor de sinal Wi-Fi", jaTem: false },
  { nome: "Saladeira", jaTem: false },
  { nome: "Sanduicheira", jaTem: true },
  { nome: "Sanduicheira de fogão em alumínio", jaTem: true },
  { nome: "Tábua para cortar carne", jaTem: false },
  { nome: "Tapete da sala (2m x 2.5m sisal)", link: "https://br.shp.ee/DeySgdi", jaTem: false },
  { nome: "Tapete do quarto (2m x 1.5m sisal)", jaTem: false },
  { nome: "Taças", jaTem: true },
  { nome: "Tigela inox", jaTem: false },
  { nome: "Toalha de mesa", jaTem: false },
  { nome: "Toalha de mesa de renda", jaTem: true },
  { nome: "Travesseiro/almofada", jaTem: false },
  { nome: "Varal de chão", link: "https://shopee.com.br/Varal-De-Chão-Roupa-Calcinha-Grade-3-Andares-Dobr%C3%A1vel-Port%C3%A1til-i.325008325.21071530577", jaTem: false },
  { nome: "Vaso decorativo", jaTem: false },
  { nome: "Vasos", jaTem: false },
  { nome: "Ventilador de coluna", jaTem: false }
];
  
  const ul = document.getElementById("lista-presentes");

  presentes.forEach(presente => {
  const li = document.createElement("li");

  if (presente.jaTem) {
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.5";
  }

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