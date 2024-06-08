
Teste para Desenvolvedor Full Stack - RBR Digital
Objetivo
Avaliar as habilidades do candidato em React, Next.js, Chakra UI, TypeScript, Node.js e MongoDB, pedindo para construir uma aplicação de dashboard simples.
Tarefa
Desenvolver um dashboard administrativo simples onde os usuários possam gerenciar uma lista de funcionários, incluindo a criação, leitura, atualização e exclusão de registros de funcionários.
Requisitos
1. Frontend:
   - Usar React com Next.js para o framework do front-end.
   - Usar Chakra UI para estilização e componentes de UI.
   - Usar TypeScript para garantir a segurança dos tipos.

2. Backend:
   - Usar Node.js com Express.js para o servidor back-end.
   - Usar MongoDB (Mongoose) para o banco de dados
Funcionalidades
1. Página Inicial do Dashboard:
   - Exibir uma tabela de funcionários com colunas para nome, cargo, departamento e ações (editar/excluir).
   - Incluir um botão para adicionar um novo funcionário.
   - Implementar funcionalidade de ordenação e busca na lista de funcionários.

2. Página de Adicionar Funcionário:
   - Um formulário para adicionar um novo funcionário com campos para nome, cargo, departamento e data de admissão.
   - Validar os campos do formulário antes de enviar.

3. Página de Editar Funcionário:
   - Um formulário para editar os detalhes de um funcionário existente.
   - Preencher o formulário com os detalhes atuais do funcionário.
   - Validar os campos do formulário antes de enviar.

4. API do Backend:
   - Implementar endpoints RESTful para operações CRUD:
     - `GET /api/employees` - Recuperar todos os funcionários.
     - `GET /api/employees/:id` - Recuperar um único funcionário pelo ID.
     - `POST /api/employees` - Criar um novo funcionário.
     - `PUT /api/employees/:id` - Atualizar um funcionário pelo ID.
     - `DELETE /api/employees/:id` - Excluir um funcionário pelo ID.

     
Detalhes Técnicos
1. Frontend:
   - Usar componentes do Chakra UI para elementos de formulário, botões, tabelas e layout.
   - Garantir que a aplicação seja responsiva.

2. Backend:
   - Usar Mongoose para interagir com o MongoDB.
   - Validar os dados antes de salvar no banco de dados.
   - Tratar erros de forma adequada e retornar os códigos de status HTTP apropriados.

3. Geral:
   - Escrever código limpo, legível e bem documentado.
   - Usar Git para controle de versão e submeter o projeto através de um repositório público no GitHub.
   - Incluir um arquivo README com instruções sobre como configurar e executar a aplicação.
Critérios de Avaliação
1. Funcionalidade: A aplicação atende aos requisitos e funciona corretamente?
2. Qualidade do Código: O código é limpo, bem estruturado e adequadamente documentado?
3. UI/UX: A interface do usuário é intuitiva e visualmente atraente?
4. Melhores Práticas: As melhores práticas são seguidas em termos de padrões de codificação, tratamento de erros e segurança?
5. Uso do Git: O controle de versão é usado de forma eficaz com mensagens de commit significativas?

Prazo
Os candidatos devem completar o teste em até 48 horas.
Submissão
- Inclua instruções no arquivo README sobre como configurar e executar a aplicação localmente.
