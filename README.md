# Informações pessoais
 
**Nome**
Leonardo Vinicius.
 
**Email**
lporchat06@gmail.com.

**Telefone**
(84)99981-2431.

# listagem de carros

**Requisitos Funcionais**
Deve ser possivel listar os carros disponiveis.
Deve ser possivel listar os carros disponiveis pela categoria.
Deve ser possivel listar os carros disponiveis pela marca.
Deve ser possivel listar os carros disponiveis pelo nome do carro.


**Regras de negocios**
Não deve esta logado para ver a listagem.

# Cadastro de Especificação no carro

**Requisitos Funcionais**
Deve ser possivel cadastrar uma especificação para um carro.
Deve ser possivel lista todas as especificações.
Deve ser possivel lista todos os carros

**Regras de negocios**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação ja existente no mesmo carro.
Para cadastrar tem que ser um usuario nivel ADM.

# Cadastro de Imagens do carro

**Requisitos Funcionais**
Deve ser possivel cadastrar uma imagem para um carro.
Deve ser possivel listar todos os carros.

**Regras Não Funcionais**
Utilizar o multer para fazer o upload da imagem;

**Regras de negocios**
deve ser possivel cadastrar mais de uma imagem para o mesmo carro
Para cadastrar tem que ser um usuario nivel ADM.


# Aluguel de carro

**Requisitos Funcionais**
Deve ser possivel cadastrar um Aluguel.


**Regras de negocios**
O aluguel deve ter no minimo 24 horas de duração.
Não deve ser possivel cadastrar um novo aluguel caso ja tenha um aberto para o usuario.
Não deve ser possivel cadastrar um novo aluguel caso ja tenha um aberto para o carro.
