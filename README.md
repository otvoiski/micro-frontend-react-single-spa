# micro-frontend-react-single-spa
Projeto para amostra de um sistema em micro frontend + single spa

# API
/GetApplications
`
{
    "applications": [
        {
            "name": "@bko/notificacao",
            "package": "@bko/notificacao",
            "activeWhen": "/",
            "exact": false
        },
        {
            "name": "@bko/news",
            "package": "@bko/news",
            "activeWhen": "/",
            "exact": true
        },
        {
            "name": "@bko/relatorio",
            "package": "@bko/relatorio",
            "activeWhen": "/relatorio",
            "exact": false
        }
    ]
}
`

/GetImports
`
{
  "imports": {
    "@bko/root-config": "http://localhost:9000/bko-root-config.js",
    "@bko/menu": "http://localhost:8500/bko-menu.js",
    "@bko/notificacao": "http://localhost:8600/bko-notificacao.js",
    "@bko/relatorio": "http://localhost:8700/bko-relatorio.js",
    "@bko/news": "http://localhost:8900/bko-news.js",
    "@bko/util": "http://localhost:8800/bko-util.js"
  }
}
`
