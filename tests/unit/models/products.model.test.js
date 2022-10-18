// const conn = require('../../../src/models/conection');
const { expect } = require('chai');
const { productsModel } = require('../../../src/models');
const { listAllProductsMock } = require('./mocks/products.model.mock');

describe('Camada Model', function () {
  it('Retorna lista de produtos', async function () {
    const response = await productsModel.findAll();
    expect(response).to.deep.equal(listAllProductsMock)
  });
  it('Retorna produto especifico', async function () {
    const response = await productsModel.findById(1);
    expect(response).to.deep.equal([listAllProductsMock[0]])
  });

});