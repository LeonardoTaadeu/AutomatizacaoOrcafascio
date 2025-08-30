let codComposicao = 1;

describe('Usuários devem realizar o login', () => {
  context('Login de Usuários', () => {
    beforeEach(() => {
      codComposicao++,
      cy.sessionLogin()
      cy.visit('/home')
      cy.viewport(1280, 720) //Configuração do tamanho da tela
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Criando Etapas no orçamento', () => { //Login com senha correta
      cy.visit('orc/orcamentos/688cafbb04184fb8b083ad95') //Em Producao: 688cafbb04184fb8b083ad95       Em Teste:68af5bbecab727f01b964938 
      cy.wait(1000)
      cy.get('.add_phase_end').click()

      cy.get('.td_descr > .form-control').type('Serviços Preliminares')
      cy.get('.salvar_new_etapa > .material-icons').click()
      cy.wait(1000)
      cy.get('.add_phase_end').type('Fundações')
      cy.get('.salvar_new_etapa > .material-icons').click()
      cy.wait(1000)
      cy.get('.add_phase_end').type('PAV - 1')
      cy.get('.salvar_new_etapa > .material-icons').click()
      
      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('3.1')
      cy.get('.salvar_new_etapa > .material-icons').click()
      
      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('3.2')
      cy.get('.salvar_new_etapa > .material-icons').click()
      
      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('3.3')
      cy.get('.salvar_new_etapa > .material-icons').click()
      
      cy.get('.add_phase_end').type('PAV - 2')
      cy.get('.salvar_new_etapa > .material-icons').click()
      
      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('4.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('4.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('4.3')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('PAV - 3')
      cy.get('.salvar_new_etapa > .material-icons').click()
      
      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('5.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('5.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('5.3')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('PAV - 4')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('6.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('6.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('6.3')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('PAV - 5')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('7.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('7.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('7.3')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('PAV - 6')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('8.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('8.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('8.3')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('PAV - 7')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('9.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('9.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('9.3')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('PAV - 8')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Pisos')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('10.1')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Paredes')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('10.2')
      cy.get('.salvar_new_etapa > .material-icons').click()

      cy.get('.add_phase_end').type('Esquadrias')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('10.3')
      cy.get('.salvar_new_etapa > .material-icons').click()
    })

    it.only('Adicionando Composições no Orçamento', () => {
      cy.visit('orc/orcamentos/688cafbb04184fb8b083ad95') //ALTERAR ID DO ORCAMENTO
      cy.wait(1000)

      //000662
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('SBC')
      cy.get('.td_code > .form-control').type('000662')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('1.1')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('#tr_ml_6867ea926ba5e2591167dc5a > :nth-child(4)')
      cy.get('[id^=tr_ml]').click()
      cy.get('.td_code > .form-control').type('{enter}')

      //73859
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('SINAPI')
      cy.get('.td_code > .form-control').type('73859')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('1.2')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('#tr_ml_550e3e78666162695c41a300 > :nth-child(4)').click()
      cy.get('.td_code > .form-control').type('{enter}')

      //98458
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('SINAPI')
      cy.get('.td_code > .form-control').type('98458')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('1.3')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('[id^=tr_ml]').click()
      cy.get('.td_code > .form-control').type('{enter}')

      //98681
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('SBC')
      cy.get('.td_code > .form-control').type('011094')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('2.1')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('[id^=tr_ml]').click()
      cy.get('.td_code > .form-control').type('{enter}')

      //15.05.520
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('CPOS')
      cy.get('.td_code > .form-control').type('15.05.520')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('2.2')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('[id^=tr_ml]').click()
      cy.get('.td_code > .form-control').type('{enter}')

      //89488
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('SINAPI')
      cy.get('.td_code > .form-control').type('89488')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('2.3')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('[id^=tr_ml]').click()
      cy.get('.td_code > .form-control').type('{enter}')

      //89488
      cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
      cy.get('#select_input_bases').select('SBC')
      cy.get('.td_code > .form-control').type('011094')
      cy.get('.td_itemization > .form-control').clear()
      cy.get('.td_itemization > .form-control').type('3.1')
      cy.get('.td_qty > .form-control').type('1')
      cy.get('[id^=tr_ml]').click()
      cy.get('.td_code > .form-control').type('{enter}')
      })
  })
})