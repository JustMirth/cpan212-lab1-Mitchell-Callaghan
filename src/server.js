import http from "node:http";
import path from "node:path";
import { stations } from "./data.js";

const PORT = process.env.PORT || 4000;
const indexPath = path.join(import.meta.dirname, '..', 'public', 'index.html');

async function handleRequest(req, res) {
res.writeHead(501, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not written yet: handleRequest is still the starter stub.\n');
}

const server = http.createServer(async (req, res) => {
    await handleRequest(req, res);
});

server.listen(PORT, () => {
  console.log(`Bike Share Station API running at http://localhost:${PORT}`);
});