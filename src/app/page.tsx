import Image from "next/image";
import styles from "./page.module.css";
import {Card} from "./components/card/card.tsx";
import {Icon} from "@iconify/react";

export default function Home() {
  return (
    <div>
      <Card title="Hello World" href="/docs" icon={<Icon icon="mdi-light:home" />}>
        Card seilaoq 
      </Card>
    </div>
  );
}
