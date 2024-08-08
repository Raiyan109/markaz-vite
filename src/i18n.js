import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLang: 'en', // default language
    returnObjects: true,
    resources: {
        // these are languages written from left to right
        en: {
            translation: {
                hero: {
                    heading1: 'Book The  ',
                    heading2: 'Sport',
                    heading3: 'Facilities',
                    paragraph: ' Find and book your sport facility with just a few clicks. We offer a wide range of sports and facilities to fullfil your need.'
                }
            },
        },
        bn: {
            translation: {
                hero: {
                    heading1: 'খেলার',
                    heading2: 'সরঞ্জামাদি ',
                    heading3: 'বুক করুন ',
                    paragraph: ' আপনার পছন্দমত খেলার সুবিধা বুক করুন সামান্য এক ক্লিকেই। '
                }
            },
        },
    }
})