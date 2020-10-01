declare global {
  interface Window {
    REACT_APP_MEDIA_LOCATION: string | null | undefined;
    REACT_APP_IPIFY_KEY: string | null | undefined;
  }
}

export const DEFAULT_MEDIA_LOCATION: string =
  window.REACT_APP_MEDIA_LOCATION || "./";
export const AUDIO_JSON_FILENAME: string = "audio.json";
export const IPIFY_KEY: string = window.REACT_APP_IPIFY_KEY || "";
