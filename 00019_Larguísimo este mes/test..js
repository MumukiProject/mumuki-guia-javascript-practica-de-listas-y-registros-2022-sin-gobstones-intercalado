describe("", function(){   
  it("los balancesDeMesesLargos del primer semestre retorna los balances de enero marzo y mayo", function() {
  	assert.deepEqual(balancesDeMesesLargos([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: -200 }, { mes: "marzo", ganancia: 500 }, { mes: "abril", ganancia: 800 }, { mes: "mayo", ganancia: 770 }, { mes: "junio", ganancia: 870 }]), [{ mes: "enero", ganancia: 1000 }, { mes: "marzo", ganancia: 500 }, { mes: "mayo", ganancia: 770 }])
  })

  it("los balancesDeMesesLargos del ultimo semestre retorna los balances de julio agosto octubre y diciembre", function() {
  	assert.deepEqual(balancesDeMesesLargos([{ mes: "julio", ganancia: 500 }, { mes: "agosto", ganancia: 900 }, { mes: "septiembre", ganancia: 1800 }, { mes: "octubre", ganancia: 900 }, { mes: "noviembre", ganancia: 2300 }, { mes: "diciembre", ganancia: 2000 }]), [{ mes: "julio", ganancia: 500 }, { mes: "agosto", ganancia: 900 }, { mes: "octubre", ganancia: 900 }, { mes: "diciembre", ganancia: 2000 }])
  })

  it("los balancesDeMesesLargos del primer trimestre retornan los balances de enero y marzo", function() {
  	assert.deepEqual(balancesDeMesesLargos([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: -200 }, { mes: "marzo", ganancia: 500 }]), [{ mes: "enero", ganancia: 1000 }, { mes: "marzo", ganancia: 500 }])
  })

  it("los balancesDeMesesLargos del segundo trimestre retorna el balance de mayo", function() {
  	assert.deepEqual(balancesDeMesesLargos([{ mes: "abril", ganancia: 800 }, { mes: "mayo", ganancia: 770 }, { mes: "junio", ganancia: 870 }]), [{ mes: "mayo", ganancia: 770 }])
  })
})