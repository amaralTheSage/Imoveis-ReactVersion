export type Imovel = {
  id: string;
  nome: string;
  tipo: number;
  bairro: string;
  descricao: string;
  imgs: string[];
  metragem: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  precoVenda?: number;
  precoAluguel?: number;
  condominio?: number;
};
