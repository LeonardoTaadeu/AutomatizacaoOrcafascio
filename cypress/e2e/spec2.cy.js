describe('Usuários devem realizar o login', () => {
  context('Login de Usuários', () => {
    beforeEach(() => {
      cy.viewport(1280, 720) //Configuração do tamanho da tela
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Logando e Criando Orçamento versão nova', () => {
      cy.visit('/home')
      cy.get('#email').click()
      cy.get('#email').type('leonardo.pedrobr@gmail.com')
      cy.get('#senha').click()
      cy.get('#senha').type('T@deu123456')
      cy.get('#bottom-wizard > .submit').click()
      cy.wait(2000)
      cy.get('.modal-header > .close > span').click()
      cy.get(':nth-child(2) > .with-sub').click()
      cy.get(':nth-child(2) > .nav-sub > :nth-child(2) > .nav-link').click()
      cy.get('#orc_orcamento_version_2023_true').click()
      cy.get('#orc_orcamento_descricao').click()
      cy.get('#orc_orcamento_descricao').type('TESTE 1') // Texto da descrição da criação de um orçamento
      cy.get('#orc_orcamento_cliente_id').click()
    })
  })
})