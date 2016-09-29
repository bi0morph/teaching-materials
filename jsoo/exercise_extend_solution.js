
function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
}

Video.prototype.watch = function() {
    console.log("Вы посмотрели " + this.seconds + "секунд видео под названием '" + this.title + "'");
};

function MusicVideo(title, uploader, seconds, artist) {
    Video.call(this, title, uploader, seconds);
    this.artist = artist;
}

MusicVideo.prototype = new Video();
MusicVideo.constructor = MusicVideo;

// A new method on this object
MusicVideo.prototype.rockOut = function() {
  console.log("Вы зажигали под '" + this.title + "' от " + this.artist + "!");
};

// Instantiating a new object
var musicVid = new MusicVideo("La Bamba", "Pamela", 250, "Ritchie Valens");
musicVid.rockOut();