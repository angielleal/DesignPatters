"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = exports.HtmlRelatorio = exports.ExcelRelatorio = exports.PdfRelatorio = void 0;
class PdfRelatorio {
    gerar(dados) {
        console.log(`Gerando relatório em PDF com os dados: ${dados.join(', ')}`);
    }
}
exports.PdfRelatorio = PdfRelatorio;
class ExcelRelatorio {
    gerar(dados) {
        console.log(`Gerando relatório em Excel com os dados: ${dados.join(', ')}`);
    }
}
exports.ExcelRelatorio = ExcelRelatorio;
class HtmlRelatorio {
    gerar(dados) {
        console.log(`Gerando relatório em HTML com os dados: ${dados.join(', ')}`);
    }
}
exports.HtmlRelatorio = HtmlRelatorio;
class Gerente {
    solicitarRelatorio(relatorio, dados) {
        relatorio.gerar(dados);
    }
}
exports.Gerente = Gerente;
