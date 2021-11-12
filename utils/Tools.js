export function transformEmotes(emotes) {
  return emotes?.length > 0
    ? emotes.map((emote) => {
        return {
          ...emote,
          imageUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${emote.id}/default/dark/3.0`,
        };
      })
    : [];
}
