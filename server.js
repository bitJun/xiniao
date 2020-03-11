const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express();
        server.get('/class/:id', (req, res) => {
            const actualPage = '/class/detail'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });
        server.get('/gkbaike/:id', (req, res) => {
            const actualPage = '/gkbaike/detail'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });
        server.get('/ziliao/:id', (req, res) => {
            const actualPage = '/ziliao/detail'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });
        server.get('/xiniao/:id', (req, res) => {
            const actualPage = '/xiniao/detail'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });
        server.get('/hunan', (req, res) => {
            const actualPage = '/school'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });
        server.get('/shandong', (req, res) => {
            const actualPage = '/school'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });
        server.get('*', (req, res) => {
            return handle(req, res)
        });
        server.listen(3009, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3009')
        });
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1);
    });
