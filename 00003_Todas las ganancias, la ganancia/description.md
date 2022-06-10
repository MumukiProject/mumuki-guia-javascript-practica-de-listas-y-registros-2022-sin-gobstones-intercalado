Ana, contadora de una conocida empresa :office:, tiene registros para representar los balances de cada mes y distintas listas para guardarlos. Por ejemplo:

```javascript
//En julio ganó $50, en agosto perdió $12, etc.
let balancesUltimoSemestre = [
	{ mes: "julio", ganancia: 50 }, 
	{ mes: "agosto", ganancia: -12 }, 
	{ mes: "septiembre", ganancia: 1000 }, 
	{ mes: "octubre", ganancia: 300 }, 
	{ mes:  "noviembre", ganancia: 200 }, 
	{ mes: "diciembre", ganancia: 0 }
]

let balancesPrimerTrimestre = [
	{ mes: "enero", ganancia: 2 }, 
	{ mes: "febrero", ganancia: 10 }, 
	{ mes: "marzo", ganancia: -20 }
]
```

Dicho esto, Ana necesita saber la ganancia acumulada de un conjunto de balances.

> Definí la función `gananciaTotal` que dado una lista de balances cualquiera nos devuelva la suma de todas:
>
```python
ム gananciaTotal(balancesUltimoSemestre)
1538
```