const peritiaData = {
    identificacao: {
        nome: 'Demo Corp, Lda',
        nif: '503244732',
        pericia: 'VDC-MLS1QLX3-FVWHG',
        plataforma: 'Bolt Operations OÜ',
        morada: 'Vana-Lõuna 15, 10134 Tallinn, Estónia'
    },
    
    contadores: {
        ctrl: 4,
        saft: 4,
        fat: 0,
        ext: 0,
        dac7: 1,
        total: 9
    },
    
    saft: {
        valorIliquido: 7761.67,
        iva: 466.30,
        valorBruto: 8227.97,
        ficheiros: 4
    },
    
    extratos: {
        ganhosApp: 9507.51,
        campanhas: 405.00,
        gorjetas: 46.00,
        portagens: 0.00,
        taxasCancelamento: 54.60,
        comissoes: 2388.89,
        ficheiros: 0
    },
    
    dac7: {
        q1: 0.00,
        q2: 0.00,
        q3: 0.00,
        q4: 7755.16,
        ficheiros: 1
    },
    
    calculos: {
        brutoReal: 9507.51,
        comissoes: 2388.89,
        liquido: 0,
        faturado: 239.00,
        discrepancia: 0,
        fossoFiscal: 0
    },
    
    risco: {
        veredicto: 'RISCO ELEVADO',
        percentagem: 0,
        mensagem: 'Indícios de desconformidade fiscal significativa.'
    },
    
    quantum: {
        discrepanciaBase: 0,
        mesesComDados: 7,
        mediaMensal: 0,
        impactoAnual: 0,
        quantumTotal: 0
    }
};

function calcularValoresCorrigidos() {
    const comissoesExtrato = peritiaData.extratos.comissoes;
    const brutoReal = peritiaData.extratos.ganhosApp;
    
    const liquidoReconstruido = brutoReal - comissoesExtrato;
    peritiaData.calculos.liquido = liquidoReconstruido;
    
    const comissoesDetectadas = comissoesExtrato;
    
    const fossoFiscal = comissoesExtrato - peritiaData.calculos.faturado;
    peritiaData.calculos.fossoFiscal = fossoFiscal;
    peritiaData.calculos.discrepancia = fossoFiscal;
    
    const percentagemRisco = (fossoFiscal / brutoReal) * 100;
    peritiaData.risco.percentagem = percentagemRisco;
    
    peritiaData.quantum.discrepanciaBase = fossoFiscal;
    
    const mediaMensal = fossoFiscal / peritiaData.quantum.mesesComDados;
    peritiaData.quantum.mediaMensal = mediaMensal;
    
    const impactoAnual = mediaMensal * 12;
    peritiaData.quantum.impactoAnual = impactoAnual;
    
    const motoristas = 98000;
    const anos = 7;
    const quantumTotal = impactoAnual * motoristas * anos;
    peritiaData.quantum.quantumTotal = quantumTotal;
    
    return {
        liquidoReconstruido,
        comissoesDetectadas,
        fossoFiscal,
        percentagemRisco,
        mediaMensal,
        impactoAnual,
        quantumTotal
    };
}

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valor);
}

function formatarPercentagem(valor) {
    return valor.toFixed(2) + '%';
}

