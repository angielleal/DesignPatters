import { Media } from "./Media";

export class PodcastMedia implements Media {
    play(): void {
        console.log("Reproduzindo podcast...");
    }

    stop(): void {
        console.log("Podcast parado.");
    }
}
