import { CPF } from '../src/CPF';

let cpf:CPF;

beforeEach(() =>{
    cpf = new CPF();
})

test("Deve retornar false quando for passado um CPF com todos os dígitos iguais!", function (){
    expect(cpf.validate('111.111.111-11')).toBeFalsy();
});

test("Deve retornar true quando for passado um CPF válido!", function (){
    expect(cpf.validate('554.624.620-00')).toBeTruthy();
});

test("Deve retornar false quando for passado um CPF inválido!", function (){
    expect(cpf.validate('123.123.789-11')).toBeFalsy();
});

test("Deve retornar false quando for passado um NULL!", function (){
    expect(cpf.validate(null)).toBeFalsy();
});

test("Deve retornar false quando for passado undefined!", function (){
    expect(cpf.validate(undefined)).toBeFalsy();
});

test("Deve retornar false quando for passado um CPF com mais de 11 números!", function (){
    expect(cpf.validate('018.777.115-1515515')).toBeFalsy();
});

test("Deve retornar false quando for passado um CPF com menos de 11 números!", function (){
    expect(cpf.validate('018.777.11')).toBeFalsy();
});