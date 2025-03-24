import { Media } from "./Media";

export class VideoMedia implements Media {
    play(): void {
        console.log("Reproduzindo vídeo...");
    }

    stop(): void {
        console.log("Vídeo parado.");
    }
}
