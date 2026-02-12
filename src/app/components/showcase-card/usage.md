
---

## Usage

```tsx
import Showcase from './components/showcase-card/showcaseCard';

export default function Page() {
  return (
    <Showcase
      cards={[
        {
          tabs: [
            {
              title: 'Modern UI',
              description: 'High-performance user interfaces.',
            },
            {
              title: 'Performance',
              description: 'Optimized rendering pipeline.',
            },
          ],
        },
        {
          tabs: [
            {
              title: 'Componentization',
              description: 'Reusable and modular architecture.',
            },
            {
              title: 'Developer Experience',
              description: 'Type-safe and maintainable structure.',
            },
          ],
        },
      ]}
    />
  );
}
```

---

## Props Structure

```ts
interface Tab {
  title: string;
  description: string;
}

interface ShowcaseCardData {
  tabs: Tab[];
}

interface ShowcaseProps {
  cards: ShowcaseCardData[];
}
```

---

