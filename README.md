## Node.js + Selenium + Jasmine
Projeto exemplo de automação de testes E2E desenvolvido com NodeJS + Selenium WebDriver + Jasmine e integrado com relatório HTML local para acompanhamento de execução.

### Pré-requisitos
Para utilização é necessário possuir em sua estação de trabalho:

* Node.js
* Google Chrome (Versão 87)
* Yarn (Recomendado)

### Iniciando o ambiente do projeto
1. Realize o donwload/clone do repositório em sua estação de trabalho.
2. Abra o terminal de comandos na raiz (pasta com o arquivo package.json) do diretório que você clonou o projeto.
3. Realiza a instalação dos pacotes e dependências através do seguinte comando:
```
yarn install
```

### Executando os testes do projeto
Com o terminal de comandos aberto na raiz do diretório, execute um dos seguintes comandos listados abaixo.

Para execução em modo headless (navegador em background):
```
yarn test
```

Para execução em modo headed (navegador visível em tela):
```
yarn test --headed
```

Para executar um teste com alguma descrição específica utilize o parâmetro `--filter`. Este recurso foi implementado visando a utilização de tags para uma execução customizada. Por limitações do Jasmine, o parâmetro aceita apenas uma tag por execução.

***Observação:*** _No exemplo apresentado neste repositório foi utilizado o caracter # para realizar a marcação do teste alvo, porém isso não é uma obrigatoriedade._
```
yarn test --filter=#tag1
```

### Relatórios de execução dos testes
Os arquivos report podem ser encontrados no seguite diretório após a execução dos testes:
```
./jasmine/report
```

Nele você poderá verificar uma versão em HTML e uma versão Markdown. Em caso de falha de execução, junto aos reports também podem ser verificados capturas de telas no momento de falha de cada teste.
