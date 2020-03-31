const server = require('umi-server');
const http = require('http');
const { createReadStream } = require('fs');
const { join, extname } = require('path');
const fetch = require('node-fetch');
const root = join(__dirname, 'dist');
const render = server({
  root,
});
const headerMap = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.png': 'image/jpeg',
};

const createServer = http.createServer(async (req, res) => {
  const ext = extname(req.url);
  const header = {
    'Content-Type': headerMap[ext] || 'text/html',
  };
  res.writeHead(200, header);
  const reqHeaderAccept = req.headers["accept"];
  if (reqHeaderAccept && reqHeaderAccept.includes('text/html')) {
    // url render
    const ctx = {
      req,
      res,
    };
    const renderRes = await render(ctx);
    const { ssrHtml } = renderRes;
    res.write(ssrHtml);
    res.end();
  } else {
    if(process.env.NODE_ENV==='development'){
      const upstreamUrl = new URL(req.url, 'http://localhost:8000');
      const upstreamRes = await fetch(upstreamUrl, {
        headers: req.headers,
        method: req.method
      });
      // const upstreamText = await upstreamRes.text();
      upstreamRes.body.pipe(res);
    }else {
      // static file url
      const path = join(root, req.url);
      const stream = createReadStream(path);
      stream.on('error', error => {
        res.writeHead(404, 'Not Found');
        res.end();
      });
      stream.pipe(res);
    }
  }
});

if (!process.env.NOW_ZEIT_ENV) {
  createServer.listen(3000);
  console.log('http://localhost:3000');
}

module.exports = createServer;
