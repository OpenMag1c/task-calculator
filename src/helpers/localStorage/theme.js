import keys from "@/helpers/localStorage/keys"
import themes from "@/constants/themes"

export const getThemeFromStorage = () =>
  window.localStorage.getItem(keys.theme) || themes.lightTheme

export const setThemeToStorage = theme => window.localStorage.setItem(keys.theme, theme)
