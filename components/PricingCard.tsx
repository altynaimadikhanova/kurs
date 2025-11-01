"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/course";

type Props = {
  course: Course;
  onBuy?: () => void; // можно привязать позже к оплате
};

export default function PricingCard({ course, onBuy }: Props) {
  const { title, subtitle, description, priceKZT, duration, image, bulletPoints } = course;

  const formatPrice = (v: number) =>
    new Intl.NumberFormat("ru-RU").format(v) + " ₸";

  return (
    <section className="card">
      <div className="card-media">
        <Image
          src={image ?? "/course.svg"}
          alt={title}
          fill
          className="card-img"
          priority
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        {subtitle && <p className="card-sub">{subtitle}</p>}

        <p className="card-desc">{description}</p>

        {bulletPoints?.length ? (
          <ul className="card-list">
            {bulletPoints.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        <div className="price-box">
          <div className="price">{formatPrice(priceKZT)}</div>
          {duration && <div className="note">{duration}</div>}
        </div>

        <div className="cta-row">
          <button
            className="btn"
            onClick={onBuy ?? (() => alert("Оплата будет подключена позже"))}
          >
            Купить
          </button>
          <Link href="#details" className="btn-outline">
            Подробнее
          </Link>
        </div>
      </div>
    </section>
  );
}
