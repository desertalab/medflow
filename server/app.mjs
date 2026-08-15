import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { portalData } from './data.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

export function createMedFlowServer({ staticRoot = root } = {}) {
  const resolvedStaticRoot = resolve(staticRoot);

  return createServer(async (request, response) => {
    const url = new URL(request.url || '/', 'http://localhost');

    if (url.pathname === '/api/portal') {
      sendJson(response, portalData);
      return;
    }

    if (url.pathname === '/api/health') {
      sendJson(response, { status: 'ok', service: 'medflow-portal' });
      return;
    }

    await serveStaticAsset(url.pathname, response, resolvedStaticRoot);
  });
}

function sendJson(response, payload) {
  response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(payload));
}

function safePath(urlPath, staticRoot) {
  const decodedPath = decodeURIComponent(urlPath.split('?')[0]);
  const normalizedPath = normalize(decodedPath).replace(/^([.][.][\/])+/, '');
  return join(staticRoot, normalizedPath === '/' ? 'index.html' : normalizedPath);
}

async function serveStaticAsset(urlPath, response, staticRoot) {
  const filePath = safePath(urlPath, staticRoot);
  const fallbackPath = join(staticRoot, 'index.html');
  const pathToServe = existsSync(filePath) ? filePath : fallbackPath;

  try {
    const fileStat = await stat(pathToServe);
    if (!fileStat.isFile()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type': contentTypes[extname(pathToServe)] || 'application/octet-stream',
    });
    createReadStream(pathToServe).pipe(response);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
}
