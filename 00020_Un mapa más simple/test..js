describe("", function(){
  it("meses devuelve los meses de los balances de un trimestre", function() {
    assert.deepEqual(meses([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: 2 }, { mes: "marzo", ganancia: 5 }]), ["enero", "febrero", "marzo"])
  })
  it("meses devuelve los meses de los balances de un semestre", function() {
    assert.deepEqual(meses([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: 2 }, { mes: "marzo", ganancia: 5 }, { mes: "abril", ganancia: 8 }, { mes: "mayo", ganancia: 12 }, { mes: "junio", ganancia: 25 }]), ["enero", "febrero", "marzo", "abril", "mayo", "junio"])
  })
})