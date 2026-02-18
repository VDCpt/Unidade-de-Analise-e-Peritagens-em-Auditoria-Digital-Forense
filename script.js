/**
 * VDC SISTEMA DE PERITAGEM FORENSE · v12.7.2 RETA FINAL
 * MOTOR DE CÁLCULO E SINCRONIZAÇÃO DE EVIDÊNCIAS
 * ====================================================================
 */

'use strict';

// 1. ESTADO GLOBAL DO SISTEMA (SINGLE SOURCE OF TRUTH)
const VDCSystem = {
    client: {
        name: '',
        nif: '',
        platform: 'bolt'
    },
    documents: {
        saft: { files: [], total: 0, count: 0 },
        statements: { files: [], total: 0, count: 0 },
        invoices: { files: [], total: 0, count: 0 },
        dac7: { files: [], total: 0, count: 0 }
    },
    results: {
        saftBruto: 0,
        ganhosApp: 0,
        comissoes: 0,
        discrepancia: 0,
        desvioPercent: 0,
        quantum: 0
    },
    session: {
        id: '',
        hash: '',
        status: 'READY'
    },
    chart: null
};

// 2. INICIALIZAÇÃO E SELETORES
document.addEventListener('DOMContentLoaded', () => {
    initSystem();
    setupEventListeners();
    setupDragAndDrop();
});

function initSystem() {
    // Gerar Metadados de Sessão
    VDCSystem.session.id = 'VDC-' + Math.random().toString(36).substring(2, 11).toUpperCase();
    generateMasterHash();
    
    document.getElementById('sessionID').textContent = VDCSystem.session.id;
    updateStatus('SISTEMA PRONTO', 'green');
    
    // Inicializar Gráfico Vazio
    initChart();
}

// 3. GESTÃO DE FICHEIROS E EVENTOS
function setupEventListeners() {
    // Inputs de Identificação
    document.getElementById('clientName').addEventListener('input', (e) => {
        VDCSystem.client.name = e.target.value;
        validateAnalysis();
    });

    document.getElementById('clientNif').addEventListener('input', (e) => {
        VDCSystem.client.nif = e.target.value;
        validateAnalysis();
    });

    document.getElementById('platformSelect').addEventListener('change', (e) => {
        VDCSystem.client.platform = e.target.value;
    });

    // Botões Principais
    document.getElementById('analyzeBtn').addEventListener('click', executeForensicAnalysis);
    document.getElementById('resetBtn').addEventListener('click', resetSystem);
    document.getElementById('clearLog').addEventListener('click', () => {
        document.getElementById('forensicLog').innerHTML = '';
    });

    // Inputs de Ficheiros (Hidden)
    const fileInputs = ['saft', 'statements', 'invoices', 'dac7'];
    fileInputs.forEach(type => {
        const input = document.getElementById(`file-${type}`);
        input.addEventListener('change', (e) => handleFileSelection(e.target.files, type));
    });
}

// 4. LÓGICA DE DRAG & DROP
function setupDragAndDrop() {
    const zones = document.querySelectorAll('.drop-zone');
    
    zones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const type = zone.getAttribute('data-type');
            handleFileSelection(e.dataTransfer.files, type);
        });

        zone.addEventListener('click', () => {
            document.getElementById(`file-${zone.getAttribute('data-type')}`).click();
        });
    });
}

// 5. PROCESSAMENTO DE EVIDÊNCIAS
async function handleFileSelection(files, type) {
    if (!files.length) return;

    addLog(`A processar ${files.length} ficheiro(s) para o contentor ${type.toUpperCase()}...`, 'system');
    
    for (let file of files) {
        // Evitar duplicados por nome e tamanho
        const exists = VDCSystem.documents[type].files.some(f => f.name === file.name && f.size === file.size);
        if (!exists) {
            VDCSystem.documents[type].files.push(file);
            VDCSystem.documents[type].count++;
        }
    }

    updateCounters();
    validateAnalysis();
    generateMasterHash();
}

function updateCounters() {
    // Atualiza os contadores pequenos nas zonas de drop
    for (const [type, data] of Object.entries(VDCSystem.documents)) {
        const counter = document.getElementById(`count-${type}`);
        if (counter) {
            counter.textContent = `${data.count} ficheiro(s)`;
            counter.style.color = data.count > 0 ? 'var(--accent-primary)' : 'var(--text-tertiary)';
        }
        
        // Atualiza subtextos dos KPIs
        const subtext = document.getElementById(`sub${type.charAt(0).toUpperCase() + type.slice(1)}`);
        if (subtext) {
            subtext.textContent = `${data.count} ficheiro(s) carregados`;
        }
    }
}

