export function calculateRelativeLuminance(hexColor: string): number {
  const hex = hexColor.replace("#", "");

  // Split the hex color into its red, green, and blue components
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  // Calculate the relative luminance using the formula
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function darkenHexColor(hexColor: string): string {
  // Remove the '#' symbol if present
  hexColor = hexColor.replace("#", "");

  // Convert the hex color to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the darker shade by reducing the RGB values
  const darkerR = Math.round(r * 0.8);  // 80% of the original value
  const darkerG = Math.round(g * 0.8);
  const darkerB = Math.round(b * 0.8);

  // Convert the darker RGB values back to hex
  return `#${darkerR.toString(16)}${darkerG.toString(16)}${darkerB.toString(16)}`;
}