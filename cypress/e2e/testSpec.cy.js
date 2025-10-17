describe('Teste de códigos do Cypress', () => {
    context('Teste de Códigos do Cypress2', () => {
        beforeEach(() => {
            cy.sessionLogin()
            cy.visit('/home')
            cy.viewport(1280, 720) //Configuração do tamanho da tela
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
         return false
         })

         it('Criando Etapas de um orçamento', () => {

            const nomeEtapas = ['Serviços Preliminares', 'Pisos', 'Paredes', 'Esquadrias', 'PAV-2', 'Pisos', 'Paredes', 'Esquadrias']

            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)

            cy.wrap(nomeEtapas).each((etapas) => {
                cy.get('.add_phase_end').click()
                cy.get('.td_descr > .form-control').type(etapas)
                cy.get('.salvar_new_etapa > .material-icons').click()
            })
        })

        it('Criando laço de repetição com array forEach', () => {

            const itensSinapi = ['105400', '105263', '105261', '105261', '92805', '94882', '90729', '90729']
            const itemizacao = ['1.1', '1.2', '1.3', '2.1', '2.2', '2.3', '3.1', '3.2']

            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)

            cy.wrap(itensSinapi).each((itens, index) => {
                    cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
                    cy.get('.td_qty > .form-control').type('1')
                    cy.get('.td_code > .form-control').type(itens)
                    cy.get('.td_itemization > .form-control').clear()

                    const codItemizacao = itemizacao[index] || '1';
                    cy.get('.td_itemization > .form-control').type(codItemizacao)

                    cy.get('[id^=tr_ml]').click()
                    cy.get('.td_code > .form-control').type('{enter}')
            })

            cy.wait(1000)
            cy.get('#th_items_selection').click()
            cy.contains('a', '105400').rightclick()
            cy.get('.items_delete_all > .bg-resource').click()
        })

        it.only('Entrando em Composições dentro do banco do sistema', () => {
            const bancosComposicoes = ['#sbc_checkbox', '#sinapi_checkbox', '#sicro_checkbox']
            const seletorBanco = bancosComposicoes[0];

            cy.wrap(bancosComposicoes).each((bancos) => {
                cy.get('.sh-logopanel').click()
                cy.get(':nth-child(3) > .with-sub').click()
                cy.get(':nth-child(3) > .nav-sub > :nth-child(1) > .nav-link').click()
                cy.get('.blue-box').click()
                cy.get('#unselect-all-checkboxes').click()
                cy.get(seletorBanco).click()
                cy.get('#submit-btn-modal').click()
                cy.get(':nth-child(2) > .codigo > .link-codigo > a').click()
                cy.go('back')
                cy.get('#submit-btn').click
                cy.get(':nth-child(3) > .codigo > .link-codigo > a').click()
                cy.go('back')
                cy.get('#submit-btn').click()
                cy.get(':nth-child(4) > .codigo > .link-codigo > a').click()
                cy.go('back')
                cy.get('#submit-btn').click()
                cy.get(':nth-child(5) > .codigo > .link-codigo > a').click()
                cy.go('back')
                cy.get('#submit-btn').click()
                cy.get(':nth-child(6) > .codigo > .link-codigo > a').click()
                cy.go('back')
                cy.get('#submit-btn').click()
                cy.get(':nth-child(7) > .codigo > .link-codigo > a').click()
                cy.go('back')
                cy.get('#submit-btn').click()
            })

        })
        
    })
})