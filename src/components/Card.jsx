

const anjumanlar = [
  {
    nomi: "Davlat boshqaruvchilarining majlisi",
    vaqti: "2024-05-10 14:00",
    joyi: "Davlat palatasi, Toshkent",
  },
  {
    nomi: "Texnikachilar ittifoqi anjumani",
    vaqti: "2024-06-15 09:30",
    joyi: "Texnikachilar markazi, Samarqand",
  },
  {
    nomi: "Xalqaro innovatsiya forumi",
    vaqti: "2024-07-20 10:00",
    joyi: "Dunyo siyosiy va madaniy markazi, Xiva",
  },
  {
    nomi: "IT kengashining yig'ilishi",
    vaqti: "2024-08-05 11:30",
    joyi: "Innovatsion texnologiyalar markazi, Andijon",
  },
  {
    nomi: "Dunyo ta'lim muassasalarining birligi",
    vaqti: "2024-09-18 13:45",
    joyi: "Mamlakatimizning ta'lim markazi, Namangan",
  },
  {
    nomi: "Oliy o'quv yurtlarining rektoral ko'ngili",
    vaqti: "2024-10-30 15:20",
    joyi: "Toshkent davlat yuridik universiteti, Toshkent",
  },
  {
    nomi: "Turizm sohasi yuksalishining eng yaxshi yo'nalishlari",
    vaqti: "2024-11-14 09:00",
    joyi: "Turizm texnologiyalari markazi, Bukhoro",
  },
  {
    nomi: "Mehnat va ma'naviyat kengashi",
    vaqti: "2024-12-22 10:30",
    joyi: "Mehnat va ma'naviyat markazi, Qarshi",
  },
  {
    nomi: "Iqtisodiyotning rivojlanishi strategiyasi",
    vaqti: "2025-01-08 12:15",
    joyi: "Iqtisodiyotni rivojlantirish markazi, Urganch",
  },
  {
    nomi: "O'zbekistonning 30-yilligi munosabati bilan tanlov",
    vaqti: "2025-02-20 14:45",
    joyi: "Davlat milliy teatri, Toshkent",
  },
];


function Card({ nomi, vaqti, joyi }) {
  return (
    <div className="container mx-auto">
    <div className="col-span-12 px-4 py-2 mb-10 border w-500 sm:col-span-12">
      <div className="flex items-center py-10 bg-white box-showed ps-6 sm:ps-8 md:ps-10 lg:ps-12 xl:ps-20 rounded-xl">
        <a href="#" className="flex">
          <div className="flex-1 pr-8 sm:pr-12 md:pr-20 lg:pr-30">
            <h6 className="mt-0 font-medium">{nomi}</h6>
            <span className="text-sm">{vaqti}</span>
            <p className="mt-2 mb-0"> {joyi}</p>
          </div>
        </a>
      </div>
    </div>
    </div>
    
  );
}

// Anjumanlarni map yordamida chiqaruvchi komponent
function AnjumanlarList() {
  return (
    <div className="">
      {anjumanlar.map((anjuman, index) => (
        <Card key={index} nomi={anjuman.nomi} vaqti={anjuman.vaqti} joyi={anjuman.joyi} />
      ))}
    </div>
  );
}

export default AnjumanlarList;
