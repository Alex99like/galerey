const maxWidthStart = 1285;
const maxWidthEnd = 1440;
const middleWidthEnd = 980;
const middleWidthStart = 600;

export const calcWidth = (width: number | undefined) => {
  if (width) {
    if (width > maxWidthEnd) return 1;
    if (width > maxWidthStart && width < maxWidthEnd) return 1;
    if (width > middleWidthEnd && width < maxWidthStart) return 1.25;
    if (width > middleWidthStart && width < middleWidthEnd) return 1.8;
    if (width < middleWidthStart) return 3;
  }
  return 3;
};
