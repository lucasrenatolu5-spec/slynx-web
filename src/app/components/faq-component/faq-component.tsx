"use client";

import { useState } from "react";
import styles from "./faq-component.module.css";
import { Icon } from "@iconify/react";

// Props type for each FAQ item
type FaqItemProps = {
  /** Question text displayed in the header */
  question: string;
  /** Answer text revealed when expanded */
  answer: string;
};

/**
 * Component representing a single FAQ item.
 * Renders a question that can be expanded to reveal its corresponding answer.
 *
 * This component relies on the following CSS classes:
 * 
 * container - Main FAQ container, controls background, border, radius, and overflow
 * header - Clickable header containing the question and icon
 * icon - Arrow icon that rotates when opened/closed
 * rotate - Adds 180° rotation to the icon
 * content - Area containing the answer, collapsible
 * open - Open state of content (controls height, opacity, padding)
 * answer - Styles the answer text
 *
 * @param props.question FAQ question
 * @param props.answer FAQ answer
 * @returns JSX.Element representing an expandable FAQ item
 */
export default function FaqItem({ question, answer }: FaqItemProps) {
  // State to toggle FAQ open/close
  const [open, setOpen] = useState(false);

  return (
    /** FAQ container */
    <div className={styles.container}>

      {/**
       * Clickable header
       * Toggles open/closed state
       */}
      <button
        type="button"
        className={styles.header}
        onClick={() => setOpen((prev) => !prev)}
      >
        {/** Question text */}
        <span>{question}</span>

        {/** Arrow icon that rotates when open */}
        <span className={`${styles.icon} ${open ? styles.rotate : ""}`}>
          <Icon 
            icon="material-symbols:keyboard-arrow-down" 
            width={30} 
          />
        </span>
      </button>

      {/**
       * Expandable content
       * The 'open' class controls height, opacity, and padding
       */}
      <div className={`${styles.content} ${open ? styles.open : ""}`}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}