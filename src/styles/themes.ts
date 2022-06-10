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
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xlg: 20,
    h3: 30,
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
  theme1: "rgba(65,74,76, 1)",
  theme2: "rgba(59,68,75, 1)",
  theme3: "rgba(53,56,57, 1)",
  theme4: "rgba(35,43,43, 1)",
  theme5: "rgba(14,17,17, 1)",
  theme6: "rgba(14,17,17, 0.5)",
  theme7: "rgba(35,43,43, 0.5)",
  theme8: "rgba(42, 42, 42, 1)",
  theme9: "rgba(48, 48, 48, 1)",
  grey1: "rgba(192,197,206, 1)",
  grey2: "rgba(167,173,186, 1)",
  grey3: "rgba(101,115,126, 1)",
  grey4: "rgba(79,91,102, 1)",
  grey5: "rgba(52,61,70, 1)",
};

const size = {
  mobile: 425,
  tablet: 768,
  desktop: 1440,
  header: 65,
  dHeader: 80,
  maxWidth: 1200,
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
