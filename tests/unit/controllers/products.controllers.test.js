// const conn = require('../../../src/models/conection');
const { expect } = require('chai');
const chai = require('chai');
// const sinon = require('sinon');
const chaiHttp = require('chai-http');
// const sinonChai = require('sinon-chai');
const { productsController  } = require('../../../src/controllers');
const { listAllProductsMock } = require('./mocks/products.model.mock');
const app = require('../../../src/app');

// chai.use(sinonChai);
chai.use(chaiHttp);


describe('Camada Model', function () {
  it('Retorna lista de produtos', async function () {
    const response = await chai.request(app).get('/products')
    expect(response.body).to.deep.equal(listAllProductsMock)
  });
  it('Retorna produto especifico', async function () {
    const response = await chai.request(app).get('/products/1')
    expect(response.body).to.deep.equal(listAllProductsMock[0])
  });

});