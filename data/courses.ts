// data/courses.ts
export type Course = {
  id: string;
  title: string;
  subtitle?: string;
  priceKZT: number;
  duration?: string;
  image?: string;
  description: string;
  bulletPoints?: string[];
};

export const courses: Course[] = [
  {
    id: "kurs-info",
    title: "Kurs Info — Веб-негіздері",
    subtitle: "HTML, CSS, және базовый JS с нуля",
    priceKZT: 49000,
    duration: "1 айлық курс • 8 сабақ",
    image: "/course.svg",
    description:
      "Практикалық курс: верстка, сетки, адаптив, Git. Әр сабақта мини-проект и домашка.",
    bulletPoints: [
      "Новичкам және нөлден бастаушыларға арналған",
      "Финалдық мини-проект + ревью",
      "Поддержка және чек-листер"
    ],
  },


  {
    id: "python-starter",
    title: "Python Starter",
    subtitle: "Бағдарламалауға алғашқы қадам",
    priceKZT: 55000,
    duration: "1 ай • 8 сабақ",
    image: "/python.svg",
    description:
      "Курс жаңадан бастаушылар үшін Python негіздерін үйретеді. Нәтижесінде студент өз алғашқы кішкентай жобасын жасайды.",
    bulletPoints: [
      "Python синтаксисі және негізгі операторлар",
      "Мәліметтер типтері және циклдер",
      "Мини-жоба: қарапайым калькулятор",
    ],
  },

  {
    id: "english-speaking",
    title: "English Speaking Boost",
    subtitle: "Сөйлеу машығын дамытатын интенсив",
    priceKZT: 65000,
    duration: "3 апта • 9 сабақ",
    image: "/english.svg",
    description:
      "Интерактивті сабақтар арқылы ағылшын тілінде еркін сөйлеуді үйреніңіз. Рөлдік ойындар мен пікірталас арқылы практика жасайсыз.",
    bulletPoints: [
      "Speaking club форматындағы сабақтар",
      "Тақырыптық сөздік қоры және pronunciation drills",
      "Финалдық презентация ағылшын тілінде",
    ],
  },


];