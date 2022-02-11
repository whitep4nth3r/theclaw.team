export default class TeamData {
  static async getStreamers() {
    const streamers = await fetch("https://jwalter-teamschedule.builtwithdark.com/schedule").then(
      (response) => response.json(),
    );

    return streamers;
  }

  static async getStreamer(username) {
    const streamers = await this.getStreamers();
    const streamer = streamers.filter((streamer) => streamer.login === username).pop();
    return streamer;
  }

  static async getStreamerLogins() {
    const streamers = await this.getStreamers();
    return streamers.map((streamer) => streamer.login.toLowerCase());
  }

  static async getWhosNext() {
    return await fetch("https://jwalter-teamschedule.builtwithdark.com/whosnext").then((response) =>
      response.json(),
    );
  }
}
