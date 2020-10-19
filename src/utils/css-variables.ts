import { cssVariables } from "@/site-config.json";

export function getCssVariableStrings() {
  let result = "";
  result += ":root {";
  Object.keys(cssVariables).forEach((key) => {
    result += `--${key}: ${(cssVariables as any)[key]};`;
  });
  result += "}";
  return result;
}
