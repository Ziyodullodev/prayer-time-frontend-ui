"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowLeft, Clock, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function WeeklyTimetable() {
  const [selectedCountry, setSelectedCountry] = useState("uzbekiston")
  const [selectedCity, setSelectedCity] = useState("toshkent")
  const [displayedCity, setDisplayedCity] = useState("Toshkent")

  const countries = [
    { value: "uzbekiston", label: "O'zbekiston" },
    { value: "qozogiston", label: "Qozog'iston" },
    { value: "qirg'iziston", label: "Qirg'iziston" },
    { value: "tojikiston", label: "Tojikiston" },
  ]

  const cities = {
    uzbekiston: [
      { value: "toshkent", label: "Toshkent" },
      { value: "samarqand", label: "Samarqand" },
      { value: "buxoro", label: "Buxoro" },
      { value: "andijon", label: "Andijon" },
      { value: "namangan", label: "Namangan" },
      { value: "fargona", label: "Farg'ona" },
    ],
    qozogiston: [
      { value: "olmaota", label: "Olmaota" },
      { value: "nursulton", label: "Nursulton" },
      { value: "chimkent", label: "Chimkent" },
    ],
    "qirg'iziston": [
      { value: "bishkek", label: "Bishkek" },
      { value: "osh", label: "Osh" },
    ],
    tojikiston: [
      { value: "dushanbe", label: "Dushanbe" },
      { value: "xujand", label: "Xujand" },
    ],
  }

  // Mock data for weekly prayer times
  const allPrayerTimes = {
    toshkent: [
      {
        date: "1 May, Dushanba",
        hijriDate: "22 Shawwal",
        fajr: "03:45",
        dhuhr: "12:15",
        asr: "16:30",
        maghrib: "19:45",
        isha: "21:15",
      },
      {
        date: "2 May, Seshanba",
        hijriDate: "23 Shawwal",
        fajr: "03:44",
        dhuhr: "12:15",
        asr: "16:31",
        maghrib: "19:46",
        isha: "21:17",
      },
      {
        date: "3 May, Chorshanba",
        hijriDate: "24 Shawwal",
        fajr: "03:42",
        dhuhr: "12:15",
        asr: "16:31",
        maghrib: "19:48",
        isha: "21:19",
      },
      {
        date: "4 May, Payshanba",
        hijriDate: "25 Shawwal",
        fajr: "03:41",
        dhuhr: "12:15",
        asr: "16:32",
        maghrib: "19:49",
        isha: "21:21",
      },
      {
        date: "5 May, Juma",
        hijriDate: "26 Shawwal",
        fajr: "03:39",
        dhuhr: "12:15",
        asr: "16:32",
        maghrib: "19:51",
        isha: "21:23",
      },
      {
        date: "6 May, Shanba",
        hijriDate: "27 Shawwal",
        fajr: "03:38",
        dhuhr: "12:15",
        asr: "16:33",
        maghrib: "19:52",
        isha: "21:25",
      },
      {
        date: "7 May, Yakshanba",
        hijriDate: "28 Shawwal",
        fajr: "03:36",
        dhuhr: "12:15",
        asr: "16:33",
        maghrib: "19:54",
        isha: "21:27",
      },
    ],
    samarqand: [
      {
        date: "1 May, Dushanba",
        hijriDate: "22 Shawwal",
        fajr: "03:50",
        dhuhr: "12:20",
        asr: "16:35",
        maghrib: "19:50",
        isha: "21:20",
      },
      {
        date: "2 May, Seshanba",
        hijriDate: "23 Shawwal",
        fajr: "03:49",
        dhuhr: "12:20",
        asr: "16:36",
        maghrib: "19:51",
        isha: "21:22",
      },
      {
        date: "3 May, Chorshanba",
        hijriDate: "24 Shawwal",
        fajr: "03:47",
        dhuhr: "12:20",
        asr: "16:36",
        maghrib: "19:53",
        isha: "21:24",
      },
      {
        date: "4 May, Payshanba",
        hijriDate: "25 Shawwal",
        fajr: "03:46",
        dhuhr: "12:20",
        asr: "16:37",
        maghrib: "19:54",
        isha: "21:26",
      },
      {
        date: "5 May, Juma",
        hijriDate: "26 Shawwal",
        fajr: "03:44",
        dhuhr: "12:20",
        asr: "16:37",
        maghrib: "19:56",
        isha: "21:28",
      },
      {
        date: "6 May, Shanba",
        hijriDate: "27 Shawwal",
        fajr: "03:43",
        dhuhr: "12:20",
        asr: "16:38",
        maghrib: "19:57",
        isha: "21:30",
      },
      {
        date: "7 May, Yakshanba",
        hijriDate: "28 Shawwal",
        fajr: "03:41",
        dhuhr: "12:20",
        asr: "16:38",
        maghrib: "19:59",
        isha: "21:32",
      },
    ],
  }

  const [weeklyPrayerTimes, setWeeklyPrayerTimes] = useState(allPrayerTimes.toshkent)

  useEffect(() => {
    // Update displayed city name when city changes
    const cityObj = cities[selectedCountry]?.find((c) => c.value === selectedCity)
    if (cityObj) {
      setDisplayedCity(cityObj.label)
    }

    // In a real app, you would fetch data here
    // For now, we'll just use mock data
    if (selectedCity === "toshkent" || selectedCity === "samarqand") {
      setWeeklyPrayerTimes(allPrayerTimes[selectedCity])
    } else {
      // Default data for cities without specific data
      setWeeklyPrayerTimes(allPrayerTimes.toshkent)
    }
  }, [selectedCity, selectedCountry])

  const handleApplyFilter = () => {
    // In a real app, this would trigger an API call
    // For now, we'll just update the displayed city
    const cityObj = cities[selectedCountry]?.find((c) => c.value === selectedCity)
    if (cityObj) {
      setDisplayedCity(cityObj.label)
    }

    // Update prayer times based on selected city
    if (selectedCity === "toshkent" || selectedCity === "samarqand") {
      setWeeklyPrayerTimes(allPrayerTimes[selectedCity])
    } else {
      // Default data for cities without specific data
      setWeeklyPrayerTimes(allPrayerTimes.toshkent)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900">
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
              <a href="/" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Bosh sahifa
              </a>
              <a
                href="/weekly-timetable"
                className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
              >
                Haftalik jadval
              </a>
              <a href="/settings" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Sozlamalar
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-4 mb-6">
          <a href="/" className="p-2 rounded-lg hover:bg-emerald-100 transition-colors">
            <ArrowLeft className="h-5 w-5 text-emerald-700" />
          </a>
          <Calendar className="h-6 w-6 text-emerald-700" />
          <h1 className="text-3xl font-bold text-emerald-800">Haftalik namoz vaqtlari: {displayedCity}</h1>
        </div>

        {/* Filter Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-md mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-emerald-700 text-lg">
              <Filter className="h-5 w-5" />
              <span>Joylashuv filtri</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mamlakat</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Shahar</label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full bg-white/80">
                  <SelectValue placeholder="Shaharni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {cities[selectedCountry]?.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleApplyFilter}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white w-full md:w-auto"
              >
                Qo'llash
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-md overflow-hidden">
          <CardHeader className="bg-emerald-50/80">
            <CardTitle className="text-center text-emerald-800">Haftalik jadval</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-emerald-100/80">
                    <th className="py-3 px-4 text-left text-emerald-800 font-medium">Sana</th>
                    <th className="py-3 px-4 text-center text-emerald-800 font-medium">Bomdod</th>
                    <th className="py-3 px-4 text-center text-emerald-800 font-medium">Peshin</th>
                    <th className="py-3 px-4 text-center text-emerald-800 font-medium">Asr</th>
                    <th className="py-3 px-4 text-center text-emerald-800 font-medium">Shom</th>
                    <th className="py-3 px-4 text-center text-emerald-800 font-medium">Xufton</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklyPrayerTimes.map((day, index) => (
                    <tr
                      key={index}
                      className={`border-b border-emerald-100 ${
                        index === 4 ? "bg-emerald-50/50" : "" // Highlight Friday
                      } hover:bg-emerald-50/80 transition-colors`}
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-800">{day.date}</div>
                        <div className="text-sm text-gray-500">{day.hijriDate}</div>
                      </td>
                      <td className="py-4 px-4 text-center font-medium text-indigo-700">{day.fajr}</td>
                      <td className="py-4 px-4 text-center font-medium text-emerald-700">{day.dhuhr}</td>
                      <td className="py-4 px-4 text-center font-medium text-amber-700">{day.asr}</td>
                      <td className="py-4 px-4 text-center font-medium text-orange-700">{day.maghrib}</td>
                      <td className="py-4 px-4 text-center font-medium text-purple-700">{day.isha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-gray-600">
          <p>* Namoz vaqtlari taxminiy bo'lib, aniq vaqtlar uchun mahalliy masjidga murojaat qiling</p>
        </div>
      </div>
    </div>
  )
}
