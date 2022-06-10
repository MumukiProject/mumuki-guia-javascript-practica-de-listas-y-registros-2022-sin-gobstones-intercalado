Así como podíamos hacer mapeos utilizando utilizando `map`, también podemos hacer filtrados, y... ¿qué nos servirá para ello? ¡`filter`!. :open_hands:

Imaginemos que tenemos la función `mayoresA5` que dada una lista de números nos retorna una nueva con aquellos que son mayores a 5:

``` javascript
function mayoresA5(numeros){
  let mayores = [];
  
  for (let numero of numeros){
    if (numero > 5){
      mayores.push(numero)
    }
  }
  return mayores;
}
```

Otra manera de definirla sería haciendo:

``` javascript
function mayoresA5(numeros){
  return numeros.filter(numero => numero > 5);
}
```

> Redefiní la función `afortunados` para que haga lo mismo pero utilizando `filter`.