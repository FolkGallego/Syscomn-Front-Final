import { AnimalChip } from "./animalChip";
import { Movimentacao } from "./movimentacao";

export interface Lote{
    idLote?: any;
    descricao: string;
    nroLote: Number;
    dataInicio: Date;
    dataFinal: Date;
    pesoEntrada: Number;
    pesoAtual: Number;
    custoLote: Number;
    qtdeCabecasEntrada: Number;
    qtdeCabecasMorte: Number;
    qtdeCabecasAtual: Number;
    status: any;
    curralPiquete: any;
    descricaoCurralPiquete: String;
    regimeEngorda: any;
    descricaoRegimeEngorda: String;
    lstMovimentacao?: Movimentacao[];
    lstAnimais?: AnimalChip[];
}
  