describe("", function(){
  it("el dobleDeGanancias de una lista de balances retorna el doble de sus ganancias", function() {
    assert.deepEqual(dobleDeGanancias([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: -200 }, { mes: "marzo", ganancia: 500 }]), [2000, -400, 1000])
  })

  it("el dobleDeGanancias de una lista de balances negativos retorna una lista de numeros negativos el doble de los negativos", function() {
    assert.deepEqual(dobleDeGanancias([{ mes: "enero", ganancia: -1000 }, { mes: "febrero", ganancia: -200 }, { mes: "marzo", ganancia: -500 }]), [-2000, -400, -1000])
  })

  it("el dobleDeGanancias de una lista de balances con ganancia cero retorna una lista de ceros", function() {
    assert.deepEqual(dobleDeGanancias([{ mes: "enero", ganancia: 0 }, { mes: "febrero", ganancia: 0 }]), [0, 0])
  })
})