interface Relatorio {
    gerar(dados: string[]): void;
}

class PdfRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em PDF com os dados: ${dados.join(', ')}`);
    }
}

class ExcelRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em Excel com os dados: ${dados.join(', ')}`);
    }
}

class HtmlRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em HTML com os dados: ${dados.join(', ')}`);
    }
}

class Gerente {
    solicitarRelatorio(relatorio: Relatorio, dados: string[]): void {
        relatorio.gerar(dados);
    }
}

export { PdfRelatorio, ExcelRelatorio, HtmlRelatorio, Gerente };