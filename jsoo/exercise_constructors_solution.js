/* From the first exercise */
function Video(config) {
    config = config || {};
    this.title = config.title || "Untitled";
    this.uploader = config.uploader || "Unknown";
    this.seconds = config.seconds || 0;
}

Video.prototype.watch = function() {
    console.log("Вы посмотрели " + this.seconds + "секунд видео под названием '" + this.title + "'");
};

var vid = new Video({title: "La Bamba", uploader: "Pamela", seconds: 250});
vid.watch();

function MusicVideo(config) {
    Video.call(this, config);
    this.artist = config.artist;
}

MusicVideo.prototype = new Video();
MusicVideo.constructor = MusicVideo;

// A new method on this object
MusicVideo.prototype.rockOut = function() {
    console.log("Вы зажигали под '" + this.title + "' от " + this.artist + "!");
};

// Instantiating a new object
var musicVid = new MusicVideo({title: "La Bamba", uploader: "Pamela", seconds: 250, artist: "Ritchie Valens"});
musicVid.rockOut();