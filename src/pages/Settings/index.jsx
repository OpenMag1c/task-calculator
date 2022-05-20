import React, {useContext, useState} from 'react'
import {SelectTheme, Settings, Title} from "@/pages/Settings/components"
import themes from "@/constants/themes"
import {ThemeContext} from "@/index"
import {SETTINGS} from "@/constants/names"
import storageKeys from "@/helpers/localStorage/keys"

export default () => {
  const [theme, setTheme] = useState(window.localStorage.getItem(storageKeys.theme) || themes.lightTheme)
  const toggleTheme = useContext(ThemeContext)
  const onChangeTheme = event => {
    const updateTheme = event.target.value
    toggleTheme(updateTheme)
    setTheme(updateTheme)
  }

  return (
    <Settings>
      <Title>
        {SETTINGS}
      </Title>
      <SelectTheme onChange={onChangeTheme} value={theme}>
        <option value={themes.lightTheme}>
          {themes.lightTheme}
        </option>
        <option value={themes.darkTheme}>
          {themes.darkTheme}
        </option>
      </SelectTheme>
    </Settings>
    )
}
