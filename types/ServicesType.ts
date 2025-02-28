import Agendamentos from '../assets/icons/agendamento.svg';
import Debitos from '../assets/icons/debitos.svg';
import Destaques from '../assets/icons/destaques.svg';
import Noticias from '../assets/icons/noticias.svg';
import Infracoes from '../assets/icons/infracoes.svg';
import Certidao from '../assets/icons/certidao.svg';
import Iptu from '../assets/icons/iptu2.svg';

export const iconMapper = {
    AGENDAMENTO: Agendamentos,
    DEBITOS: Debitos,
    DESTAQUES: Destaques,
    NOTICIAS: Noticias,
    INFRACOES: Infracoes,
    CERTIDAO: Certidao,
    IPTU: Iptu,
};


export interface SERVICE_TYPES {
    AGENDAMENTO: "Agendamentos";
    DEBITOS: "Debitos";
    DESTAQUES: "Destaques";
    INICIO: "Início";
    NOTICIAS: "Notícias";
    INFRACOES: "Infrações";
    CERTIDAO: "Emitir Certidão";
    IPTU: "2ª via de IPTU";
    PAGAR_IPTU: "Pagar IPTU atrasado";
    PAGAR_DIVIDA: "Pagar dívida ativa";
    PAGAR_DIVIDA_ATIVA: "Pagar dívida ativa";
}