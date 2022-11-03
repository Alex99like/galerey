export const calcWidth = (width: number | undefined) => {
  if (width) {
    if (width > 1440) return 1;
    if (width > 1285 && width < 1440) return 1;
    if (width > 980 && width < 1285) return 1.25;
    if (width > 600 && width < 980) return 1.8;
    if (width < 600) return 3;
  }
  return 3;
};
