function withOpacityValue(variable, fallbackColor) {
  return ({ opacityValue }) => {
    let fallbackColorValue = "";
    if (fallbackColor) {
      fallbackColorValue = `, var(${fallbackColor})`;
    }
    if (opacityValue === undefined) {
      return `hsl(var(${variable}${fallbackColorValue}))`;
    }
    return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
  };
}

let colorObject = {
  transparent: "transparent",
  current: "currentColor",

  primary: withOpacityValue("--p"),
  "primary-focus": withOpacityValue("--pf", "--p"),
  "primary-content": withOpacityValue("--pc"),

  secondary: withOpacityValue("--s"),
  "secondary-focus": withOpacityValue("--sf", "--s"),
  "secondary-content": withOpacityValue("--sc"),

  accent: withOpacityValue("--a"),
  "accent-focus": withOpacityValue("--af", "--a"),
  "accent-content": withOpacityValue("--ac"),

  neutral: withOpacityValue("--n"),
  "neutral-focus": withOpacityValue("--nf", "--n"),
  "neutral-content": withOpacityValue("--nc"),

  "base-50": withOpacityValue("--b0"),
  "base-100": withOpacityValue("--b1", "--b0"),
  "base-200": withOpacityValue("--b2", "--b1"),
  "base-300": withOpacityValue("--b3", "--b2"),
  "base-400": withOpacityValue("--b4", "--b3"),
  "base-500": withOpacityValue("--b5", "--b4"),
  "base-600": withOpacityValue("--b6", "--b5"),
  "base-700": withOpacityValue("--b7", "--b6"),
  "base-800": withOpacityValue("--b8", "--b7"),
  "base-900": withOpacityValue("--b9", "--b8"),
  "base-surface": withOpacityValue("--bs"),
  "base-surface-hover": withOpacityValue("--bsh"),
  "base-surface-3": withOpacityValue("--bs3"),
  "base-bg": withOpacityValue("--bbg"),
  "base-content": withOpacityValue("--bc"),
  "base-content-2": withOpacityValue("--bc2"),
  "base-icon": withOpacityValue("--bi"),
  "base-border": withOpacityValue("--bb"),

  info: withOpacityValue("--in"),
  "info-content": withOpacityValue("--inc", "--nc"),

  success: withOpacityValue("--su"),
  "success-content": withOpacityValue("--suc", "--nc"),

  warning: withOpacityValue("--wa"),
  "warning-content": withOpacityValue("--wac", "--nc"),

  error: withOpacityValue("--er"),
  "error-content": withOpacityValue("--erc", "--nc"),
};

module.exports = colorObject;
