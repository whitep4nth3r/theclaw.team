/**
 * Encode characters for Cloudinary URL
 * Encodes some not allowed in Cloudinary parameter values twice:
 *   hash, comma, slash, question mark, backslash
 *   https://support.cloudinary.com/hc/en-us/articles/202521512-How-to-add-a-slash-character-or-any-other-special-characters-in-text-overlays-
 *
 * @param {string} text
 * @return {string}
 */
function cleanText(text) {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, "%25$1");
}

export const IMG_WIDTH = 1000;
export const IMG_HEIGHT = 500;

export function generateImageUrl({ streamerName, avatarUrl, emoteUrls }) {
  const xBasePosition = 370;

  const avatarUrlb64 = Buffer.from(avatarUrl).toString("base64");
  const avatarTransformations = [
    "r_max",
    "bo_6px_solid_rgb:ffb626",
    "w_200",
    "h_200",
    "c_fill",
    "g_north_west",
  ].join(",");
  const avatarPlacementQualifiers = [`x_${xBasePosition}`, "y_120"].join(",");
  const avatarConfig = `l_fetch:${avatarUrlb64}/${avatarTransformations}/fl_layer_apply,${avatarPlacementQualifiers}`;

  const emoteConfig = [];
  const emoteSize = 50;
  const emoteGutter = 20;

  for (let i = 0; i < emoteUrls.length; i++) {
    let base64 = Buffer.from(emoteUrls[i]).toString("base64");
    let transformations = [`w_${emoteSize}`, `h_${emoteSize}`, "c_fit"].join(",");
    let placementQuals = [
      `x_${xBasePosition + i * (emoteSize + emoteGutter)}`,
      "y_230",
      "g_north_west",
    ].join(",");
    emoteConfig.push(`l_fetch:${base64}/${transformations}/fl_layer_apply,${placementQuals}`);
  }

  const nameConfig = [
    `w_600`,
    "c_fit",
    "co_rgb:ffb626",
    `x_${xBasePosition}`,
    "y_30",
    "g_north_west",
    `l_text:worksansbold.ttf_56_letter_spacing_1:${cleanText(
      `CHECK OUT ${streamerName.toUpperCase()}`,
    )}`,
  ].join(",");

  const sloganConfig = [
    `w_360`,
    "c_fit",
    "co_rgb:ffffff",
    `x_${xBasePosition}`,
    "y_330",
    "g_north_west",
    `l_text:worksansbold.ttf_40_italic:${cleanText("Build stuff, learn things, love what you do")}`,
  ].join(",");

  const theClawConfig = [
    `w_600`,
    "c_fit",
    `co_rgb:489fb9`,
    `x_${xBasePosition}`,
    "y_160",
    "g_north_west",
    `l_text:worksansbold.ttf_30_letter_spacing_1:${cleanText("tech streamer at theclaw.team")}`,
  ];

  // configure social media image dimensions, quality, and format
  const imageConfig = [`w_${IMG_WIDTH}`, `h_${IMG_HEIGHT}`, "c_fill", "q_auto", "f_auto"].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    "https://res.cloudinary.com",
    "whitep4nth3r",
    "image",
    "upload",
    avatarConfig,
    emoteConfig.join("/"),
    imageConfig,
    nameConfig,
    sloganConfig,
    theClawConfig,
    "the_claw_og_base.png",
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
}
