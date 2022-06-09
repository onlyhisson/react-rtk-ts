const margins = {
  xs: ".2rem",
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "5rem",
};

const paddings = {
  xs: ".1rem",
  sm: ".5rem",
  base: "1rem",
  normal: "1.3rem",
  lg: "1.8rem",
  xl: "3.5rem",
  xxl: "5rem",
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: 14,
    base: 16,
    lg: 18,
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
    heavy: 900,
  },
};

const defaultColor = {
  white: "#FFFFFF",
  black: "#00000",
  yellow: "#ffff4d",
  blue: "#0099ff",
  red: "#ff4d4d",
};

const colors = {
  ...defaultColor,
  main: "rgba(91, 37, 236, 1)",
  main2: "rgba(140, 102, 242, 1)",
  error: "rgba(239, 83, 83, 1)",
  error2: "rgba(239, 83, 83, 0.1)",
  font: "#e4e7eb;",
  font2: "rgba(1, 1, 1, 0.8)",
  font3: "#323232",
  font4: "rgba(1, 1, 1, 0.6)",
  font5: "#868686",
  font6: "#FFFFFF",
  grey: "#484848",
  grey2: "rgba(1, 1, 1, 0.2)",
  grey3: "#E5E5E5",
  grey4: "rgba(238, 238, 238, 0.5)",
  grey5: "#FAFAFC",
  grey6: "rgba(1, 1, 1, 0.6)",
  grey7: "rgba(0, 0, 0, 0.2)",
};

const size = {
  mobile: 425,
  tablet: 768,
  desktop: 1440,
  header: 65,
  dHeader: 80,
  maxWidth: 510,
  minWidth: 336,
};

// 미디어 쿼리
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile}px)`,
  tablet: `@media only screen and (max-width: ${size.tablet}px)`,
  desktop: `@media only screen and (max-width: ${size.desktop}px)`,
};

const lightThemeColors = {
  ...colors,
  primary: "#00FFFF",
  secondary: "#fff",
  tertiary: "#808080",
  bk: "#2f353d",
};

const darkThemeColors = {
  ...colors,
  primary: "#FFFF00",
  secondary: "#333",
  tertiary: "#d4d0c4",
  bk: "#000",
};

const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
  size,
};

const toastBasicOption = {
  autoClose: 800,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 40,
  progress: undefined,
  closeButton: false,
};

const toastCommonStyle = {
  color: colors.white,
  textAlign: "center",
  height: 90,
  paddingTop: 40,
};

export const toastOption = {
  bottomCenter: {
    ...toastBasicOption,
    position: "bottom-center",
  },
  topCenter: {
    ...toastBasicOption,
    position: "top-center",
  },
};

export const toastStyle = {
  info: {
    ...toastCommonStyle,
    backgroundColor: colors.main2,
  },
  error: {
    ...toastCommonStyle,
    backgroundColor: colors.error,
  },
};

export const commonTheme = {
  ...defalutTheme,
  colors: defaultColor,
};

export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};
