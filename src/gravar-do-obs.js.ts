import OBSWebSocket from "obs-websocket-js";
import fs from "fs";

// Configurações de conexão
const obs = new OBSWebSocket();
const screenshotDir = "./screenshots"; // Diretório para salvar as capturas de tela

obs
  // endereço de rede do obs + senha do websocket(omitir se não tiver configurada)
  .connect("ws://localhost:4455", "asdf1234")
  .then(() => {
    console.log("Conectado ao OBS Studio.");

    // Certifique-se de que o diretório de capturas de tela exista
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    let screenshotIndex = 0;

    setInterval(() => {
      obs
        .call("GetSourceScreenshot", {
          sourceName: "camera",
          imageFormat: "jpeg",
          imageWidth: 1366,
          imageHeight: 720,
          imageCompressionQuality: 50,
        })
        .then((data: any) => {
          const screenshotPath = `${screenshotDir}/screenshot_${screenshotIndex}.jpeg`;

          const base64Data = data.imageData.replace(
            /^data:image\/jpeg;base64,/,
            ""
          );
          const imageData = Buffer.from(base64Data, "base64");
          fs.writeFileSync(screenshotPath, imageData);

          console.log(`Captura de tela salva em: ${screenshotPath}`);

          screenshotIndex++;
        })
        .catch((err: Error) => {
          console.error("Erro ao obter captura de tela:", err);
        });
      // }, 1000);
    }, 33.33);
  })
  .catch((err: Error) => {
    console.error("Erro ao conectar ao OBS Studio:", err);
  });
