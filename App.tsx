
import React from 'react';

// Updated data for the menu items with prices and catchy descriptions
const MENU_ITEMS = [
  {
    title: 'زركشي صلصة و نفر دجاج',
    price: '5,000 دينار',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop', // Zereshk Polo style chicken
    description: 'دجاج مسبك مع خلطة الزركشي والصلصة الخاصة، طعم يأخذك لعالم ثاني.'
  },
  {
    title: 'طبق صاج (دجاج أو لحم)',
    price: '3,000 دينار',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop', // Saj/Shawarma Plate
    description: 'خبز صاج حار ومكسب، محشي بأجود أنواع اللحوم أو الدجاج مع المقبلات.'
  },
  {
    title: 'بركر العمو المميز',
    price: '2,000 دينار',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', // Burger
    description: 'لحم طازج مشوي على اللهب، بسيط في سعره وعظيم في طعمه.'
  },
  {
    title: 'بامية على تمن',
    price: '3,000 دينار',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop', // Traditional Okra Stew
    description: 'بامية عراقية "ذايبة" مع تمن بسمتي نثري، الطعم اللي ما ينوصف.'
  },
  {
    title: 'صلصة على تمن',
    price: '3,000 دينار',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop', // Appetizing Stew on rice
    description: 'تمن أبيض نثري مغطى بألذ أنواع الصلصات العراقية الغنية بالنكهة والبهارات.'
  }
];

const Header: React.FC = () => (
  <header className="relative bg-stone-900 text-white py-24 px-6 text-center shadow-2xl overflow-hidden">
    {/* Background Image Overlay for Header */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop" 
        className="w-full h-full object-cover opacity-40"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 to-stone-900"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-7xl md:text-9xl font-black mb-6 drop-shadow-2xl tracking-tighter">كافتريا العمو</h1>
      <p className="text-2xl md:text-4xl font-bold text-orange-400 mb-4 drop-shadow-md">بإدارة يحيى الطائي</p>
      <div className="h-1.5 w-32 bg-yellow-500 mx-auto my-8 rounded-full shadow-lg"></div>
      <p className="text-2xl md:text-3xl font-medium leading-relaxed drop-shadow-md px-4">
        "لقمتنا هنية.. والجمعة دافية" <br/> 
        <span className="text-orange-200 text-xl font-normal">أطيب الأكلات البصرية بأسعار تناسب الجميع</span>
      </p>
    </div>
  </header>
);

const FoodGallery: React.FC = () => (
  <section className="relative max-w-7xl mx-auto py-24 px-6 z-10">
    <div className="text-center mb-20">
      <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">قائمة الأسعار والوجبات</span>
      <h2 className="text-5xl font-black text-stone-800 mb-6">أصالة المذاق العراقي</h2>
      <p className="text-stone-600 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
        أطباقنا محضرة يومياً بمكونات طازجة لضمان أفضل جودة وألذ طعم.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {MENU_ITEMS.map((item, index) => (
        <div key={index} className="food-card bg-white/95 backdrop-blur-sm rounded-[2.5rem] shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl group border border-white/50 relative">
          {/* Price Tag Overlay */}
          <div className="absolute top-6 left-6 z-20 bg-orange-600 text-white font-black px-5 py-2 rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
            {item.price}
          </div>
          
          <div className="h-80 overflow-hidden relative">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-8 right-8 text-white">
              <h3 className="text-3xl font-black drop-shadow-xl">{item.title}</h3>
            </div>
          </div>
          <div className="p-10">
            <p className="text-stone-700 text-lg leading-relaxed text-right font-medium opacity-90">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const InfoSection: React.FC = () => (
  <section className="relative py-24 px-6 z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Enhanced Dedicated Location Box */}
      <div className="bg-white/95 backdrop-blur-md p-12 rounded-[3rem] shadow-2xl border-r-8 border-orange-500 flex flex-col justify-center transform transition hover:scale-[1.02]">
        <div className="flex items-center mb-8">
          <div className="bg-orange-600 p-4 rounded-3xl ml-6 shadow-lg shadow-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-4xl font-black text-stone-900">وين مكاننا؟</h2>
            <p className="text-orange-600 font-bold">حياكم الله في أي وقت</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-2xl text-stone-800 leading-relaxed font-bold">
            البصرة - باب الزبير
          </p>
          <div className="h-px bg-stone-200 w-full"></div>
          <p className="text-xl text-stone-600 leading-relaxed">
            موقعنا مميز وسهل الوصول: <br/>
            <span className="text-stone-900 font-semibold underline decoration-orange-400 decoration-4 underline-offset-8">مقابل معرض الرافد والمكتبة المركزية</span>
          </p>
        </div>
        <div className="mt-10 p-6 bg-orange-50 rounded-2xl border-dashed border-2 border-orange-200 text-orange-800 italic text-lg font-medium">
          ننتظركم لتقديم أشهى الوجبات في أجواء بصرية دافئة.
        </div>
      </div>

      {/* Dedicated Social Box */}
      <div className="bg-stone-900/95 backdrop-blur-md p-12 rounded-[3rem] shadow-2xl text-white flex flex-col justify-center border-l-8 border-yellow-500 transform transition hover:scale-[1.02]">
        <div className="flex items-center mb-8">
          <div className="bg-stone-800 p-4 rounded-3xl ml-6 border border-stone-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-4xl font-black">خلينا على تواصل</h2>
            <p className="text-stone-400 font-medium">شوفوا يومياتنا وأطباقنا</p>
          </div>
        </div>
        <p className="text-2xl mb-12 text-stone-300 leading-relaxed font-light">
          انضموا لعائلتنا على الإنستغرام وكونوا أول من يعرف بأطباقنا الجديدة والمميزة.
        </p>
        <a 
          href="https://instagram.com/yahia.aldabea" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-between px-10 py-6 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 rounded-3xl font-black text-3xl transition-all duration-300 shadow-2xl shadow-orange-900/40"
        >
          <span>@yahia.aldabea</span>
          <svg className="w-10 h-10 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="relative bg-stone-950 text-stone-500 py-16 text-center z-10">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-white text-3xl font-black mb-4">كافتريا العمو</h2>
      <p className="text-lg mb-10 text-stone-400 font-medium italic">"ألف عافية.. ننتظركم دائماً"</p>
      <div className="h-px bg-stone-800 w-24 mx-auto mb-10"></div>
      <p className="text-sm tracking-widest uppercase">© {new Date().getFullYear()} جميع الحقوق محفوظة - إدارة يحيى الطائي</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-['Tajawal'] selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Global Background Image Fixed */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495195129352-aec325b55b75?q=80&w=1600&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-15 grayscale-[20%]"
          alt="Atmosphere"
        />
        <div className="absolute inset-0 bg-stone-50/70"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <FoodGallery />
          <InfoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
