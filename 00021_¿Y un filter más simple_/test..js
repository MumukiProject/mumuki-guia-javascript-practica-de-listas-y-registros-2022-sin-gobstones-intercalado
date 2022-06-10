describe("", function(){   
  it("afortunados devuelve los balances cuya ganancia es mayor a 1000", function() {
    assert.deepEqual(afortunados([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: 2000 }, { mes: "marzo", ganancia: 2500 }, { mes: "abril", ganancia: 1001 }, { mes: "mayo", ganancia: 0 }, { mes: "junio", ganancia: -25 }]), [{ mes: "febrero", ganancia: 2000 }, { mes: "marzo", ganancia: 2500 }, { mes: "abril", ganancia: 1001 }])
  })

  it("afortunados devuelve una lista vacia si ningun balance tiene ganancia mayor a 1000", function() {
    assert.deepEqual(afortunados([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: 0 }, { mes: "marzo", ganancia: 200 }, { mes: "abril", ganancia: -30 }]), [])
  })
})