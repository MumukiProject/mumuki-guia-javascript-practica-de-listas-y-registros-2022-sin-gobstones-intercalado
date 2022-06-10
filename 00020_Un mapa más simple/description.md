En el ejercicio anterior hicimos un mapeo utilizando `for...of`. En JavaScript contamos con otra forma de hacer eso ¡`map`! :star_struck:

Veamos cómo funciona, si a partir de una lista de strings quisieramos obtener una lista con los largos de cada uno, podríamos definir:

``` javascript
function largos(palabras){
  let largos = []
  for (let palabra of palabras){
    largos.push(palabra)
  }
  return largos
}
```

Sin embargo, también podríamos hacerlo de esta manera utilizando `map`:

``` javascript
function largos(palabras){
  return palabras.map(palabra => palabra.length)
}
```

> Redefiní la función `meses` para que haga lo mismo que antes pero utilizando map. 