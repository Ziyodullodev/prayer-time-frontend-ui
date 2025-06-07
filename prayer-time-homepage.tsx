"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PrayerTimeHomepage() {
  const [selectedCity, setSelectedCity] = useState("toshkent")
  const [selectedCountry, setSelectedCountry] = useState("uzbekiston")

  // Mock prayer times data
  const prayerTimes = {
    fajr: "05:30",
    dhuhr: "12:15",
    asr: "15:45",
    maghrib: "18:20",
    isha: "19:50",
  }

  // Mock dates
  const gregorianDate = new Date().toLocaleDateString("uz-UZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const hijriDate = "15 Rajab 1445"

  const cities = [
    { value: "toshkent", label: "Toshkent" },
    { value: "samarqand", label: "Samarqand" },
    { value: "buxoro", label: "Buxoro" },
    { value: "andijon", label: "Andijon" },
    { value: "namangan", label: "Namangan" },
    { value: "fargona", label: "Farg'ona" },
  ]

  const countries = [
    { value: "uzbekiston", label: "O'zbekiston" },
    { value: "qozogiston", label: "Qozog'iston" },
    { value: "qirg'iziston", label: "Qirg'iziston" },
    { value: "tojikiston", label: "Tojikiston" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-emerald-800">Namoz Vaqtlari</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                Bosh sahifa
              </a>
              <a
                href="/weekly-timetable"
                className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Haftalik jadval
              </a>
              <a href="/settings" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Sozlamalar
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-emerald-700">
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-800 mb-4">Assalomu alaykum</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-emerald-100 shadow-lg">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              "Namoz mo'minning mi'roji va Alloh bilan aloqasidir"
            </p>
            <p className="text-emerald-600 mt-4 font-semibold">- Payg'ambarimiz Muhammad (s.a.v.)</p>
          </div>
        </div>

        {/* Date Display */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-emerald-100">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Milodiy sana</p>
                  <p className="font-semibold text-gray-800">{gregorianDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-emerald-100">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Hijriy sana</p>
                  <p className="font-semibold text-gray-800">{hijriDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-emerald-100 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-emerald-800">
                  <MapPin className="w-5 h-5" />
                  <span>Joylashuvni tanlang</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mamlakat</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-full bg-white/80">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shahar</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full bg-white/80">
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

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white">
                  Joylashuvni yangilash
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Prayer Times Card */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur-sm border-emerald-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800 text-center">Bugungi namoz vaqtlari</CardTitle>
                <p className="text-center text-gray-600">
                  {cities.find((c) => c.value === selectedCity)?.label},{" "}
                  {countries.find((c) => c.value === selectedCountry)?.label}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Fajr */}
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">Bomdod</h3>
                    <p className="text-2xl font-bold">{prayerTimes.fajr}</p>
                  </div>

                  {/* Dhuhr */}
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">Peshin</h3>
                    <p className="text-2xl font-bold">{prayerTimes.dhuhr}</p>
                  </div>

                  {/* Asr */}
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">Asr</h3>
                    <p className="text-2xl font-bold">{prayerTimes.asr}</p>
                  </div>

                  {/* Maghrib */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center md:col-span-1">
                    <h3 className="text-lg font-semibold mb-2">Shom</h3>
                    <p className="text-2xl font-bold">{prayerTimes.maghrib}</p>
                  </div>

                  {/* Isha */}
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center md:col-span-1">
                    <h3 className="text-lg font-semibold mb-2">Xufton</h3>
                    <p className="text-2xl font-bold">{prayerTimes.isha}</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a href="/weekly-timetable">
                    <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                      Haftalik jadvalni ko'rish
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Qibla yo'nalishi</h3>
              <p className="text-gray-600">Qibla yo'nalishini aniqlang</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Islomiy kalendar</h3>
              <p className="text-gray-600">Hijriy sanalar va bayramlar</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-emerald-100 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Yaqin masjidlar</h3>
              <p className="text-gray-600">Atrofdagi masjidlarni toping</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
