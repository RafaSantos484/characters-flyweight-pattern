import { Color } from "./types";

export const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet, lacus ut tristique accumsan, sapien ligula vehicula est, vitae mattis mauris sapien in nibh. Morbi tellus nulla, faucibus vitae dictum id, maximus id arcu. Proin a nibh facilisis, blandit libero at, faucibus leo. Aliquam in nulla dignissim, aliquam eros quis, venenatis turpis. Pellentesque pretium, lectus ac efficitur auctor, purus augue bibendum odio, a semper nibh nulla commodo ante. Aliquam tempus posuere orci, nec vestibulum libero accumsan sit amet. Donec rhoncus eros justo, eu fringilla erat imperdiet non. Fusce nec ullamcorper nunc, condimentum imperdiet felis.\n";

const boldCode = "\x1b[1m";
const italicCode = "\x1b[3m";
const endCode = "\x1b[0m";

const colorsCodes = {
  [Color.Black]: "\x1b[30m",
  [Color.Red]: "\x1b[31m",
  [Color.Green]: "\x1b[32m",
  [Color.Yellow]: "\x1b[33m",
  [Color.Blue]: "\x1b[34m",
  [Color.White]: "\x1b[37m",
};

export function wrapBold(str: string) {
  return `${boldCode}${str}${endCode}`;
}

export function wrapItalic(str: string) {
  return `${italicCode}${str}${endCode}`;
}

export function wrapColor(str: string, color: Color) {
  return `${colorsCodes[color]}${str}${endCode}`;
}
