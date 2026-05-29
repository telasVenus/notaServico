import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

// Configurações comuns do Driver
const defaultOptions = {
	showProgress: true,
	animate: true,
	overlayColor: 'rgba(0, 0, 0, 0.65)',
	nextBtnText: 'Próximo &rarr;',
	prevBtnText: '&larr; Anterior',
	doneBtnText: 'Concluir',
	progressText: 'Passo {{current}} de {{total}}'
};

// Tour para a tela principal (Gerador de Comprovante de Pagamento)
export function startHomeTour() {
	const driverObj = driver({
		...defaultOptions,
		steps: [
			{
				popover: {
					title: 'Bem-vindo(a)!',
					description: 'Este guia rápido vai te mostrar como gerar seu primeiro comprovante. É bem simples!'
				}
			},
			{
				element: '#dataVenda',
				popover: {
					title: 'Data da venda',
					description: 'Aqui você define a data que aparecerá na nota gerada.',
					side: 'bottom'
				}
			},
			{
				element: '#tour-add-item',
				popover: {
					title: 'Adicionar Novo Produto',
					description: 'Preencha a descrição e o valor do produto que você vendeu.',
					side: 'top'
				}
			},
			{
				element: '#produtoPredefinido',
				popover: {
					title: 'Produtos Recorrentes',
					description: 'Se você já adicionou produtos antes, pode selecioná-á-los rapidamente nesta lista.',
					side: 'top'
				}
			},
			{
				element: '#btn-adicionar',
				popover: {
					title: 'Incluir na Nota',
					description: 'Clique aqui para adicionar o produto preenchido à sua nota atual.',
					side: 'bottom'
				}
			},
			{
				element: '#tour-itens-nota',
				popover: {
					title: 'Itens da Nota',
					description: 'Aqui aparecerão todos os produtos que você adicionou, juntamente com o valor total.',
					side: 'top'
				}
			},
			{
				element: '#btn-gerar-pdf',
				popover: {
					title: 'Gerar PDF',
					description: 'Quando terminar de adicionar os itens, clique aqui para baixar seu Comprovante de Pagamento em PDF pronto para enviar ao cliente!',
					side: 'top'
				}
			},
			{
				element: '#btn-config',
				popover: {
					title: 'Configurações',
					description: 'Aqui você pode cadastrar os dados da sua empresa (Nome, Chave PIX, Bancos) para que apareçam na nota.',
					side: 'bottom'
				}
			}
		]
	});

	driverObj.drive();
}

// Tour para a tela de Configurações
export function startConfigTour() {
	const driverObj = driver({
		...defaultOptions,
		steps: [
			{
				popover: {
					title: 'Configurações da Empresa',
					description: 'Aqui você cadastra os dados que vão aparecer no cabeçalho das suas Notas de Serviço.'
				}
			},
			{
				element: '#tour-dados-empresa',
				popover: {
					title: 'Dados da Empresa',
					description: 'Preencha seu Nome/Razão Social, telefone de contato e um subtítulo ou ramo de atuação.',
					side: 'bottom'
				}
			},
			{
				element: '#tour-dados-bancarios',
				popover: {
					title: 'Dados Bancários',
					description: 'Preencha opcionalmente com seus dados bancários para transferência TED/DOC.',
					side: 'top'
				}
			},
			{
				element: '#tour-chaves-pix',
				popover: {
					title: 'Chaves PIX',
					description: 'Adicione uma ou mais chaves PIX para facilitar o pagamento.',
					side: 'top'
				}
			},
			{
				element: '#tour-backup',
				popover: {
					title: 'Backup e Restauração',
					description: 'Você pode baixar o arquivo de backup para não perder essas configurações se mudar de navegador.',
					side: 'top'
				}
			},
			{
				element: '#btn-salvar-config',
				popover: {
					title: 'Salvar Configurações',
					description: 'Não esqueça de clicar aqui para salvar tudo na memória do seu navegador!',
					side: 'top'
				}
			}
		]
	});

	driverObj.drive();
}
