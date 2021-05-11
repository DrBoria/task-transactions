import extractColors from 'utils/extractColors';

function addAlpha(hex: string, alpha: number): string {
  const { r, g, b } = extractColors(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default addAlpha;
