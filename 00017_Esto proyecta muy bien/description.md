Ana realiza muchas proyecciones sobre los balances de su empresa, por lo que le dijimos que podíamos darle una mano ahora que sabemos mapear. Lo que le interesa hacer es poder ver cuáles serían las ganancias de un balance si todas hubieran sido del doble :moneybag:. Por ejemplo:

``` javascript
ム let balancesUltimoSemestre = [
	{ mes: "julio", ganancia: 50 }, 
	{ mes: "agosto", ganancia: -12 }, 
	{ mes: "septiembre", ganancia: 1000 }, 
	{ mes: "octubre", ganancia: 300 }, 
	{ mes:  "noviembre", ganancia: 200 }, 
	{ mes: "diciembre", ganancia: 0 }
]

ム dobleDeGanancias(balancesUltimoSemestre)
[100, -24, 2000, 600, 400, 0]
```

Como verás, si las ganancias fueran negativas ahora serán ¡doblemente negativas! :chart_with_downwards_trend:

> Definí la función `dobleDeGanancias`. Podés utilizar tanto `for...of` como `map`, lo que vos prefieras. :relaxed: