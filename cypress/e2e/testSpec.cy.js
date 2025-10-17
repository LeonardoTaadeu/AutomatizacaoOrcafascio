
import {dados} from '../fixtures/dadosBancos.js';
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

            const nomeEtapas = ['SERVIÇOS PRELIMINARES', 'FUNDAÇÕES', 'PAV-1', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-2', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-3', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-4', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-5', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-6', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-7', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-8', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-9', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-10', 'PISOS', 'PAREDES', 'ESQUADRIAS']

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

            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)

                cy.wrap(dados).each((item) => {
                    cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
                    cy.get('.td_qty > .form-control').type('1')
                    cy.get('.td_code > .form-control').type(item.codigoSinapi)
                    cy.get('.td_itemization > .form-control').clear()
                    cy.get('.td_itemization > .form-control').type(item.itemizacaoSinapi)
                    cy.get('[id^=tr_ml]').click()
                    cy.get('.td_code > .form-control').type('{enter}')
                })

            cy.wait(1000)
            cy.get('#th_items_selection').click()
            cy.contains('a', '105400').rightclick()
            cy.get('.items_delete_all > .bg-resource').click()
        })

        it('Entrando em Composições dentro do banco do sistema', () => {
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