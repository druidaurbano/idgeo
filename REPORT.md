### Objetivo 4

Para resolver o objetivo 3 usei uma Promise para pegar os dados de `data.json` no método `renderPoints()` dentro de `models.js` que renomeei para `renderAllPoints()`,
atarvés dele eu carrego todos os pontos no início da execução da aplicação e posteriormente quando o botão `Mostrar todos`for clicado.

O evento de clique já estava configurado então eu o utilizei para disparar o evento 
da mudança de pontos mostrados no mapa, criei três métodos a mais para me auxiliar no
funcionamento correto da aplicação

# renderOutsidePoints()
    usei para verificar os pontos que estavam fora da borda do mapa definido

# renderInsidePoints()
    usei para verificar os pontos que estavam dentro da borda do mapa definido

Quero ressaltar:
`A comparação foi feita primeiramente de forma manual, pois precisava ver primeiro funcionando para que em seguida eu utilizasse o método contains(point), sendo assim a utilização dele eu adicionaria como implementação futura, para que tivesse dinamismo ágil na hora de alterar o bounding box do mapa sem precisar alterar de forma manual método por método`

# erasePoint()
    utilizado para remover todos os pontos que contenham a tag <circle> no documento html

Dadas essas informações a minha linha de raciocínio foi primeiro tornar os pontos não desejados invisíveis(trocando o atributo `fill` para a cor correspondente do `background-color`), fiz essa implementação, porém resolvia apenas visualmente, os dados estavam sendo carregados sempre, sendo assim na parte de gerencimaneto desses dados não fazia sentido, então resolvi remover os nós filho `<circle>` do objeto `<svg>` criado atarvés do método `erasePoint()`, ele sempre é executado quando o botão é clicado, para que ao fazer uma requisição no `data.json` sejam criados apenas os pontos das opções de botão correspondente.