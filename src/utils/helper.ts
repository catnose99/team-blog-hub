import { members } from "@members";
export function getMemberByName(name: string) {
  return members.find((member) => member.name === name);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
