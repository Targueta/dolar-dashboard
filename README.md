# dolar-dashboard

Primeiro projeto público de cotações. Dashboard simples que consulta e exibe cotações em tempo real via API.

## Demo ao vivo

[Acessar dashboard](https://dolar-dashboard.vercel.app)

## Cotações exibidas

- USD/BRL
- EUR/BRL
- CHF/BRL
- BTC/BRL
- ETH/BRL

## Stack

- JavaScript · Node.js · HTML
- API de cotações (AwesomeAPI)
- Vercel

## Contexto

Esta é a V1 do projeto — primeira versão pública, focada em exibição simples de cotações atuais.

Evoluiu posteriormente para o [cloud-dollar-pipeline](https://github.com/Targueta/cloud-dollar-pipeline), que adiciona pipeline de dados, persistência em PostgreSQL, série histórica de 30 anos e dashboard público no Grafana.

## Roadmap

- Documentar fonte e timestamp da cotação exibida
- Comparar V1 com V3 para auditar data freshness
- Evoluir para baseline de validação de pipelines mais complexos
