import PricingCard from "@/components/PricingCard";
import { course } from "@/data/course";

export default function Home() {
  return (
    <>
      <PricingCard course={course} />
      <section id="details" className="section">
        <h2>О курсе</h2>
        <p>
          Старт каждую неделю. Занятия 2 раза в неделю по 90 минут. Формат — онлайн.
          Доступ ко всем материалам и записи занятий.
        </p>
        <h3>Что вы изучите</h3>
        <ul className="grid-bullets">
          <li>HTML5 семантика и структура</li>
          <li>Современный CSS: Flexbox, Grid, адаптив</li>
          <li>Мини-проект и публикация на GitHub Pages / Vercel</li>
        </ul>
      </section>
    </>
  );
}
