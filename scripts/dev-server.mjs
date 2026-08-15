import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const requestedRoot = process.argv[2] ? resolve(root, process.argv[2]) : root;
const port = Number(process.env.PORT || 5173);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

function safePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split('?')[0]);
  const normalizedPath = normalize(decodedPath).replace(/^([.][.][\/])+/, '');
  return join(requestedRoot, normalizedPath === '/' ? 'index.html' : normalizedPath);
}

const server = createServer(async (request, response) => {
  const filePath = safePath(request.url || '/');
  const fallbackPath = join(requestedRoot, 'index.html');
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
});

server.listen(port, '0.0.0.0', () => {
  console.log(`MedFlow prototype available at http://localhost:${port}`);
});
