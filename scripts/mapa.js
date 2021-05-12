function Mapa() {}

 Mapa.ground= 0;
 Mapa.wall= 1;
 Mapa.player= 2;

 Mapa.colunas= 16;
 Mapa.linhas= 16;

 Mapa.size= 16;

Mapa.atual= null;

Mapa.carregar= function(canvas) {

    Mapa.atual= [];

    let y, x;

    for(y = 0; y < mapaMask.length; y++) {

        Mapa.atual.push(mapaMask[y].slice(0));

    }

    Mapa.linhas= Mapa.atual.length;
    Mapa.colunas= Mapa.atual[0].length;
    canvas.width= Mapa.colunas * Mapa.size;
    canvas.height= Mapa.linhas * Mapa.size;

}