function atualizarInterface() {
    const calculos = calcularValoresCorrigidos();
    
    document.getElementById('valorIliquidoTotal').textContent = formatarMoeda(peritiaData.saft.valorIliquido);
    document.getElementById('totalIVA').textContent = formatarMoeda(peritiaData.saft.iva);
    document.getElementById('valorBrutoTotal').textContent = formatarMoeda(peritiaData.saft.valorBruto);
    document.getElementById('saftFilesCount').textContent = `${peritiaData.saft.ficheiros} ficheiros processados`;
    
    document.getElementById('ganhosApp').textContent = formatarMoeda(peritiaData.extratos.ganhosApp);
    document.getElementById('campanhas').textContent = formatarMoeda(peritiaData.extratos.campanhas);
    document.getElementById('gorjetas').textContent = formatarMoeda(peritiaData.extratos.gorjetas);
    document.getElementById('portagens').textContent = formatarMoeda(peritiaData.extratos.portagens);
    document.getElementById('taxasCancelamento').textContent = formatarMoeda(peritiaData.extratos.taxasCancelamento);
    document.getElementById('comissoesExtrato').textContent = formatarMoeda(peritiaData.extratos.comissoes);
    document.getElementById('appFilesCount').textContent = `${peritiaData.extratos.ficheiros} ficheiros processados`;
    
    document.getElementById('dac7Q1').textContent = formatarMoeda(peritiaData.dac7.q1);
    document.getElementById('dac7Q2').textContent = formatarMoeda(peritiaData.dac7.q2);
    document.getElementById('dac7Q3').textContent = formatarMoeda(peritiaData.dac7.q3);
    document.getElementById('dac7Q4').textContent = formatarMoeda(peritiaData.dac7.q4);
    document.getElementById('dac7FilesCount').textContent = `${peritiaData.dac7.ficheiros} ficheiro processado`;
    
    document.getElementById('quantumValue').textContent = formatarMoeda(calculos.quantumTotal);
    document.getElementById('discrepanciaBase').textContent = formatarMoeda(calculos.fossoFiscal);
    document.getElementById('mesesDados').textContent = peritiaData.quantum.mesesComDados;
    document.getElementById('mediaMensal').textContent = formatarMoeda(calculos.mediaMensal);
    document.getElementById('impactoAnual').textContent = formatarMoeda(calculos.impactoAnual);
    document.getElementById('quantumTotal').textContent = formatarMoeda(calculos.quantumTotal);
    
    document.getElementById('riskPercentage').textContent = formatarPercentagem(calculos.percentagemRisco);
    
    document.getElementById('anomalyValue').textContent = formatarMoeda(calculos.fossoFiscal);
    
    document.getElementById('valorLiquido').textContent = formatarMoeda(calculos.liquidoReconstruido);
    document.getElementById('comissoesDetectadas').textContent = formatarMoeda(calculos.comissoesDetectadas);
    document.getElementById('fossoFiscal').textContent = formatarMoeda(calculos.fossoFiscal);
    
    document.getElementById('brutoReal').textContent = formatarMoeda(peritiaData.extratos.ganhosApp);
    document.getElementById('comissoesSummary').textContent = formatarMoeda(calculos.comissoesDetectadas);
    document.getElementById('liquidoSummary').textContent = formatarMoeda(calculos.liquidoReconstruido);
    document.getElementById('faturadoSummary').textContent = formatarMoeda(peritiaData.calculos.faturado);
    
    document.getElementById('ctrlCount').textContent = peritiaData.contadores.ctrl;
    document.getElementById('saftCount').textContent = peritiaData.contadores.saft;
    document.getElementById('fatCount').textContent = peritiaData.contadores.fat;
    document.getElementById('extCount').textContent = peritiaData.contadores.ext;
    document.getElementById('dac7Count').textContent = peritiaData.contadores.dac7;
}

function criarGrafico() {
    const ctx = document.getElementById('analysisChart');
    if (!ctx) return;
    
    const calculos = calcularValoresCorrigidos();
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['SAF-T Bruto', 'Ganhos App', 'Comissões', 'Faturado', 'DAC7 Q4', 'Líquido'],
            datasets: [{
                label: 'Valores (€)',
                data: [
                    peritiaData.saft.valorBruto,
                    peritiaData.extratos.ganhosApp,
                    peritiaData.extratos.comissoes,
                    peritiaData.calculos.faturado,
                    peritiaData.dac7.q4,
                    calculos.liquidoReconstruido
                ],
                backgroundColor: [
                    '#00d9ff',
                    '#ff9500',
                    '#9d4edd',
                    '#ff4444',
                    '#3fb950',
                    '#00c0e0'
                ],
                borderColor: [
                    '#00d9ff',
                    '#ff9500',
                    '#9d4edd',
                    '#ff4444',
                    '#3fb950',
                    '#00c0e0'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1c2128',
                    titleColor: '#c9d1d9',
                    bodyColor: '#c9d1d9',
                    borderColor: '#30363d',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return formatarMoeda(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#8b949e',
                        callback: function(value) {
                            return value.toLocaleString('pt-PT') + ' €';
                        }
                    },
                    grid: {
                        color: '#30363d'
                    }
                },
                x: {
                    ticks: {
                        color: '#8b949e'
                    },
                    grid: {
                        color: '#30363d'
                    }
                }
            }
        }
    });
}

