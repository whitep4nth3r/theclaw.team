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
  const avatarUrlb64 = Buffer.from(avatarUrl).toString("base64");
  const avatarTransformations = [
    "r_max",
    "bo_6px_solid_rgb:ffb626",
    "w_200",
    "h_200",
    "c_fill",
    "g_north_west",
  ].join(",");
  const avatarPlacementQualifiers = ["x_370", "y_120"].join(",");
  const avatarConfig = `l_fetch:${avatarUrlb64}/${avatarTransformations}/fl_layer_apply,${avatarPlacementQualifiers}`;

  const emote1b64 = Buffer.from(emoteUrls[0]).toString("base64");
  const emote1Transformations = ["w_50", "h_50", "c_fit"].join(",");
  const emote1PlacementQualifiers = ["x_370", "y_230", "g_north_west"].join(",");
  const emote1Config = `l_fetch:${emote1b64}/${emote1Transformations}/fl_layer_apply,${emote1PlacementQualifiers}`;

  const emote2b64 = Buffer.from(emoteUrls[1]).toString("base64");
  const emote2Transformations = ["w_50", "h_50", "c_fit"].join(",");
  const emote2PlacementQualifiers = ["x_440", "y_230", "g_north_west"].join(",");
  const emote2Config = `l_fetch:${emote2b64}/${emote2Transformations}/fl_layer_apply,${emote2PlacementQualifiers}`;

  const emote3b64 = Buffer.from(emoteUrls[2]).toString("base64");
  const emote3Transformations = ["w_50", "h_50", "c_fit"].join(",");
  const emote3PlacementQualifiers = ["x_510", "y_230", "g_north_west"].join(",");
  const emote3Config = `l_fetch:${emote3b64}/${emote3Transformations}/fl_layer_apply,${emote3PlacementQualifiers}`;

  const emote4b64 = Buffer.from(emoteUrls[3]).toString("base64");
  const emote4Transformations = ["w_50", "h_50", "c_fit"].join(",");
  const emote4PlacementQualifiers = ["x_580", "y_230", "g_north_west"].join(",");
  const emote4Config = `l_fetch:${emote4b64}/${emote4Transformations}/fl_layer_apply,${emote4PlacementQualifiers}`;

  const emote5b64 = Buffer.from(emoteUrls[4]).toString("base64");
  const emote5Transformations = ["w_50", "h_50", "c_fit"].join(",");
  const emote5PlacementQualifiers = ["x_650", "y_230", "g_north_west"].join(",");
  const emote5Config = `l_fetch:${emote5b64}/${emote5Transformations}/fl_layer_apply,${emote5PlacementQualifiers}`;

  const nameConfig = [
    `w_600`,
    "c_fit",
    "co_rgb:ffb626",
    "x_370",
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
    "x_370",
    "y_330",
    "g_north_west",
    `l_text:worksansbold.ttf_40_italic:${cleanText("Build stuff, learn things, love what you do")}`,
  ].join(",");

  const theClawConfig = [
    `w_600`,
    "c_fit",
    `co_rgb:489fb9`,
    "x_370",
    "y_160",
    "g_north_west",
    `l_text:worksansbold.ttf_30_letter_spacing_1:${cleanText("at theclaw.team")}`,
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
    emote1Config,
    emote2Config,
    emote3Config,
    emote4Config,
    emote5Config,
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
