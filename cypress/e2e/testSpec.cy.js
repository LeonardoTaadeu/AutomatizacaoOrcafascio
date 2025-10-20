
import {dadosSinapi, dadosItemizacao} from '../fixtures';
describe('Teste de códigos do Cypress', () => {
    context('Teste de Códigos do Cypress2', () => {
        beforeEach(() => {
            cy.sessionLogin()
            cy.visit('/home')
            cy.viewport(1280, 720) //Configuração do tamanho da tela //
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
         return false
         })

         it('Criando um novo orcamento', () => {
            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('[href="/orc/orcamentos/new"] > div').click()
            cy.get(':nth-child(3) > .radio-label > [name="orc_orcamento[version_2023]"]').click()
            cy.get('[name="orc_orcamento[codigo]"]').clear()
            cy.get('[name="orc_orcamento[codigo]"]').type('Teste Orçamento 123456789 Automatizado')
            cy.get('[name="orc_orcamento[descricao]"]').type('Teste Orçamento 123456789 Automatizado')
            cy.get('[name="orc_orcamento[cliente_id]"]').select('Leonardo')
            cy.get('[name="orc_orcamento[standard_category_name]"]').select('Outros')
            cy.get('[name="orc_orcamento[custom_category_name]"]').type('Teste Automatizado')
            cy.get('[name="orc_orcamento[validity]"]').type('2026-07-20T08:20')
            cy.get('#orc_orcamento_insumos_zerados').click()
            cy.get('[name="commit"]').click()
            cy.get('[name="commit"]').click()

            const nomeBancos = ['SBC', 'SICRO3', 'SIURB', 'SIURB INFRA', 'FDE', 'CPOS', 'EMOP', 'SCO', 'SETOP', 'SUDECAP', 'IOPES', 'ORSE', 'SEINFRA', 'CAEMA', 'EMBASA', 'CAERN', 'COMPESA', 'AGESUL', 'AGETOP CIVIL', 'AGETOP RODOVIARIA', 'SEDOP', 'DERPR']
            cy.wrap(nomeBancos).each((selecionandoBanco) => {
                cy.get(`[name="${selecionandoBanco}_exibir_relatorio"]`).check({force: true})
            })

            cy.get(':nth-child(55) > .col > .right > [name="commit"]').click()
         })

         it('Criando Etapas de um orçamento', () => {

            const nomeEtapas = ['SERVIÇOS PRELIMINARES', 'FUNDAÇÕES', 'PAV-1', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-2', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-3', 'PISOS', 'PAREDES', 'ESQUADRIAS', 'PAV-4']

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

        it('Adicionando as composições dentro do orçamento', () => {

            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(2000)

                cy.wrap(dadosSinapi).each((item) => {
                    cy.get(':nth-child(2) > .dropdown > .add_item_end').click()
                    cy.get('.td_qty > .form-control').type('1')
                    cy.get('.td_code > .form-control').type(item.codigoSinapi)
                    cy.get('#select_input_bases').select(item.bancoSinapi)
                    cy.get('.td_itemization > .form-control').clear()
                    cy.get('.td_itemization > .form-control').type(item.itemizacaoSinapi)
                    cy.get('[id^=tr_ml]').click({multiple: true})
                    cy.get('.td_code > .form-control').type('{enter}')
                })
        })


        it('Aplicação de BDI', () =>{
            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)   
            cy.get('#budget_config_bdi > th.tx-right > a').click()
            cy.wait(1000)
            cy.get('#bdi_manual').click()
            cy.wait(1000)
            cy.get('#\\30 ').type('25\,01')
            cy.wait(1000)
            cy.get('.form-bdi > .modal-content > .modal-footer > .btn-primary').click()
        })

        it('Retirando BDI', () => {
            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)
            cy.get('#budget_config_bdi > th.tx-right > a').click()
            cy.get('#\\30 ').clear()
            cy.get('.form-bdi > .modal-content > .modal-footer > .btn-primary').click()
        })

        it('Apagando os itens do orçamento', () => {
            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)
            cy.get('#th_items_selection').click()
            cy.contains('a', '103155').rightclick()
            cy.get('.items_delete_all > .bg-resource').click()
        })

        it('Apagando o orçamento inteiro', () => {
            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)
            cy.get(':nth-child(2) > #navbarDropdown').click({force: true})
            cy.get('[data-target="#modal-budget-exclusion"]').click()
            cy.wait(1000)
            cy.get('[name="texto_de_exclusao"]').type('excluir')
            cy.get('#modal-budget-exclusion > .modal-dialog > .modal-content > .modal-footer > .btn').click()
         })
    })
})