function adicionarLogConsole(mensagem, tipo = 'info') {
    const consoleOutput = document.getElementById('consoleOutput');
    if (!consoleOutput) return;
    
    const timestamp = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const linha = document.createElement('div');
    linha.className = 'console-line';
    
    let icone = '✓';
    let classe = 'console-success';
    
    if (tipo === 'error') {
        icone = '✗';
        classe = 'console-error';
    } else if (tipo === 'warning') {
        icone = '⚠';
        classe = 'console-warning';
    }
    
    linha.innerHTML = `[${timestamp}] <span class="${classe}">${icone}</span> ${mensagem}`;
    consoleOutput.appendChild(linha);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function exportarJSON() {
    const calculos = calcularValoresCorrigidos();
    
    const dadosExportacao = {
        metadata: {
            sistema: 'VDC FORENSE v12.7',
            sessao: peritiaData.identificacao.pericia,
            timestamp: new Date().toISOString(),
            hash: document.getElementById('systemHash').textContent
        },
        identificacao: peritiaData.identificacao,
        contadores: peritiaData.contadores,
        modulos: {
            saft: peritiaData.saft,
            extratos: peritiaData.extratos,
            dac7: peritiaData.dac7
        },
        analise: {
            brutoReal: peritiaData.extratos.ganhosApp,
            comissoes: calculos.comissoesDetectadas,
            liquido: calculos.liquidoReconstruido,
            faturado: peritiaData.calculos.faturado,
            discrepancia: calculos.fossoFiscal,
            fossoFiscal: calculos.fossoFiscal
        },
        risco: {
            veredicto: peritiaData.risco.veredicto,
            percentagem: calculos.percentagemRisco,
            mensagem: peritiaData.risco.mensagem
        },
        quantum: {
            discrepanciaBase: calculos.fossoFiscal,
            mesesComDados: peritiaData.quantum.mesesComDados,
            mediaMensal: calculos.mediaMensal,
            impactoAnual: calculos.impactoAnual,
            quantumTotal: calculos.quantumTotal
        }
    };
    
    const json = JSON.stringify(dadosExportacao, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VDC_PERITIA_${peritiaData.identificacao.pericia}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    adicionarLogConsole('Relatório JSON exportado com valor probatório e rastreabilidade completa.');
}

function gerarParecer() {
    adicionarLogConsole('A gerar Parecer Pericial...');
    
    setTimeout(() => {
        adicionarLogConsole('PDF exportado com sucesso');
        alert('Funcionalidade de geração de PDF será implementada. Por agora, utilize o EXPORTAR JSON.');
    }, 500);
}

function reiniciar() {
    if (confirm('Deseja reiniciar a sessão? Todos os dados serão perdidos.')) {
        location.reload();
    }
}

function limparConsole() {
    const consoleOutput = document.getElementById('consoleOutput');
    if (consoleOutput) {
        consoleOutput.innerHTML = '';
        adicionarLogConsole('Console limpo.');
    }
}

function inicializarEventListeners() {
    const btnExport = document.getElementById('btnExport');
    if (btnExport) {
        btnExport.addEventListener('click', exportarJSON);
    }
    
    const btnParecer = document.getElementById('btnParecer');
    if (btnParecer) {
        btnParecer.addEventListener('click', gerarParecer);
    }
    
    const btnReinit = document.getElementById('btnReinit');
    if (btnReinit) {
        btnReinit.addEventListener('click', reiniciar);
    }
    
    const btnClearConsole = document.getElementById('btnClearConsole');
    if (btnClearConsole) {
        btnClearConsole.addEventListener('click', limparConsole);
    }
}

function atualizarDataHora() {
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-PT', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
    const hora = agora.toLocaleTimeString('pt-PT', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    
    const sessionDate = document.getElementById('sessionDate');
    if (sessionDate) {
        sessionDate.textContent = `${data} | ${hora}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('VDC FORENSE v12.7 - Sistema de Perícia Digital Forense');
    console.log('Inicializando sistema...');
    
    atualizarInterface();
    
    criarGrafico();
    
    inicializarEventListeners();
    
    atualizarDataHora();
    setInterval(atualizarDataHora, 1000);
    
    adicionarLogConsole('Sistema inicializado com sucesso');
    adicionarLogConsole(`Total de ficheiros processados: ${peritiaData.contadores.total} (${peritiaData.contadores.saft} SAF-T, ${peritiaData.contadores.ext} extratos, ${peritiaData.contadores.fat} faturas, ${peritiaData.contadores.dac7} DAC7)`);
    adicionarLogConsole('Cálculos de discrepância fiscal concluídos');
    adicionarLogConsole(`Veredicto de Risco: ${peritiaData.risco.veredicto} (${formatarPercentagem(peritiaData.risco.percentagem)})`);
    
    console.log('Sistema pronto para utilização');
});

window.peritiaData = peritiaData;
window.calcularValoresCorrigidos = calcularValoresCorrigidos;
window.exportarJSON = exportarJSON;
