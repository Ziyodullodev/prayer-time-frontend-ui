import { Heart, BookOpen, BookMarked, Compass, Star, BookOpenCheck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-emerald-50 dark:from-gray-800 dark:to-gray-900 border-t border-emerald-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Biz haqimizda</h3>
            <p className="text-gray-600 mb-4">
              Namoz vaqtlari ilovasi musulmonlarga kundalik namoz vaqtlarini aniq bilish va islomiy hayot tarzini olib
              borish uchun yordam beradi.
            </p>
            <div className="flex items-center space-x-1 text-emerald-700">
              <Heart className="h-4 w-4" />
              <span>Musulmonlar uchun yaratilgan</span>
            </div>
          </div>

          {/* Islamic Links */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Islomiy manbalar</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Qur'oni Karim
                </a>
              </li>
              <li className="flex items-center gap-2">
                <BookMarked className="h-4 w-4 text-emerald-600" />
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Hadislar to'plami
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-emerald-600" />
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Qibla yo'nalishi
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-emerald-600" />
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Islomiy bayramlar
                </a>
              </li>
              <li className="flex items-center gap-2">
                <BookOpenCheck className="h-4 w-4 text-emerald-600" />
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Islomiy maqolalar
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Foydali havolalar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Maxfiylik siyosati
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Foydalanish shartlari
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors">
                  Yordam
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Namoz Vaqtlari. Barcha huquqlar himoyalangan.
            </p>
            <div className="bg-emerald-50 px-4 py-2 rounded-md border border-emerald-100">
              <p className="text-emerald-700 font-medium text-center">
                Yaratildi: <span className="font-bold">TafSoft.uz</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
