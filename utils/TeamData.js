export default class TeamData {
  static async getStreamers() {
    const streamers = await fetch(
      "https://jwalter-teamschedule.builtwithdark.com/schedule",
    ).then((response) => response.json());

    return streamers;
  }

  static async getStreamer(username) {
    const streamers = await TeamData.getStreamers();
    const streamer = streamers.filter((streamer) => streamer.login === username).pop();
    return streamer;
  }
}
