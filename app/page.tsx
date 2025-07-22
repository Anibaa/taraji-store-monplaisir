"use client"

import { useState, useEffect } from "react"
import {
  MapPin,
  Phone,
  Navigation,
  Facebook,
  Instagram,
  Globe,
  Wrench,
  ArrowRight,
  HardHat,
  Hammer,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Simple dropdown for language selection
const languages = [
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
]
import { Card, CardContent } from "@/components/ui/card"
// Removed DropdownMenu imports as it's no longer used

type Language = "fr" | "ar" | "en"

interface Translations {
  fr: {
    maintenanceTitle: string
    maintenanceMessage: string
    maintenanceSubtitle: string
    address: string
    nearbyStores: string
    nearbyStoresDesc: string
    open: string
    call: string
    directions: string
    location: string
    locationDesc: string
    inMaintenance: string
    openStores: string
    needHelp: string
    needHelpDesc: string
    contactUs: string
    followUs: string
    rightsReserved: string
    patienceMessage: string
    backSoon: string
    stores: {
      centreville: {
        name: string
        address: string
      }
      lepassage: {
        name: string
        address: string
      }
      menzah5: {
        name: string
        address: string
      }
      mourouj: {
        name: string
        address: string
      }
      aouina: {
        name: string
        address: string
      }
   }
  },
  ar: {
    maintenanceTitle: string
    maintenanceMessage: string
    maintenanceSubtitle: string
    address: string
    nearbyStores: string
    nearbyStoresDesc: string
    open: string
    call: string
    directions: string
    location: string
    locationDesc: string
    inMaintenance: string
    openStores: string
    needHelp: string
    needHelpDesc: string
    contactUs: string
    followUs: string
    rightsReserved: string
    patienceMessage: string
    backSoon: string
    stores: {
      centreville: {
        name: string
        address: string
      }
      lepassage: {
        name: string
        address: string
      }
      menzah5: {
        name: string
        address: string
      }
      mourouj: {
        name: string
        address: string
      }
      aouina: {
        name: string
        address: string
      }
    }
  },
  en: {
    maintenanceTitle: string
    maintenanceMessage: string
    maintenanceSubtitle: string
    address: string
    nearbyStores: string
    nearbyStoresDesc: string
    open: string
    call: string
    directions: string
    location: string
    locationDesc: string
    inMaintenance: string
    openStores: string
    needHelp: string
    needHelpDesc: string
    contactUs: string
    followUs: string
    rightsReserved: string
    patienceMessage: string
    backSoon: string
    stores: {
      centreville: {
        name: string
        address: string
      }
      lepassage: {
        name: string
        address: string
      }
            menzah5: {
        name: string
        address: string
      }
      mourouj: {
        name: string
        address: string
      }
      aouina: {
        name: string
        address: string
      }
    }
  },
  

}

const translations: Translations = {
  fr: {
    maintenanceTitle: "🚧 Le Point de Vente du Parc B est temporairement fermé",
    maintenanceMessage: "Notre point de vente est actuellement en maintenance",
    maintenanceSubtitle: "Merci de votre patience",
    address: "Avenue d'Arabie Saoudite, Montplaisir, Tunis 1073",
    nearbyStores: "Points de vente à proximité",
    nearbyStoresDesc: "Trouvez nos autres points de vente ouverts",
    open: "Ouvert",
    call: "Appeler",
    directions: "Itinéraire",
    location: "Localisation",
    locationDesc: "Tous nos points de vente sur la carte",
    inMaintenance: "En maintenance",
    openStores: "Ouverts",
    needHelp: "Besoin d'aide ?",
    needHelpDesc: "Notre équipe est là pour vous accompagner",
    contactUs: "Nous contacter",
    followUs: "Suivez-nous",
    rightsReserved: "© 2025 Taraji Store. Tous les droits sont réservés.",
    patienceMessage: "Nous travaillons dur pour vous offrir une meilleure expérience",
    backSoon: "Nous reviendrons bientôt !",
    stores: {
      centreville: {
        name: "Point de Vente Centre Ville",
        address: "6, Avenue de Carthage, Tunis 1000",
      },
      lepassage: {
        name: "Point de Vente Le Passage",
        address: "52, Rue de Paris, Tunis",
      },
      menzah5: {
        name: "Point de Vente du Menzah 5",
        address: "Avenue d’Afrique, Menzah 5, Ariana 2091",
      },
      mourouj: {
        name: "Point de Vente El Mourouj",
        address: "Rue du 20 Mars, El Mourouj, Tunis 2074",
      },
      aouina: {
        name: "Point de Vente El Aouina",
        address: "5, Résidence Soltan, El Aouina, Tunis 4216",
      },
    },
  },

  ar: {
    maintenanceTitle:"🚧 نقطة البيع الحديقة ب حالياً في فترة صيانة",
    maintenanceMessage: "نقطة البيع مسكّرة مؤقتاً للصيانة",
    maintenanceSubtitle: "شكراً على تفهّمكم وصبركم 🙏",
    address: "نهج العربيّة السعوديّة، مونبليزير، تونس 1073",
    nearbyStores: "نقاط البيع القريبة ليك",
    nearbyStoresDesc: "تنجم تلقى أقرب نقطة بيع مفتوحة",
    open: "مفتوحة",
    call: "إتصل بينا",
    directions: "شوف الطريق",
    location: "المكان",
    locationDesc: "خريطة فيها جميع نقاط البيع متاعنا",
    inMaintenance: "في الصيانة",
    openStores: "نقاط البيع اللي تخدم",
    needHelp: "تحتاجون لمزيد من التفاصيل؟",
    needHelpDesc: "الفريق متاعنا موجود ديما يعاونك",
    contactUs: "إتصل بينا توة",
    followUs: "تابعنا على صفحاتنا",
    rightsReserved: "© 2025 Taraji Store. جميع الحقوق محفوظة.",
    patienceMessage: "نحضّرو في حاجة تفرّح و تليق بيكم ❤️",
    backSoon: "راجعينلكم قريب إن شاء الله !",
    stores: {
      centreville: {
        name: "نقطة بيع وسط العاصمة",
        address: "6، شارع قرطاج، تونس 1000",
      },
      lepassage: {
        name: "نقطة بيع الباساج",
        address: "52، شارع باريس، تونس",
      },
      menzah5: {
        name: "نقطة بيع المنزه 5",
        address: "نهج إفريقيا، المنزه 5، أريانة 2091",
      },
      mourouj: {
        name: "نقطة بيع المروج",
        address: "شارع 20 مارس، المروج، تونس 2074",
      },
      aouina: {
        name: "نقطة بيع العوينة",
        address: "إقامة سلطان 5، العوينة، تونس 4216",
      },
    },
  },

  en: {
    maintenanceTitle: "🚧 The Park B Point of Sale is temporarily closed",
    maintenanceMessage: "Our point of sale is currently under maintenance",
    maintenanceSubtitle: "Thank you for your patience",
    address: "Avenue of Saudi Arabia, Montplaisir, Tunis 1073",
    nearbyStores: "Nearby Points of Sale",
    nearbyStoresDesc: "Find our other open points of sale",
    open: "Open",
    call: "Call",
    directions: "Get Directions",
    location: "Location",
    locationDesc: "All our points of sale on the map",
    inMaintenance: "Under maintenance",
    openStores: "Open Points of Sale",
    needHelp: "Need help?",
    needHelpDesc: "Our team is here to assist you",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    rightsReserved: "© 2025 Taraji Store. All rights reserved.",
    patienceMessage: "We’re working hard to offer you a better experience",
    backSoon: "We’ll be back soon!",
    stores: {
      centreville: {
        name: "Centre Ville Point of Sale",
        address: "6, Carthage Avenue, Tunis 1000",
      },
      lepassage: {
        name: "Le Passage Point of Sale",
        address: "52, Paris Street, Tunis",
      },
      menzah5: {
        name: "Menzah 5 Point of Sale",
        address: "Africa Avenue, Menzah 5, Ariana 2091",
      },
      mourouj: {
        name: "El Mourouj Point of Sale",
        address: "20 March Street, El Mourouj, Tunis 2074",
      },
      aouina: {
        name: "El Aouina Point of Sale",
        address: "5, Résidence Soltan, El Aouina, Tunis 4216",
      },
    },
  }
  
}

export default function MaintenancePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<Language>("fr")
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [animateConstruction, setAnimateConstruction] = useState(false)

  const t = translations[language]
  const isRTL = language === "ar"

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setAnimateConstruction((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const boutiques = [
    {
      name: t.stores.centreville.name,
      address: t.stores.centreville.address,
      addressMap: t.stores.centreville.address,
      phone: "+216 93 691 919",
      distance: "2.5 km",
      status: t.open,
    },
    {
      name: t.stores.lepassage.name,
      address: t.stores.lepassage.address,
      addressMap: t.stores.lepassage.address,
      phone: "+216 95 321 919",
      distance: "3.1 km",
      status: t.open,
    },
    {
      name: t.stores.menzah5.name,
      address: t.stores.menzah5.address,
      addressMap: t.stores.menzah5.address,
      phone: "+216 92 861 919",
      distance: "4.2 km",
      status: t.open,
    },
      {
      name: t.stores.mourouj.name,
      address: t.stores.mourouj.address,
      addressMap: "P687+M56, Av. du 20 Mars 1956, El Mourouj",
      phone: "+216 94 871 919",
      distance: "7.5 km",
      status: t.open,
    },
    {
      name: t.stores.aouina.name,
      address: t.stores.aouina.address,
      addressMap: t.stores.aouina.address,
      phone: "+216 98 813 918",
      distance: "10.1 km",
      status: t.open,
    },
  ]

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`)
  }

  const handleDirections = (address: string) => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`)
  }


  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang)
    setLangDropdownOpen(false)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 to-white ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header avec logo */}
      <header className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-4 py-6">
          <div className="flex justify-center items-center max-w-sm mx-auto">
            <img
              src="/images/taraji-store-logo.png"
              alt="Taraji Store Logo"
              className="h-auto max-h-[80px] w-auto max-w-[260px] object-contain"
            />
          </div>
        </div>
      </header>

      {/* Sélecteur de langue en dropdown */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <Button
            onClick={() => setLangDropdownOpen((open) => !open)}
            variant="outline"
            size="sm"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent text-xs px-1 py-1 h-8 shadow-lg flex items-center"
            aria-haspopup="listbox"
            aria-expanded={langDropdownOpen}
          >
            <Globe className="w-2 h-3 mr-1" />
            {languages.find((l) => l.code === language)?.label}
            <svg className="ml-1 w-2 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </Button>

          {langDropdownOpen && (
            <ul
              className="absolute right-0 mt-2 w-16 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-xs"
              role="listbox"
            >
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className={`px-6 py-2 cursor-pointer hover:bg-yellow-100 ${lang.code === language ? "font-bold text-yellow-600" : "text-gray-700"}`}
                  onClick={() => handleLanguageSelect(lang.code as Language)}
                  role="option"
                  aria-selected={lang.code === language}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <main className="px-4 pb-8">
        {/* Grande illustration de maintenance */}
        <section
          className={`-mt-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6 text-center">
              {/* Grande illustration de chantier */}
              <div className="mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                    <img
                      src="/images/excavator.png"
                      alt="Construction Helmet"
                      className={`w-12 h-12 transition-transform duration-500 ${animateConstruction ? "rotate-12" : "rotate-0"}`}
                    />
                  </div>
                  {/* Éléments décoratifs animés */}
                  <div
                    className={`absolute -top-2 -right-2 transition-transform duration-1000 ${animateConstruction ? "translate-y-1" : "translate-y-0"}`}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <Hammer className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-2 -left-2 transition-transform duration-1000 delay-300 ${animateConstruction ? "translate-x-1" : "translate-x-0"}`}
                  >
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Wrench className="w-3 h-3 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message principal */}
              <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{t.maintenanceTitle}</h2>
              <p className="text-gray-600 mb-2 leading-relaxed font-medium">{t.maintenanceMessage}</p>
              <p className="text-red-600 font-semibold mb-4">{t.maintenanceSubtitle}</p>
              <p className="text-sm text-gray-500 mb-4">{t.patienceMessage}</p>

              {/* Adresse */}
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                {/* La classe flex-row-reverse est déjà appliquée conditionnellement ici */}
                <div className={`flex items-start gap-3 ${isRTL ? "text-right" : "text-left"}`}>
                  <MapPin className={`w-5 h-5 text-red-500 mt-0.5 flex-shrink-0 ${isRTL ? "ml-3" : "mr-3"}`} />
                  {/* La classe text-right/text-left est déjà appliquée conditionnellement ici */}
                  <div className={`${isRTL ? "text-right" : "text-left"}`}>
                    <p className="text-sm font-medium text-gray-800">{t.address}</p>
                  </div>
                </div>
              </div>

              {/* Message d'encouragement */}
              <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg border-l-4 border-l-red-500">
                <p className="text-sm text-gray-700 font-medium">{t.backSoon}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section boutiques à proximité */}
        <section
          className={`mt-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.nearbyStores}</h3>
            <p className="text-gray-600 text-sm">{t.nearbyStoresDesc}</p>
          </div>

          <div className="space-y-4">
            {boutiques.map((boutique, index) => (
              <Card
                key={index}
                className={`bg-white shadow-lg border-0 rounded-2xl overflow-hidden transition-all duration-500 delay-${(index + 1) * 200} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                <CardContent className="p-0">
                  <div className="p-5">
                    {/* Header de la boutique */}
                    <div className={`flex items-start justify-between mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="flex-1">
                        <h4 className={`font-bold text-gray-800 text-lg mb-1 ${isRTL ? "text-right" : "text-left"}`}>
                          {boutique.name}
                        </h4>
                        {/* La classe flex-row-reverse est déjà appliquée conditionnellement ici */}
                        <div className={`flex items-center gap-2 mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 text-sm font-medium">{boutique.status}</span>
                          <span className="text-gray-400 text-sm">• {boutique.distance}</span>
                        </div>
                      </div>
                    </div>

                    {/* Adresse */}
                    <div className={`flex items-start gap-3 mb-4 ${isRTL ? "text-right" : "text-left"}`}>
                      <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className={`text-gray-600 text-sm leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                        {boutique.address}
                      </p>
                    </div>

                    {/* Boutons d'action */}
                    <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <Button
                        onClick={() => handleCall(boutique.phone)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl h-12 font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <Phone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                        {t.call}
                      </Button>
                      <Button
                        onClick={() => handleDirections(boutique.addressMap)}
                        variant="outline"
                        className="flex-1 border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50 rounded-xl h-12 font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <Navigation className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                        {t.directions}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Carte interactive 
        <section
          className={`mt-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="p-5 pb-4">
                <h3 className={`font-bold text-gray-800 text-lg mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                  {t.location}
                </h3>
                <p className={`text-gray-600 text-sm mb-4 ${isRTL ? "text-right" : "text-left"}`}>{t.locationDesc}</p>
              </div>

              <div className="relative h-64 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.344!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzIzLjQiTiAxMMKwMTAnNTMuNCJF!5e0!3m2!1sfr!2stn!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                
                <div
                  className={`absolute top-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg ${isRTL ? "right-4" : "left-4"}`}
                >
                  <div className="space-y-2 text-xs">
                    <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{t.inMaintenance}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{t.openStores}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        */}

        {/* Call-to-action */}
        <section
          className={`mt-8 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0 rounded-2xl overflow-hidden shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-black text-lg mb-2">{t.needHelp}</h3>
              <p className="text-black/80 text-sm mb-4">{t.needHelpDesc}</p>
              <Button
                onClick={() => handleCall("+216 98 812 219")}
                className="bg-black text-white hover:bg-gray-800 rounded-xl h-12 px-6 font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {t.contactUs}
                <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-12">
        <div className="px-4 py-8">
          <div className="text-center mb-6">
            <h4 className="font-bold text-yellow-400 mb-4">{t.followUs}</h4>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full w-12 h-12 transition-all duration-200 hover:scale-110 bg-transparent"
                onClick={() => window.open("https://www.facebook.com/tarajistoreofficiel/")}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full w-12 h-12 transition-all duration-200 hover:scale-110 bg-transparent"
                onClick={() => window.open("https://www.instagram.com/tarajistore19")}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full w-12 h-12 transition-all duration-200 hover:scale-110 bg-transparent"
                onClick={() => window.open("https://taraji-store.com")}
              >
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="text-center border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm mb-2">{t.rightsReserved}</p>
          </div>
        </div>
      </footer>
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/21693591919"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-200"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.661 1.934 6.661L4 29l7.661-1.934A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.92-.52-5.61-1.51l-.4-.23-4.54 1.15 1.21-4.42-.26-.41A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.14c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.71.18 1.36.16 1.87.1.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
        </svg>
      </a>
    </div>
  )
}
