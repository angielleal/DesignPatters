import { Media } from "./Media";

export class AudioMedia implements Media {
    play(): void {
        console.log("Reproduzindo áudio...");
    }

    stop(): void {
        console.log("Áudio parado.");
    }
}
