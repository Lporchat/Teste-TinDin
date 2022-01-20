# Informações Pessoais
 
**Nome**
Leonardo Vinicius.
 
**Email**
lporchat06@gmail.com.

**Telefone**
(84)99981-2431.

# Implementação

**package Utilizados**
DotEnv - Para utilização de variaveis de ambiente para posteriormente dar deploy.
Express - Como Framework de desenvolvimento back-and.
Morgan - Para auxiliar os tipos de requisições e suas respotas na API.
Mongoose - Para conexão com o banco de dados não relacional.
jsonwebtoken - Para utilização de autenticação com JWT.

**Sistemas utilizados para deploy**
Atlas - Para a utilização do MongoDB de forma gratuita.

**Organização da aplicação**
Os arquivos foram separados de forma que cada um tem sua função e de fácil visualização.
A organização de pastas foi baseada na organização do TypeORM, pois acho ela mais confortável e eficiente.

**Desenvolvimento**
Ao principio inciei o desenvolvimento da aplicação fazendo a conexão com o bando de dados local e posteriormente com o Atlas.
Depois comecei a organizar as pastas de forma satisfatoria e que me desse liberdade para possíveis modificações.
Apos ter testado a conexão e terminado as pastas iniciei o desenvolvimento pela parte do usuário, com a parte de login de usuário e criação do mesmo.
Apos isso inicializei a parte de Classes de uma forma abrangente e deixar algumas nuances para serem implementadas na finalização do projeto.
Logo apos iniciei o ultimo modulo da aplicação que seria os comentarios de cada aula.
Por fim terminei as outras requisições de paginação com 50 listas em cada, a pesquisa de classes por "nome, description, date_init, date_end".


**Erros**
Por motivos de força maior infelizmente não conseguir implementar a parte de teste com o Jest, pois teria que refatorar quase toda a aplicação para tal adição, mas garanto que todas as funcionalidade foram testadas e estão funcionando em sua plenitude.

**Erros**
Por estar acostumando a usar TypeORM em meus projetos e banco de dados relacional, tive uma certa dificuldade inicial em montar a aplicação com um banco de dados não relacional, mas depois de um pouco de pesquisa acabei lembrando como utilizar a mesma.
Organizar a aplicação de forma satisfatoria a mim, utilizando as noções que tenho em banco de dados relacional.

**Adições feitas**
Fiz uma rota adicional para criação de usuário.
Modificações de algumas rotas para receber o ID via parametro e não via body.
Dar deploy em nuvem para teste da aplicação sem precisar complicar localmente e ja com uma base de dados.

# Rotas
**Abaixo segue todas as rotas e suas parametros**


**/user**
/login - GET - Necessário colocar no corpo da requisição o email e senha do usuário.
/create - POST - Necessário colocar no corpo da requisição o nome, email e senha do usuário cadastrado

**/classes**
/ - POST - Necessário colocar o token dado no login e informa no corpo da requisição o name, description, video, data_init, data_end da classe.
/ - GET - Necessário colocar o token dado no login, possível pesquisar por description, video, data_init, data_end, pode-se selecionar a paginação pelo page.
/:id - POST - Necessário colocar o token dado no login e  informa o ID da Classe.
/:id - PUT - Necessário colocar o token dado no login e informa o ID da Classe.

**/comments**
/ - POST - Necessário colocar o token dado no login e informa no corpo da requisição oId_class, comment do comentario.
/ - GET - Necessário colocar o token dado no login, possível pesquisar por description, video, data_init, data_end, pode-se selecionar a paginação pelo page.
/:id - POST - Necessário colocar o token dado no login, necessário informa o ID da Classe e é possível definir a paginação com o page.
/:id - DELETE - Necessário colocar o token dado no login e necessário informa o ID da Classe.

**Informações adicionis**
Utilizar o padrão YYYY-MM-DD para as datas.