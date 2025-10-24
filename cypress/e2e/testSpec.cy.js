
import {dadosSinapi, dadosBancosOficiais, compTipoSicro, compTipoSinapi, nomeEtapaOrcamento, siglaEstados} from '../fixtures';

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

        it('Criar um novo orçamento', () => {
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

            cy.wrap(dadosBancosOficiais).each((selecionandoBanco) => {
                cy.get(`[name="${selecionandoBanco.nomeBanco}_exibir_relatorio"]`).check({force: true})
            })

            cy.get(':nth-child(55) > .col > .right > [name="commit"]').click()
        })

        it('Criar novas etapas em um orçamento', () => {
            cy.get('.sh-logopanel').click()
            cy.get(':nth-child(2) > .with-sub').click()
            cy.get(':nth-child(2) > .nav-sub > :nth-child(1) > .nav-link').click()
            cy.get('#filtro_text').type('Teste')
            cy.contains('Teste Orçamento').click()
            cy.wait(1000)

            cy.wrap(nomeEtapaOrcamento).each((etapas) => {
                cy.get('.add_phase_end').click()
                cy.get('.td_descr > .form-control').type(etapas.nomeEtapa)
                cy.get('.salvar_new_etapa > .material-icons').click()
            })
        })

        it('Adicionar as composições dentro do orçamento', () => {
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


        it('Aplicar BDI', () =>{
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

        it('Retirar BDI', () => {
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

        it('Apagar os itens do orçamento', () => {
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

        it('Apagar o orçamento inteiro', () => {
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

        it('Entrar nas composicoes de bancos oficiais e copiar elas', () => {
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

        it('Criar uma composicao propria com todos bancos (SINAPI - TRUNCAR - MAO DE OBRA)', () => {
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
            cy.get('div.dropdown:nth-of-type(1) #navbarDropdown i.head-icon').click({force: true});
            cy.get('a[data-confirm="Você tem certeza que quer Apagar esta Composição?"]').click();
        })        

        it.only('Criar um insumo próprio', () => {
            cy.get('a[title="Insumos"]').click();
            cy.get('li:nth-child(4) li:nth-child(2) a.nav-link').click();
            cy.get('button.btn-outline-secondary').click();
            cy.get('[name="banco_insumo_grupo[descricao]"]').click();
            cy.wait(500)
            cy.get('[name="banco_insumo_grupo[descricao]"]').type('Teste de alteração Insumos 1');
            cy.get('#new_grupo_form button.btn').click();
            cy.get('[name="banco_emp_insumo[codigo]"]').click();
            cy.get('[name="banco_emp_insumo[codigo]"]').clear();
            cy.get('[name="banco_emp_insumo[codigo]"]').type('1205453');
            cy.get('[name="banco_emp_insumo[descricao]"]').click();
            cy.get('[name="banco_emp_insumo[descricao]"]').type('Teste de alteração Insumos 1');
            cy.get('[name="banco_emp_insumo[unidade]"]').type('m2');
            cy.get('#col_pnd [name="banco_emp_insumo[pnd]"]').clear();
            cy.get('#col_pnd [name="banco_emp_insumo[pnd]"]').type('100,00');
            cy.get('#col_pd [name="banco_emp_insumo[pd]"]').clear();
            cy.get('#col_pd [name="banco_emp_insumo[pd]"]').type('100,00');
            cy.get('[name="banco_emp_insumo[pndi]"]').clear();
            cy.get('[name="banco_emp_insumo[pndi]"]').type('100,00');
            cy.get('[name="banco_emp_insumo[pdi]"]').clear();
            cy.get('[name="banco_emp_insumo[pdi]"]').type('100,00');
            cy.get('[name="banco_emp_insumo[observacao]"]').type('Teste de Alteração Insumos 1');
            cy.get('button.mg-b-10').click();
            cy.get(':nth-child(1) > .dropdown-toggle').click()
            cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()

            cy.wrap(siglaEstados).each((EstadoSigla)=> {
                cy.get(`'#pnd_${siglaEstados.EstadoSigla}'`).type('100')
                cy.get(`'#pd_${siglaEstados.EstadoSigla}'`).type('100')
                cy.get(`'#pndi_${siglaEstados.EstadoSigla}'`).type('100')
                cy.get(`'#pdi_${siglaEstados.EstadoSigla}'`).type('100')
            })
        })

        it.only('Apagar Insumo', () => {
            cy.get('a[title="Insumos"]').click();
            cy.get('li:nth-child(4) li:nth-child(1) a.nav-link').click();
            cy.get('[name="banco"]').select('Emp');
            cy.get('[name="filtro"]').click();
            cy.get('[name="filtro"]').type('Teste de');
            cy.get('button.btn').click();
            cy.get('#lista a').click();
            cy.get('li:nth-child(1) span.headmenu-label').click();
            cy.get('a[data-confirm="Você tem certeza que quer Apagar este Insumo?"]').click();
        })

        it.only('Apagar grupo de Insumo', () => {
            cy.get('a[title="Insumos"]').click();
            cy.get('a[href="/banco/insumo/grupo"]').click();
            cy.get('#buscar_retorno a.btn-danger').click();
        })
    })
})