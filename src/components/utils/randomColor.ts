export const randomColor = () => {
  const colors: string[] = [
    '#F9E8F1',
    '#EFECFD',
    '#F3FCFF',
    '#FCEEE2',
    '#EFECFD',
    '#F9E2D9',
    '#EFEC9D',
    '#F3DCFF',
    '#FAEE',
    '#EFECAD',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
