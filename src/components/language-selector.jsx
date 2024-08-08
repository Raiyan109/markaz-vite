import { useTranslation } from "react-i18next"

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'bn', lang: 'Bangla' },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex gap-3">
      {languages.map((lng) => {
        return <button key={lng.code}
          className={lng.code === i18n.language ? 'selected' : ''}
          onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
      })}
    </div>
  )
}

export default LanguageSelector