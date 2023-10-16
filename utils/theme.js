const lightTheme = {
  logoBtnSpanAfter: "var(--color-blue-light)",
  tagColor: "var(--color-blue)",
  tagBg: "var(--color-blue-light)",
  imageShadow: "var(--color-grey)",
  imageBgAfter: "var(--color-blue-light)",
  sidebarShadow: "var(--color-grey)",
  sidebarBgStart: "var(--color-white-dark)",
  sidebarBgEnd: "var(--color-blue-light)",
  imgBefore: "var(--color-blue-mid)",
  imgAfter: "transparent",
  para: "var(--color-black-light)",
  logoText: "var(--color-black)",
  logoMain: "var(--color-blue)",
  navBg: "var(--t-color-white)",
  navBorderBottom: "var(--color-grey-light)",
  navShadow: "var(--color-white)",
  bodyBg: "var(--color-white-dark)",
  bodyColor: "var(--color-black-light)",
  linkText: "var(--color-blue)",
  linkBefore: "var(--color-blue-dark)",
  linkHover: "var(--color-blue-dark)",
  linkActive: "var(--color-black-dark)",
  code: "var(--color-blue)",
  inputBorder: "var(--color-grey)",
  inputFocus: "var(--color-blue)",
  inputBg: "var(--color-white)",
  inputColor: "var(--color-black)",
  btnBorder: "var(--color-grey)",
  btnColor: "var(--color-blue)",
  btnBg: "transparent",
  btnHoverBorder: "var(--color-blue-dark)",
  btnHoverColor: "var(--color-blue-dark)",
  btnHoverBg: "var(--color-blue-light)",
  btnIconBg: "var(--color-blue)",
  btnIconColor: "var(--color-white-light)",
  btnIconHoverBg: "var(--color-blue-dark)",
  btnIconHoverColor: "var(--color-blue-light)",
  iconColor: "var(--color-blue)",
  iconBorder: "var(--color-grey)",
  iconStroke: "var(--color-blue)",
  iconHoverBg: "var(--color-blue-light)",
  iconHoverBorder: "var(--color-blue-dark)",
  iconHoverStroke: "var(--color-blue-dark)",
  linearBgStart: "var(--color-blue)",
  linearBgEnd: "var(--color-blue-dark)",
  galleryBorder: "var(--color-black-light)",
  itemBulletColor: "var(--color-blue)",
  logoBtnBorder: "var(--color-grey)",
  logoBtnBg: "var(--color-white-dark)",
  logoBtnActive: "var(--color-blue-light)",
  logoBtnBorder: "var(--color-blue-light)",
  logoBtnAfter: "var(--color-white-dark)",
  logoBtnBefore: "var(--color-white-dark)",
  workDescription: "var(--color-blue-light)",
  projectHead: "var(--color-black)",
  footBg: "var(--color-grey-light)",
  footLower: "var(--color-grey-light)",
  footLowerBg: "var(--color-white-dark)",
  footLogo: "var(--color-blue-light)",
  footCode: "var(--color-black)",
  footLinksBg: "var(--color-white-light)",
};

const darkTheme = {
  logoBtnSpanAfter: "var(--color-blue-dark-2)",
  tagColor: "var(--color-blue-light)",
  tagBg: "var(--color-blue-dark)",
  imageShadow: "var(--color-black)",
  imageBgAfter: "var(--color-blue-dark)",
  sidebarShadow: "var(--color-blue-dark-2)",
  sidebarBgStart: "var(--color-blue-dark)",
  sidebarBgEnd: "var(--color-blue-dark-2)",
  imgBefore: "var(--color-blue-dark)",
  imgAfter: "var(--color-blue)",
  para: "var(--color-grey)",
  logoText: "var(--color-blue-light-2)",
  logoMain: "var(--color-blue-light)",
  navBg: "var(--t-color-blue)",
  navBorderBottom: "var(--color-blue-dark)",
  navShadow: "var(--color-blue-dark)",
  bodyBg: "var(--color-blue-dark-2)",
  bodyColor: "var(--color-white)",
  linkText: "var(--color-blue-light-2)",
  linkBefore: "var(--color-blue-light)",
  linkHover: "var(--color-blue-light)",
  linkActive: "var(--color-blue)",
  code: "var(--color-blue-light-2)",
  inputBorder: "var(--color-blue-dark)",
  inputFocus: "var(--color-blue)",
  inputBg: "var(--color-blue-dark-2)",
  inputColor: "var(--color-white)",
  btnBorder: "var(--color-blue-dark)",
  btnColor: "var(--color-blue-light-2)",
  btnBg: "transparent",
  btnHoverBorder: "var(--color-blue-light-2)",
  btnHoverColor: "var(--color-blue-light)",
  btnHoverBg: "var(--color-blue-dark)",
  btnIconBg: "var(--color-blue-dark)",
  btnIconColor: "var(--color-blue-light)",
  btnIconHoverBg: "var(--color-blue-light)",
  btnIconHoverColor: "var(--color-blue-dark)",
  iconColor: "var(--color-blue-light-2)",
  iconBorder: "var(--color-blue-dark)",
  iconStroke: "var(--color-blue-light)",
  iconHoverBg: "var(--color-blue-dark)",
  iconHoverBorder: "var(--color-blue-light-2)",
  iconHoverStroke: "var(--color-blue-light)",
  linearBgStart: "var(--color-blue-light-2)",
  linearBgEnd: "var(--color-blue-dark)",
  galleryBorder: "var(--color-black-light)",
  itemBulletColor: "var(--color-blue)",
  logoBtnBorder: "var(--color-blue-dark)",
  logoBtnBg: "var(--color-blue-dark-2)",
  logoBtnActive: "var(--color-blue-dark)",
  logoBtnBorder: "var(--color-blue-dark)",
  logoBtnAfter: "var(--color-blue-dark-2)",
  logoBtnBefore: "var(--color-blue-dark-2)",
  workDescription: "var(--color-blue-dark)",
  projectHead: "var(--color-blue-light)",
  footBg: "var(--color-blue-light)",
  footLower: "var(--color-blue-dark)",
  footLowerBg: "var(--color-blue-dark-2)",
  footLogo: "var(--color-blue-dark)",
  footCode: "var(--color-grey)",
  footLinksBg: "var(--color-white-light)",
};

