import { getRandomEntry } from "@whitep4nth3r/get-random-entry";

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

export function getEmotesForOg(emotes) {
  const emoteGroup = new Set();

  const returnArraySize = emotes.length >= 5 ? 5 : emotes.length;

  while (emoteGroup.size < returnArraySize) {
    let newRandomEntry = getRandomEntry(emotes);
    emoteGroup.add(newRandomEntry.imageUrl);
  }

  return Array.from(emoteGroup);
}
