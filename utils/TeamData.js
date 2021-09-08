export default class TeamData {
  static CACHE = [];

  static async getStreamers() {
    if (TeamData.CACHE.length > 0) {
      return TeamData.CACHE;
    }

    const streamers = await fetch(
      "https://jwalter-teamschedule.builtwithdark.com/schedule",
    ).then((response) => response.json());

    TeamData.CACHE = streamers;

    return streamers;
  }

  static async getStreamer(username) {
    const streamers = await TeamData.getStreamers();
    const streamer = streamers.filter((streamer) => streamer.login === username).pop();
    return streamer;
  }
}
