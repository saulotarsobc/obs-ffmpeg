import OBSWebSocket from "obs-websocket-js";
import fs from "fs";
import { exec } from "child_process";

// Configurações de conexão
const obs = new OBSWebSocket();
const screenshotDir = "./screenshots"; // Diretório para salvar as capturas de tela

// obs
//   .connect("ws://localhost:4455", "asdf1234")
//   .then(() => {
//     console.log("Conectado ao OBS Studio.");

//     // Certifique-se de que o diretório de capturas de tela exista
//     if (!fs.existsSync(screenshotDir)) {
//       fs.mkdirSync(screenshotDir);
//     }

//     let screenshotIndex = 0;

//     setInterval(() => {
//       obs
//         .call("GetSourceScreenshot", {
//           sourceName: "camera",
//           imageFormat: "jpeg",
//           imageWidth: 1366,
//           imageHeight: 720,
//           imageCompressionQuality: 50,
//         })
//         .then((data: any) => {
//           const screenshotPath = `${screenshotDir}/screenshot_${screenshotIndex}.jpeg`;

//           // Converta a imagem base64 em bytes e salve no arquivo
//           // Decodificar a string base64 removendo o cabeçalho
//           const base64Data = data.imageData.replace(
//             /^data:image\/jpeg;base64,/,
//             ""
//           );
//           const imageData = Buffer.from(base64Data, "base64");
//           fs.writeFileSync(screenshotPath, imageData);

//           console.log(`Captura de tela salva em: ${screenshotPath}`);

//           screenshotIndex++;
//         })
//         .catch((err) => {
//           console.error("Erro ao obter captura de tela:", err);
//         });
//       // }, 1000);
//     }, 33.33);
//   })
//   .catch((err) => {
//     console.error("Erro ao conectar ao OBS Studio:", err);
//   });
