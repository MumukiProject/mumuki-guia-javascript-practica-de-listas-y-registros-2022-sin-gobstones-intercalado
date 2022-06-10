describe("", function(){
  it("gananciaTotal de balances del primer trimestre es -8", function() {
    assert.equal(gananciaTotal([{ mes: "enero", ganancia: 2 }, { mes: "febrero", ganancia: 10 }, { mes: "marzo", ganancia: -20 }]), -8)
  })
  
  it("gananciaTotal de balances del ultimo semestre es 1538", function() {
    assert.equal(gananciaTotal([{ mes: "julio", ganancia: 50 }, { mes: "agosto", ganancia: -12 }, { mes: "septiembre", ganancia: 1000 }, { mes: "octubre", ganancia: 300 }, { mes:  "noviembre", ganancia: 200 }, { mes: "diciembre", ganancia: 0 }]), 1538)
  })
})