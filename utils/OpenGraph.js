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

export function generateImageUrlForPage({ pageTitle }) {
  const titleFontSize = 42;
  const titleFrontY = 20;

  const nameConfigFront = [
    `w_560`,
    "c_fit",
    "co_rgb:ffb626",
    `x_0`,
    `y_${titleFrontY}`,
    `l_text:worksansbold.ttf_${titleFontSize}_center_letter_spacing_1:${cleanText(
      `${pageTitle.toUpperCase()}`,
    )}`,
  ].join(",");

  const nameConfigBack = [
    `w_560`,
    "c_fit",
    "co_rgb:d90d10",
    `x_3`,
    `y_${titleFrontY + 3}`,
    `l_text:worksansbold.ttf_${titleFontSize}_center_letter_spacing_1:${cleanText(
      `${pageTitle.toUpperCase()}`,
    )}`,
  ].join(",");

  // configure social media image dimensions, quality, and format
  const imageConfig = [`w_${IMG_WIDTH}`, `h_${IMG_HEIGHT}`, "c_fill", "q_auto", "f_auto"].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    "https://res.cloudinary.com",
    "whitep4nth3r",
    "image",
    "upload",
    imageConfig,
    nameConfigBack,
    nameConfigFront,
    "the_claw_og_base_generic.png",
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
}

export function generateImageUrlForStreamer({ streamerName, avatarUrl, emoteUrl }) {
  const avatarUrlb64 = Buffer.from(avatarUrl).toString("base64");
  const avatarTransformations = ["r_max", "w_182", "h_182", "c_fill"].join(",");
  const avatarPlacementQualifiers = ["x_0", "y_-175"].join(",");
  const avatarConfig = `l_fetch:${avatarUrlb64}/${avatarTransformations}/fl_layer_apply,${avatarPlacementQualifiers}`;

  const emoteUrlToUse =
    emoteUrl ||
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d1fd5f891674630984d517d13a35b60/default/light/3.0";

  const emoteUrlb64 = Buffer.from(emoteUrlToUse).toString("base64");
  const emoteTransformations = ["r_max", "w_64", "h_64", "c_fit", "bo_4px_solid_rgb:ffffff"].join(
    ",",
  );
  const emotePlacementQualifiers = ["x_282", "y_123"].join(",");
  const emoteConfig = `l_fetch:${emoteUrlb64}/${emoteTransformations}/fl_layer_apply,${emotePlacementQualifiers}`;

  // DO NOT DELETE, THIS WAS AN ACCOMPLISHMENT
  // const emoteConfig = [];
  // const emoteSize = 50;
  // const emoteGutter = 20;

  // for (let i = 0; i < emoteUrls.length; i++) {
  //   let base64 = Buffer.from(emoteUrls[i]).toString("base64");
  //   let transformations = [`w_${emoteSize}`, `h_${emoteSize}`, "c_fit"].join(",");
  //   let placementQuals = [
  //     `x_${xBasePosition + i * (emoteSize + emoteGutter)}`,
  //     "y_230",
  //     "g_north_west",
  //   ].join(",");
  //   emoteConfig.push(`l_fetch:${base64}/${transformations}/fl_layer_apply,${placementQuals}`);
  // }

  const nameFontSize = 56;
  const nameFrontY = 10;

  const nameConfigFront = [
    `w_600`,
    "c_fit",
    "co_rgb:ffb626",
    `x_0`,
    `y_${nameFrontY}`,
    `l_text:worksansbold.ttf_${nameFontSize}_letter_spacing_1:${cleanText(
      `${streamerName.toUpperCase()}`,
    )}`,
  ].join(",");

  const nameConfigBack = [
    `w_600`,
    "c_fit",
    "co_rgb:d90d10",
    `x_3`,
    `y_${nameFrontY + 3}`,
    `l_text:worksansbold.ttf_${nameFontSize}_letter_spacing_1:${cleanText(
      `${streamerName.toUpperCase()}`,
    )}`,
  ].join(",");

  // configure social media image dimensions, quality, and format
  const imageConfig = [`w_${IMG_WIDTH}`, `h_${IMG_HEIGHT}`, "c_fill", "q_auto", "f_auto"].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    "https://res.cloudinary.com",
    "whitep4nth3r",
    "image",
    "upload",
    avatarConfig,
    emoteConfig,
    imageConfig,
    nameConfigBack,
    nameConfigFront,
    "the_claw_og_base.png",
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
}
