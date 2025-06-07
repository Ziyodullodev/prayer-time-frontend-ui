"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Save, MapPin, Moon, Sun, ArrowLeft, Clock } from "lucide-react"
import { useTheme } from "./lib/theme-context"

export default function SettingsPage() {
  const [selectedCountry, setSelectedCountry] = useState("uzbekiston")
  const [selectedCity, setSelectedCity] = useState("toshkent")
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"
  const [prayerMethod, setPrayerMethod] = useState("hanafi")

  const countries = [
    { value: "uzbekiston", label: "O'zbekiston" },
    { value: "qozogiston", label: "Qozog'iston" },
    { value: "qirg'iziston", label: "Qirg'iziston" },
    { value: "tojikiston", label: "Tojikiston" },
  ]

  const cities = [
    { value: "toshkent", label: "Toshkent" },
    { value: "samarqand", label: "Samarqand" },
    { value: "buxoro", label: "Buxoro" },
    { value: "andijon", label: "Andijon" },
    { value: "namangan", label: "Namangan" },
    { value: "fargona", label: "Farg'ona" },
  ]

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-emerald-800">Namoz Vaqtlari</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Bosh sahifa
              </a>
              <a
                href="/weekly-timetable"
                className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Haftalik jadval
              </a>
              <a href="/settings" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                Sozlamalar
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-4 mb-6">
          <a href="/" className="p-2 rounded-lg hover:bg-emerald-100 transition-colors">
            <ArrowLeft className="h-5 w-5 text-emerald-700" />
          </a>
          <h1 className="text-3xl font-bold text-emerald-800">Sozlamalar</h1>
        </div>

        <div className="space-y-6">
          {/* Location Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700">
                <MapPin className="h-5 w-5" />
                <span>Joylashuv</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="country" className="text-gray-700">
                  Mamlakat
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger id="country" className="w-full bg-white mt-1">
                    <SelectValue placeholder="Mamlakatni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="city" className="text-gray-700">
                  Shahar
                </Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger id="city" className="w-full bg-white mt-1">
                    <SelectValue placeholder="Shaharni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700">
                {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span>Ko'rinish</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-gray-700">
                  Qorong'i rejim
                </Label>
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={handleThemeChange}
                  className="data-[state=checked]:bg-emerald-600"
                />
              </div>
            </CardContent>
          </Card>

          {/* Prayer Method Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-md">
            <CardHeader>
              <CardTitle className="text-emerald-700">Namoz hisoblash usuli</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={prayerMethod} onValueChange={setPrayerMethod} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hanafi" id="hanafi" className="text-emerald-600" />
                  <Label htmlFor="hanafi" className="text-gray-700">
                    Hanafiy mazhabi
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shafi" id="shafi" className="text-emerald-600" />
                  <Label htmlFor="shafi" className="text-gray-700">
                    Shofe'iy mazhabi
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white flex items-center gap-2">
              <Save className="h-4 w-4" />
              <span>Saqlash</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
