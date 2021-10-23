const { spawn } = require("child_process");
const shortid = require("shortid");
const { MoodRepository } = require("../repository/mood.repository");

class Channel {
  songids = [];

  constructor(songids) {
    this.songids = songids;

    this.callFFmpeg().then(() => {
      console.error("We should never reach here");
    });
  }

  async callFFmpeg() {
    var songid = this.songids[(Math.random() * this.songids.length) | 0];
    var channel_token = shortid.generate();
    new MoodRepository()
      .updateChannelTokenFromTrackId(songid, channel_token)
      .then(() => {
        var ffmpegcaller = spawn("ffmpeg", [
          "-re",
          "-i",
          "./public/" + songid + ".mp3",
          "-c",
          "copy",
          "-f",
          "flv",
          `rtmp://localhost:1935/live/${channel_token}`,
        ]);

        // var ffmpegcaller = spawn("ffmpeg", [
        //     "-re",
        //     "-i",
        //     `./public/${songid}.mp3`,
        //     "-c:v",
        //     "libx264",
        //     "-preset",
        //     "veryfast",
        //     "-tune",
        //     "zerolatency",
        //     "-c:a",
        //     "aac",
        //     "-ar",
        //     "44100",
        //     "-f",
        //     "flv",
        //     `rtmp://localhost/live/${channel_token}`
        // ])

        ffmpegcaller.on("message", (msg) => {
          console.log(`${msg}`);
        });
        ffmpegcaller.on("close", (code) => {
          console.log(`Process exited with code ${code}`);
          this.callFFmpeg();
        });
      });
  }
}

module.exports = {
  Channel: Channel,
};
