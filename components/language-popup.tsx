"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, X } from "lucide-react"

interface LanguagePopupProps {
  onLanguageSelect: (language: string) => void
}

export default function LanguagePopup({ onLanguageSelect }: LanguagePopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already selected a language
    const savedLanguage = localStorage.getItem("selectedLanguage")
    if (!savedLanguage) {
      setIsOpen(true)
    } else {
      onLanguageSelect(savedLanguage)
    }
  }, [onLanguageSelect])

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
  ]

  const handleLanguageSelect = (languageCode: string) => {
    localStorage.setItem("selectedLanguage", languageCode)
    onLanguageSelect(languageCode)
    setIsOpen(false)
  }

  const handleClose = () => {
    // Default to English if user closes without selecting
    localStorage.setItem("selectedLanguage", "en")
    onLanguageSelect("en")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Popup content */}
      <Card className="relative w-full max-w-md mx-4 shadow-2xl border-2 border-navy-200">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-navy-700" />
              <CardTitle className="text-xl font-serif text-gray-900">Choose Your Language</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClose} className="h-8 w-8 p-0 hover:bg-gray-100">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-2">Select your preferred language for the best experience</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-3">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant="outline"
                className="h-auto p-3 flex flex-col items-center space-y-1 hover:bg-navy-50 hover:border-navy-300 transition-colors"
                onClick={() => handleLanguageSelect(language.code)}
              >
                <span className="text-2xl">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </Button>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">You can change this later in the settings</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
