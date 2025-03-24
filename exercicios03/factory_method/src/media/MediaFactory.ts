import { Media } from "./Media";
import { AudioMedia } from "./AudioMedia";
import { VideoMedia } from "./VideoMedia";
import { PodcastMedia } from "./PodcastMedia";

export class MediaFactory {
    static createMedia(type: string): Media {
        if (type === "audio") {
            return new AudioMedia();
        } else if (type === "video") {
            return new VideoMedia();
        } else if (type === "podcast") {
            return new PodcastMedia();
        } else {
            throw new Error("Tipo de mídia inválido");
        }
    }
}
