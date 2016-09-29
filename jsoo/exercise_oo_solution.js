
function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
}

Video.prototype.watch = function() {
    console.log("Вы посмотрели " + this.seconds + "секунд видео под названием '" + this.title + "'");
};

var vid = new Video("Otters Holding Hands", "cynthia holmes", 240);
vid.watch();


var vid2 = new Video("Hakuna Matata", "elreydeleon", 300);
vid2.watch();