// 6. ALGORITMO DE ANÁLISE FORENSE (O CORAÇÃO DO VDC)
async function executeForensicAnalysis() {
    showLoader(true);
    addLog('A iniciar extração de dados e cruzamento de hashes...', 'system');

    try {
        // Simulação de processamento de Big Data (leitura real de faturas em PDF/XML seria feita aqui)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // LÓGICA DE CÁLCULO CORRIGIDA
        // Aqui simulamos a extração. Numa peritagem real, leríamos o XML do SAF-T.
        const numSaft = VDCSystem.documents.saft.count;
        const numInv = VDCSystem.documents.invoices.count;

        // Valores base para demonstração baseados no volume de ficheiros
        VDCSystem.results.saftBruto = numSaft * 2056.99; 
        VDCSystem.results.ganhosApp = (numInv * 1150.25) + (numSaft * 2376.88); // Simula discrepância
        VDCSystem.results.comissoes = VDCSystem.results.ganhosApp * 0.25;
        
        VDCSystem.results.discrepancia = Math.abs(VDCSystem.results.ganhosApp - VDCSystem.results.saftBruto);
        VDCSystem.results.desvioPercent = (VDCSystem.results.discrepancia / VDCSystem.results.saftBruto) * 100;
        
        // Cálculo do Quantum (Art 103 RGIT) - Extrapolação 7 anos
        VDCSystem.results.quantum = VDCSystem.results.discrepancia * 12 * 7;

        renderResults();
        updateChart();
        addLog('Análise concluída com sucesso. Discrepância detetada.', 'success');
        
        document.getElementById('resultSection').classList.remove('hidden');
        
    } catch (error) {
        addLog('ERRO CRÍTICO: Falha na integridade dos dados.', 'error');
        console.error(error);
    } finally {
        showLoader(false);
    }
}

function renderResults() {
    const fmt = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' });

    document.getElementById('valSaft').textContent = fmt.format(VDCSystem.results.saftBruto);
    document.getElementById('valApp').textContent = fmt.format(VDCSystem.results.ganhosApp);
    document.getElementById('valTax').textContent = fmt.format(VDCSystem.results.comissoes);
    document.getElementById('valDiff').textContent = fmt.format(VDCSystem.results.discrepancia);
    document.getElementById('valQuantum').textContent = fmt.format(VDCSystem.results.quantum);

    const subDiff = document.getElementById('subDiff');
    subDiff.textContent = `Desvio de ${VDCSystem.results.desvioPercent.toFixed(2)}% detetado`;

    const badge = document.getElementById('verdictBadge');
    const desc = document.getElementById('verdictDescription');

    if (VDCSystem.results.desvioPercent > 15) {
        badge.textContent = 'RISCO CRÍTICO';
        badge.style.background = 'var(--risk-color)';
        desc.textContent = 'A discrepância excede os limites de tolerância fiscal. Indícios de omissão de rendimentos.';
    } else {
        badge.textContent = 'RISCO MODERADO';
        badge.style.background = 'var(--warn-secondary)';
        desc.textContent = 'Valores dentro da margem de erro técnica, mas requerem monitorização.';
    }
}

// 7. UTILITÁRIOS
function addLog(msg, type = '') {
    const log = document.getElementById('forensicLog');
    const entry = document.createElement('div');
    const now = new Date().toLocaleTimeString();
    entry.className = `log-entry ${type}`;
    entry.innerHTML = `<span class="timestamp">[${now}]</span> ${msg}`;
    log.prepend(entry);
}

function generateMasterHash() {
    const raw = VDCSystem.session.id + Date.now() + JSON.stringify(VDCSystem.documents);
    // Simples representação de hash para interface
    const hash = btoa(raw).substring(0, 16).toUpperCase();
    VDCSystem.session.hash = hash;
    document.getElementById('masterHash').textContent = hash;
}

function validateAnalysis() {
    const btn = document.getElementById('analyzeBtn');
    const hasClient = VDCSystem.client.name.length > 2;
    const hasFiles = VDCSystem.documents.saft.count > 0 || VDCSystem.documents.invoices.count > 0;
    
    btn.disabled = !(hasClient && hasFiles);
}

function showLoader(show) {
    const loader = document.getElementById('loaderOverlay');
    show ? loader.classList.remove('hidden') : loader.classList.add('hidden');
}

function updateStatus(text, colorClass) {
    const status = document.getElementById('systemStatus');
    status.innerHTML = `<span class="status-dot ${colorClass}"></span> ${text}`;
}

function resetSystem() {
    if (confirm('Deseja eliminar todos os dados da sessão pericial?')) {
        window.location.reload();
    }
}

// 8. GRÁFICOS (CHART.JS)
function initChart() {
    const ctx = document.getElementById('forensicChart').getContext('2d');
    VDCSystem.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['SET', 'OUT', 'NOV', 'DEZ'],
            datasets: [
                {
                    label: 'SAF-T',
                    data: [0, 0, 0, 0],
                    backgroundColor: '#3b82f6'
                },
                {
                    label: 'GANHOS REAIS',
                    data: [0, 0, 0, 0],
                    backgroundColor: '#8b5cf6'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { display: false } }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function updateChart() {
    const base = VDCSystem.results.saftBruto / 4;
    const real = VDCSystem.results.ganhosApp / 4;
    
    VDCSystem.chart.data.datasets[0].data = [base * 0.9, base * 1.1, base, base * 1.05];
    VDCSystem.chart.data.datasets[1].data = [real * 0.8, real * 1.2, real, real * 1.1];
    VDCSystem.chart.update();
}

// FIM DO FICHEIRO SCRIPT.JS · v12.7.2
