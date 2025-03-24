"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFactory = void 0;
const AudioMedia_1 = require("./AudioMedia");
const VideoMedia_1 = require("./VideoMedia");
const PodcastMedia_1 = require("./PodcastMedia");
class MediaFactory {
    static createMedia(type) {
        if (type === "audio") {
            return new AudioMedia_1.AudioMedia();
        }
        else if (type === "video") {
            return new VideoMedia_1.VideoMedia();
        }
        else if (type === "podcast") {
            return new PodcastMedia_1.PodcastMedia();
        }
        else {
            throw new Error("Tipo de mídia inválido");
        }
    }
}
exports.MediaFactory = MediaFactory;
