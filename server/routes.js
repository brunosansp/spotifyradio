import config from './config.js'
import { logger } from './util.js'

async function routes(request, response) {
    const { method, url } = request
    if (method === 'GET' && url === '/') {
        response.writeHead()
    }

    return response.end('hello')
}

export function handler(request, response) {
    return routes(request, response)
        .catch(error => logger.error(`Deu merda::: ${error.stack}`))
}

// TODO: 52min