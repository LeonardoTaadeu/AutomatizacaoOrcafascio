
import {dadosSinapi, dadosBancosOficiais, compTipoSicro, compTipoSinapi, nomeEtapaOrcamento} from '../fixtures';

describe('Teste Automatizado da Orcafascio', () => {
    context('Realizacao de Testes do sistema', () => {
        beforeEach(() => {
            cy.sessionLogin()
            cy.visit('/home')
            cy.viewport(1280, 720) //Configuração do tamanho da tela //
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
         return false
        })

        it('Entrando nas composicoes de bancos oficiais e copiando elas', () => {
            cy.wrap(compTipoSinapi).each((bancoCompSinapi) => {
                cy.get(':nth-child(3) > .with-sub').click()
                cy.get(':nth-child(3) > .nav-sub > :nth-child(1) > .nav-link').click()
                cy.get('.blue-box').click()
                cy.get('#unselect-all-checkboxes').click()
                cy.get(`[name="bases[${bancoCompSinapi.nomeBancoSinapi}][selected]"]`).click()
                cy.get('#submit-btn-modal').click()
                cy.get(':nth-child(1) > .pagination-custom > #nav-page-items > #nav-page-2').click()
                cy.get(':nth-child(9) > .codigo > .link-codigo > a').click()
                cy.get('.headmenu > :nth-child(1) > a').click()
                cy.get('.btn-primary').click()
                cy.get(':nth-child(2) > #navbarDropdown').click({force: true})
                cy.get('[data-confirm="Você tem certeza que quer Apagar esta Composição?"]').click()
            })

             cy.wrap(compTipoSicro).each((bancoCompSicro) => {
                cy.get(':nth-child(3) > .with-sub').click()
                cy.get(':nth-child(3) > .nav-sub > :nth-child(1) > .nav-link').click()
                cy.get('.blue-box').click()
                cy.get('#unselect-all-checkboxes').click()
                cy.get(`[name="bases[${bancoCompSicro.nomeBancoSicro}][selected]"]`).click()
                cy.get('#submit-btn-modal').click()
                cy.get(':nth-child(1) > .pagination-custom > #nav-page-items > #nav-page-2').click()
                cy.get(':nth-child(9) > .codigo > .link-codigo > a').click()
                cy.get('.headmenu > :nth-child(1) > a').click()
                cy.get('.btn-primary').click()
                cy.get(':nth-child(1) > .dropdown-toggle').click()
                cy.get('.open > .dropdown-menu > :nth-child(4) > a').click()
            })
        })

        it('Criando uma composicao propria com todos bancos (SINAPI - TRUNCAR - MAO DE OBRA)', () => {
            cy.get(':nth-child(3) > .with-sub').click()
            cy.get(':nth-child(3) > .nav-sub > :nth-child(2) > .nav-link').click()
            cy.get('[name="banco_emp_composicao[codigo]"]').clear()
            cy.get('[name="banco_emp_composicao[codigo]"]').type('Teste Composicao Automatizada SINAPI 1')
            cy.get('[name="banco_emp_composicao[c2]"]').type('Teste Composicao Automatizada SINAPI 1')
            cy.get('[name="banco_emp_composicao[descricao]"]').type('Teste Composicao Automatizada SINAPI 1')
            cy.get('[name="banco_emp_composicao[unidade]"]').type('m2')
            cy.get('#banco_emp_composicao_mao_de_obra').click()
            cy.get('[name="banco_emp_composicao[observacao]"]').type('Teste Composicao Automatizada SINAPI 1')
            cy.get('.justify-content-end > .btn').click()
            cy.get('#nacional-coverage').click()
            cy.get('#sudeste-coverage').click()
            cy.get('#nordeste-coverage').click()
            cy.get('#centro-oeste-coverage').click()
            cy.get('#norte-coverage').click()
            cy.get('#sul-coverage').click()
            cy.get('[name="commit"]').click()
        })
    })
})