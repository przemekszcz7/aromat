import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Facebook, MapPin, Phone, Clock, Leaf, Coffee, X } from "lucide-react";
import { BotanicalDecor, LeafSprig } from "./components/BotanicalDecor.tsx";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const days = [
    { name: "poniedziałek", hours: "08:00 - 16:00" },
    { name: "wtorek", hours: "08:00 - 16:00" },
    { name: "środa", hours: "08:00 - 16:00" },
    { name: "czwartek", hours: "08:00 - 16:00" },
    { name: "piątek", hours: "08:00 - 16:00" },
    { name: "sobota", hours: "09:00 - 13:00" },
    { name: "niedziela", hours: "ZAMKNIĘTE", highlight: true },
  ];

  const images = [
    "https://i.postimg.cc/jSX021rx/640173449-1474625734368691-4125289939046688875-n.jpg",
    "https://i.postimg.cc/QdbGCzrj/641215955-1474625537702044-7156350333633708932-n.jpg",
    "https://i.postimg.cc/s26k9ZXb/641219394-1474626197701978-8411791700644035105-n.jpg",
    "https://i.postimg.cc/Gp7WJs2g/641235002-1474626131035318-875308374538640852-n.jpg",
    "https://i.postimg.cc/9Qp50kjC/641253089-1474625691035362-4768195969177380953-n.jpg",
    "https://i.postimg.cc/0yfRj4qx/641340040-1474625621035369-6379025717119672473-n.jpg",
    "https://i.postimg.cc/2SmNzDMJ/641358447-1474625484368716-4501620207551538129-n.jpg",
    "https://i.postimg.cc/g029ZKY6/641375167-1474625924368672-4493739007334131302-n.jpg",
    "https://i.postimg.cc/yN8qZTVD/641379291-1474625781035353-4676590080379711161-n.jpg",
    "https://i.postimg.cc/vmqJL6BW/641397119-1474626011035330-7553941199037058210-n.jpg",
  ];

  return (
    <div className="min-h-screen noise-overlay">
      <BotanicalDecor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-multiply sm:px-12 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col"
        >
          <span className="font-display text-2xl font-semibold tracking-tight">AROMAT</span>
          <span className="accent-label text-[8px] text-primary">Herbaciarnia</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-12 font-mono text-xs tracking-widest uppercase items-center"
        >
          <a href="#o-nas" className="hover:text-accent transition-colors">O nas</a>
          <a href="#galeria" className="hover:text-accent transition-colors">Galeria</a>
          <a href="#godziny" className="hover:text-accent transition-colors">Godziny</a>
          <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
          <a 
            href="https://www.facebook.com/profile.php?id=100054638340667" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 bg-text text-bg rounded-none hover:bg-accent transition-all"
          >
            <Facebook size={14} />
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-8 z-10"
          >
            <span className="accent-label mb-6 block">Zapraszamy do krainy smaku</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-[0.9]">
              Napar, który <br />
              <span className="italic text-primary">ukoi duszę.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-xl font-light leading-relaxed">
              Herbaciarnia AROMAT w Bielsku Podlaskim to miejsce, gdzie czas zwalnia. 
              Odkryj szeroki wybór herbat i kaw renomowanej firmy "Czas na Herbatę" 
              oraz gustowną porcelanę, która dopełni każdą chwilę.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-4 relative aspect-[4/5] hidden lg:block"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-none border border-accent/20 rotate-3 z-0" />
            <img 
              src="https://i.postimg.cc/CKxyq4FZ/638698358-1474625877702010-3474789048109137483-n.jpg" 
              alt="Wnętrze herbaciarni AROMAT" 
              className="w-full h-full object-cover relative z-10 shadow-2xl transition-all duration-1000 cursor-zoom-in"
              onClick={() => setSelectedImage("https://i.postimg.cc/CKxyq4FZ/638698358-1474625877702010-3474789048109137483-n.jpg")}
            />
          </motion.div>
        </div>
      </header>

      {/* Assortment Section */}
      <section id="o-nas" className="py-24 px-6 sm:px-12 lg:px-20 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               viewport={{ once: true }}
               className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                <Leaf size={24} />
              </div>
              <h3 className="text-3xl">Czas na Herbatę</h3>
              <p className="text-text-muted leading-relaxed">
                Współpracujemy z najbardziej cenioną marką w Polsce, oferując mieszanki, 
                które zachwycają głębią aromatu i jakością liści.
              </p>
            </motion.div>

            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                <Coffee size={24} />
              </div>
              <h3 className="text-3xl">Kawa z Duszą</h3>
              <p className="text-text-muted leading-relaxed">
                Nasze kawy to starannie wyselekcjonowane ziarna, które budzą zmysły 
                i wprowadzają w stan porannego orzeźwienia.
              </p>
            </motion.div>

            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                <div className="w-6 h-6 border-2 border-primary rounded-full border-t-transparent" />
              </div>
              <h3 className="text-3xl">Szlachetna Porcelana</h3>
              <p className="text-text-muted leading-relaxed">
                Oferujemy gustowne zestawy porcelanowe, idealne na wyjątkowy prezent 
                lub do codziennych rytuałów w zaciszu domowym.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 px-6 sm:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="accent-label mb-4 block">Nasza przestrzeń</span>
            <h2 className="text-5xl md:text-6xl italic">Galeria</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`overflow-hidden parchment-card p-0 border-0 ${idx % 3 === 0 ? 'row-span-2' : ''}`}
              >
                <img 
                  src={src} 
                  alt={`Aromat Herbaciarnia - zdjęcie ${idx + 1}`} 
                  className="w-full h-full object-cover transition-all duration-700 cursor-zoom-in hover:scale-105"
                  onClick={() => setSelectedImage(src)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Map Section */}
      <section id="godziny" className="py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Hours Card */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            className="lg:col-span-5 parchment-card"
          >
            <div className="flex items-center gap-3 mb-10">
              <Clock className="text-accent" size={20} />
              <h2 className="text-4xl">Godziny otwarcia</h2>
            </div>
            
            <div className="space-y-4">
              {days.map((day, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center py-3 border-b border-accent/10 font-mono text-sm ${day.highlight ? 'text-accent opacity-60' : 'text-text'}`}
                >
                  <span className="uppercase tracking-widest">{day.name}</span>
                  <span className="font-semibold italic">{day.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-primary">
                <Phone size={18} />
                <span className="font-mono text-sm tracking-widest">732 976 007</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin size={18} />
                <span className="font-mono text-xs tracking-widest">Kazimierzowska 4 A, Bielsk Podlaski</span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-[450px] md:h-[600px] w-full relative z-10"
          >
             <div className="absolute inset-0 border border-text/10 -m-4 z-0 translate-x-4 translate-y-4" />
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.8452850008853!2d23.1917133771301!3d52.77106431761072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720239658b35673%3A0x11e779153ed69a17!2sKazimierzowska%204%20A%2C%2017-100%20Bielsk%20Podlaski!5e0!3m2!1spl!2spl!4v1778756732366!5m2!1spl!2spl" 
                className="w-full h-full border-0 relative z-10"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-24 px-6 text-center">
        <motion.div
           whileInView={{ opacity: 1, scale: 1 }}
           initial={{ opacity: 0.8, scale: 0.95 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="accent-label mb-4">Dołącz do naszej społeczności</span>
          <h2 className="text-5xl md:text-6xl mb-10 italic">Bądź na bieżąco z nowościami</h2>
          <a 
            href="https://www.facebook.com/profile.php?id=100054638340667" 
            target="_blank" 
            rel="noreferrer"
            className="btn-facebook"
          >
            <Facebook size={18} />
            OBSERWUJ NA FACEBOOKU
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="organic-divider" />
      <footer className="bg-bg-dark text-bg/60 py-20 px-6 sm:px-12 lg:px-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
          <div>
            <h4 className="font-display text-2xl text-bg mb-2">AROMAT</h4>
            <p className="font-mono text-[10px] tracking-widest uppercase">Bielsk Podlaski</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-2">
              <span className="accent-label text-bg-dark font-black bg-accent px-2 w-fit mb-2">Kontakt</span>
              <p className="font-mono text-xs">732 976 007</p>
              <p className="font-mono text-xs">Kazimierzowska 4 A</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="accent-label text-bg-dark font-black bg-accent px-2 w-fit mb-2">Godziny</span>
              <p className="font-mono text-xs italic">Pon - Pt: 08:00 - 16:00</p>
              <p className="font-mono text-xs italic">Sobota: 09:00 - 13:00</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-bg/10 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase opacity-40">
          <span>&copy; {new Date().getFullYear()} Aromat Bielsk Podlaski</span>
          <span>Sztuka Parzenia</span>
        </div>

        <LeafSprig className="absolute -bottom-20 -right-20 w-96 h-96 opacity-[0.03] scale-150 rotate-45 stroke-bg" />
      </footer>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-bg hover:text-accent transition-colors z-50 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              alt="Zoomed image"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
