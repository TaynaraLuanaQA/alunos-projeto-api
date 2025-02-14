const request = require('supertest');
const urlApi = process.env.URL_BASE;

describe('Suite de testes de api - para validar consulta de produtos. (FLUXO SUCESSO)', ()=>{
    it('CE01: Consultando todos os produtos cadastrados com sucesso. É esperado retornar 200', async()=>{
        const resposta = await request(urlApi).get('/products');
        expect(resposta.statusCode).toBe(200);
        console.log('O status da requisição retornou: ',resposta.statusCode)
    });

    it('CE02: Consultando todos os produtos cadastrados com sucesso. Deve validar que foi retornado um array de objetos.', async()=>{
        const resposta = await request(urlApi).get('/products');
        expect(resposta.statusCode).toBe(200);
        expect(Array.isArray(resposta.body)).toBe(true);

        console.log('O status da requisição retornou: ',resposta.statusCode);
        console.log('A resposta da requisição retornou o seguinte body: ', resposta.body);
    });
})