function setTheme(theme) {
  const style = document.documentElement.style;
  style.setProperty("--placeholder", theme.placeholder);
  style.setProperty("--logo-btn-span-after", theme.logoBtnSpanAfter);
  style.setProperty("--tag-color", theme.tagColor);
  style.setProperty("--tag-bg", theme.tagBg);
  style.setProperty("--image-shadow", theme.imageShadow);
  style.setProperty("--image-bg-after", theme.imageBgAfter);
  style.setProperty("--sidebar-shadow", theme.sidebarShadow);
  style.setProperty("--sidebar-bg-start", theme.sidebarBgStart);
  style.setProperty("--sidebar-bg-end", theme.sidebarBgEnd);
  style.setProperty("--para", theme.para);
  style.setProperty("--img-before", theme.imgBefore);
  style.setProperty("--img-after", theme.imgAfter);
  style.setProperty("--logo-text", theme.logoText);
  style.setProperty("--logo-main", theme.logoMain);
  style.setProperty("--nav-bg", theme.navBg);
  style.setProperty("--nav-border-bottom", theme.navBorderBottom);
  style.setProperty("--nav-shadow", theme.navShadow);
  style.setProperty("--body-bg", theme.bodyBg);
  style.setProperty("--body-color", theme.bodyColor);
  style.setProperty("--link-text", theme.linkText);
  style.setProperty("--link-before", theme.linkBefore);
  style.setProperty("--link-hover", theme.linkHover);
  style.setProperty("--link-active", theme.linkActive);
  style.setProperty("--code", theme.code);
  style.setProperty("--input-border", theme.inputBorder);
  style.setProperty("--input-focus", theme.inputFocus);
  style.setProperty("--input-bg", theme.inputBg);
  style.setProperty("--input-color", theme.inputColor);
  style.setProperty("--btn-border", theme.btnBorder);
  style.setProperty("--btn-color", theme.btnColor);
  style.setProperty("--btn-bg", theme.btnBg);
  style.setProperty("--btn-hover-border", theme.btnHoverBorder);
  style.setProperty("--btn-hover-color", theme.btnHoverColor);
  style.setProperty("--btn-hover-bg", theme.btnHoverBg);
  style.setProperty("--btn-icon-bg", theme.btnIconBg);
  style.setProperty("--btn-icon-color", theme.btnIconColor);
  style.setProperty("--btn-icon-hover-bg", theme.btnIconHoverBg);
  style.setProperty("--btn-icon-hover-color", theme.btnIconHoverColor);
  style.setProperty("--icon-color", theme.iconColor);
  style.setProperty("--icon-border", theme.iconBorder);
  style.setProperty("--icon-stroke", theme.iconStroke);
  style.setProperty("--icon-hover-bg", theme.iconHoverBg);
  style.setProperty("--icon-hover-border", theme.iconHoverBorder);
  style.setProperty("--icon-hover-stroke", theme.iconHoverStroke);
  style.setProperty("--linear-bg-start", theme.linearBgStart);
  style.setProperty("--linear-bg-end", theme.linearBgEnd);
  style.setProperty("--gallery-border", theme.galleryBorder);
  style.setProperty("--item-bullet-color", theme.itemBulletColor);
  style.setProperty("--logo-btn-border", theme.logoBtnBorder);
  style.setProperty("--logo-btn-bg", theme.logoBtnBg);
  style.setProperty("--logo-btn-active", theme.logoBtnActive);
  style.setProperty("--logo-btn-border", theme.logoBtnBorder);
  style.setProperty("--logo-btn-after", theme.logoBtnAfter);
  style.setProperty("--logo-btn-before", theme.logoBtnBefore);
  style.setProperty("--work-description", theme.workDescription);
  style.setProperty("--project-head", theme.projectHead);
  style.setProperty("--foot-bg", theme.footBg);
  style.setProperty("--foot-lower", theme.footLower);
  style.setProperty("--foot-lower-bg", theme.footLowerBg);
  style.setProperty("--foot-logo", theme.footLogo);
  style.setProperty("--foot-code", theme.footCode);
  style.setProperty("--foot-links-bg", theme.footLinksBg);
}

export default function toggleTheme(theme) {
  setTheme(theme === "dark" ? darkTheme : lightTheme);
}
