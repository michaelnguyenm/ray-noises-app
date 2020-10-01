declare global {
  interface Window {
    REACT_APP_MEDIA_LOCATION: string | null | undefined;
    REACT_APP_IPIFY_KEY: string | null | undefined;
  }
}

/** @constant DEFAULT_MEDIA_LOCATION
 *  @type {string}
 *  @default "./"
 */
export const DEFAULT_MEDIA_LOCATION: string =
  window.REACT_APP_MEDIA_LOCATION || "./";
/** @constant AUDIO_JSON_FILENAME
 *  @type {string}
 *  @default "audio.json"
 */
export const AUDIO_JSON_FILENAME: string = "audio.json";
/** @constant IPIFY_KEY
 *  @type {string}
 *  @default ""
 */
export const IPIFY_KEY: string = window.REACT_APP_IPIFY_KEY || "";
