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
  return encodeURIComponent(
    text.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, ""),
  ).replace(/%(23|2C|2F|3F|5C)/g, "%25$1");
}

export const IMG_WIDTH = 1000;
export const IMG_HEIGHT = 500;

export function generateImageUrl({ streamerName, bio, avatarUrl }) {
  const avatarUrlb64 = Buffer.from(avatarUrl).toString("base64");
  const avatarTransformations = [
    "r_max",
    "bo_6px_solid_rgb:ffb626",
    "w_200",
    "h_200",
    "c_fill",
  ].join(",");
  const avatarPlacementQualifiers = ["x_370", "y_120"].join(",");
  const avatarConfig = `l_fetch:${avatarUrlb64}/${avatarTransformations}/fl_layer_apply,${avatarPlacementQualifiers}`;

  const nameConfig = [
    `w_600`,
    "c_fit",
    "co_rgb:ffb626",
    "x_370",
    "y_30",
    "g_north_west",
    `l_text:worksansbold.ttf_56_letter_spacing_1:${cleanText(streamerName.toUpperCase())}`,
  ].join(",");

  const bioConfig = [
    `w_360`,
    "c_fit",
    "co_rgb:ffffff",
    "x_370",
    "y_300",
    "g_north_west",
    `l_text:worksansreg.ttf_20_italic:${cleanText(bio)}`,
  ].join(",");

  const theClawConfig = [
    `w_600`,
    "c_fit",
    `co_rgb:489fb9`,
    "x_370",
    "y_100",
    "g_north_west",
    `l_text:worksansbold.ttf_30_letter_spacing_1:${cleanText("theclaw.team")}`,
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
    imageConfig,
    nameConfig,
    bioConfig,
    theClawConfig,
    "the_claw_og_base.png",
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
}
