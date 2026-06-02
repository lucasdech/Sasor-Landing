import { useState } from "react";
import type { FaqItem } from "../data/faq";

type Props = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article
            key={item.id}
            className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className="faq-answer-wrap">
              <p className="faq-answer">{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
