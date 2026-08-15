import { createMedFlowServer } from './app.mjs';

const port = Number(process.env.PORT || 5173);
const staticRoot = process.argv[2];
const server = createMedFlowServer({ staticRoot });

server.listen(port, '0.0.0.0', () => {
  console.log(`MedFlow full-stack app available at http://localhost:${port}`);
});
