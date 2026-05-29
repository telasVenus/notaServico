export interface ItemVenda {
	descricao: string;
	valor: number;
}

export interface ChavePix {
	tipo: string;
	chave: string;
}

export interface DadosEmpresa {
	nomeEmpresa: string;
	contato: string;
	subDescricao: string;
}

export interface DadosConta {
	nome: string;
	cnpj: string;
	banco: string;
	agencia: string;
	conta: string;
}

export interface Metadata {
	dadosEmpresa: DadosEmpresa;
	dadosConta: DadosConta;
	chavesPix: ChavePix[];
}

export interface BackupData {
	versao: string;
	dataBackup: string;
	metadata: Metadata | null;
	itens: ItemVenda[];
	itensPreDefinidos: ItemVenda[];
	clientes: Cliente[];
}

export interface RestoreOptions {
	restaurarMetadata: boolean;
	restaurarItens: boolean;
	restaurarItensPreDefinidos: boolean;
}

export interface RestoreResult {
	sucesso: boolean;
	mensagem: string;
	itensRestaurados: {
		metadata: boolean;
		itens: boolean;
		itensPreDefinidos: boolean;
	};
}

export interface Cliente {
	nome: string;
	telefone: string;
}
