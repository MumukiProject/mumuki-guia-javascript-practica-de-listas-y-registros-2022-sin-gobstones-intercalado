describe("", function(){
  it("mesesAfortunados devuelve los meses cuyos balances son mayores a 1000", function() {
    assert.deepEqual(mesesAfortunados([{ mes: "enero", ganancia: 1001 }, { mes: "febrero", ganancia: -10 }, { mes: "marzo", ganancia: 2300 }, { mes: "abril", ganancia: 800 }]), ["enero", "marzo"])
  })


  it("mesesAfortunados devuelve una lista vacia si no hubo balances afortunados", function() {
    assert.deepEqual(mesesAfortunados([{ mes: "enero", ganancia: 999 }, { mes: "febrero", ganancia: -10 }, { mes: "marzo", ganancia: 20 }, { mes: "abril", ganancia: 800 }]), [])
  })
})