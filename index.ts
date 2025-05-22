import Descritor from './Descritor';
import Empresa from './Empresa';
import Endereco from './Endereco';
import Funcionario from './Funcionario';
import Telefone from './Telefone';

const endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
const telefone = new Telefone('011', '9-9999-9999');
const funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone);
const funcionarios = [funcionario];
const empresa = new Empresa(funcionarios, endereco, 'ABC LTDA', 'Mercado online', '999-999-999-999-99');

const descritor = new Descritor();
descritor.descrever(empresa); 