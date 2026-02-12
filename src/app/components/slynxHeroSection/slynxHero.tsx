"use client";

import React, { useState, useEffect } from 'react';
import styles from './slynxHero.module.css';

/**
 * Represents a single badge in the SlynxHero component.
 * @typedef {Object} Badge
 * @property {string} id - Unique identifier for the badge
 * @property {string} text - Text displayed on the badge
 * @property {'primary' | 'secondary'} variant - Visual variant of the badge
 */
export interface Badge {
  id: string;
  text: string;
  variant: 'primary' | 'secondary';
}

/**
 * Props for the SlynxHero component.
 * @typedef {Object} SlynxHeroProps
 * @property {string} title - Title text before the brand name
 * @property {string} brandName - Brand name highlighted in green
 * @property {string} description - Descriptive text below the title
 * @property {Badge[]} badges - Array of interactive badges
 * @property {string} codeExample - Code to display with typing animation
 * @property {string} fileName - File name displayed in the terminal header
 * @property {number} typingSpeed - Typing animation speed in milliseconds
 * @property {(badgeId: string) => void} onBadgeSelect - Callback executed when a badge is selected
 */
export interface SlynxHeroProps {
  title: string;
  brandName: string;
  description: string;
  badges: Badge[];
  codeExample: string;
  fileName: string;
  typingSpeed: number;
  onBadgeSelect: (badgeId: string) => void;
}

/**
 * SlynxHero Component
 *
 * A hero section component that displays:
 * - A title with highlighted brand name
 * - A descriptive subtitle
 * - Interactive, selectable badges
 * - A terminal window with typewriter-style code animation
 *
 * The component supports dynamic code examples that change based on
 * badge selection, creating an interactive demonstration experience.
 *
 * @param {SlynxHeroProps} props - Props for the component
 * @returns {JSX.Element} Rendered hero section
 *
 * @example
 * <SlynxHero
 *   title="Why"
 *   brandName="Slynx"
 *   description="Slynx is fast, safe, and modern."
 *   badges={[
 *     { id: 'fast', text: 'Fast', variant: 'primary' },
 *     { id: 'safe', text: 'Safe', variant: 'secondary' }
 *   ]}
 *   codeExample="fun main() { println('Hello World') }"
 *   fileName="example.slynx"
 *   typingSpeed={50}
 *   onBadgeSelect={(id) => console.log(id)}
 * />
 */
export const SlynxHero: React.FC<SlynxHeroProps> = ({
  title,
  brandName,
  description,
  badges,
  codeExample,
  fileName,
  typingSpeed,
  onBadgeSelect,
}) => {
  /** Currently typed text (partial or complete) */
  const [typedText, setTypedText] = useState('');

  /** Set containing the IDs of selected badges (radio behavior) */
  const [selectedBadges, setSelectedBadges] = useState<Set<string>>(new Set());

  /** Indicates if the typing animation is in progress */
  const [isTyping, setIsTyping] = useState(true);

  /**
   * Handles typing animation of the code.
   * Re-runs when codeExample or typingSpeed changes.
   */
  useEffect(() => {
    let currentIndex = 0;
    setTypedText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (currentIndex <= codeExample.length) {
        setTypedText(codeExample.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [codeExample, typingSpeed]);

  /**
   * Handles badge selection.
   * Only one badge can be selected at a time.
   * @param {string} badgeId - ID of the clicked badge
   */
  const handleBadgeClick = (badgeId: string) => {
    setSelectedBadges(new Set([badgeId]));
    onBadgeSelect(badgeId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Title */}
        <h1 className={styles.title}>
          {title} <span className={styles.brand}>{brandName}</span>?
        </h1>

        {/* Description */}
        <p className={styles.description}>{description}</p>

        {/* Badges */}
        <div className={styles.badges}>
          {badges.map((badge, index) => {
            const isSelected = selectedBadges.has(badge.id);
            return (
              <button
                key={badge.id}
                onClick={() => handleBadgeClick(badge.id)}
                className={`${styles.badge} ${
                  isSelected ? styles.badgePrimary : styles.badgeSecondary
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-pressed={isSelected}
                aria-label={`Select ${badge.text}`}
              >
                {badge.text}
              </button>
            );
          })}
        </div>

        {/* Terminal window */}
        <div className={styles.codeWindow}>
          {/* Header */}
          <div className={styles.codeHeader}>
            <div className={styles.trafficLights}>
              <span className={styles.trafficRed} aria-hidden="true"></span>
              <span className={styles.trafficYellow} aria-hidden="true"></span>
              <span className={styles.trafficGreen} aria-hidden="true"></span>
            </div>
            <div className={styles.fileName}>{fileName}</div>
          </div>

          {/* Code body */}
          <div className={styles.codeBody}>
            <pre className={styles.codeContent}>
              <code>
                {typedText}

              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlynxHero;