export class SolicitacaoEntity {
  id: string;
  solicitante: string;
  solicitante_id: string;
  aprovador: string;
  status: number;
  finalizado: boolean;
  coordenador: string;
  coordenador_id: string;
  dataCriacao: Date;
}
