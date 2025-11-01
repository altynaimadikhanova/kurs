import PricingCard from "@/components/PricingCard";
import { courses } from "../data/courses";

export default function Home() {
  return (
    <>
      {courses.map((course) => (
        <PricingCard key={course.id} course={course} />
      ))}
    </>
  );
}