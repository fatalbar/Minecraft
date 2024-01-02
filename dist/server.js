"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const wt = __importStar(require("worker_threads"));
const dotenv_1 = __importDefault(require("dotenv"));
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)().child({ class: "server" });
if (process.argv[2] === "dev") {
    dotenv_1.default.config();
}
const env = {};
if (process.env.HTTPS_PORT) {
    env.HTTPS_PORT = process.env.HTTPS_PORT;
}
if (process.env.TLS_CERT) {
    env.TLS_CERT = process.env.TLS_CERT;
}
if (process.env.TLS_KEY) {
    env.TLS_KEY = process.env.TLS_KEY;
}
function runWorker(path) {
    let worker = new wt.Worker(path, { env });
    logger.info(`Worker ${path} started!`);
    worker.on("started", (msg) => {
        logger.info(`Worker ${path} started! ${msg}`);
    });
    worker.on("error", (err) => {
        logger.error({ err }, "Worker error");
    });
    worker.on("exit", () => {
        logger.info(`Process shut down ${path}!`);
        setTimeout(() => runWorker(path), 1000);
    });
}
runWorker((0, path_1.resolve)(__dirname, "..", "server/mc-server.js"));
runWorker((0, path_1.resolve)(__dirname, "..", "client/server.js"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1EQUFxQztBQUNyQyxvREFBNEI7QUFDNUIsZ0RBQXdCO0FBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUEsY0FBSSxHQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFakQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtJQUM3QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ2pCO0FBRUQsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0FBRXBCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7SUFDMUIsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztDQUN6QztBQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDeEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztDQUNyQztBQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7SUFDdkIsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztDQUNuQztBQUVELFNBQVMsU0FBUyxDQUFDLElBQVk7SUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLENBQUM7SUFFdkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxDQUFDLElBQUEsY0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQzNELFNBQVMsQ0FBQyxJQUFBLGNBQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyJ9