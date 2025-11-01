export type Course = {
  id: string;
  title: string;
  subtitle?: string;
  priceKZT: number;
  duration?: string;       // например: "1 ай • 8 сабақ"
  image?: string;          // из /public
  description: string;
  bulletPoints?: string[];
};

export const course: Course = {
  id: "kurs-info",
  title: "Kurs Info — Веб-негіздері",
  subtitle: "HTML, CSS, және базовый JS с нуля",
  priceKZT: 49000,
  duration: "1 айлық курс • 8 сабақ",
  image: "/course.svg",
  description:
    "Практикалық курс: верстка, сетки, адаптив, Git. Әр сабақта мини-проект и домашка.",
  bulletPoints: [
    "Новичкам и тем, кто «с нуля»",
    "Финальный мини-проект + ревью",
    "Поддержка в чате и чек-листы"
  ],
};
