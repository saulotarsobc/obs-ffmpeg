import { exec } from "child_process";

// Após a captura de todas as imagens desejadas, combine-as em um vídeo usando FFmpeg

const screenshotDir = "./screenshots"; // Diretório para salvar as capturas de tela
const videoOutput = "./output.mp4"; // Arquivo de vídeo de saída

const ffmpegCommand = `ffmpeg -framerate 30 -i ${screenshotDir}/screenshot_%d.jpeg -c:v libx264 -pix_fmt yuv420p ${videoOutput}`;

console.log("Executando FFmpeg para criar vídeo...");

// Executar o comando FFmpeg
exec(ffmpegCommand, (error, stdout, stderr) => {
  if (error) {
    console.error("Erro ao executar FFmpeg:", error);
    return;
  }
  console.log("Vídeo criado com sucesso:", videoOutput);
});
