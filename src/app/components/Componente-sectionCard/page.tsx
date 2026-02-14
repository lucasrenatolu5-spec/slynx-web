
import { Card } from '../components/card/card'
import { Icon as Iconify, IconProps } from "@iconify/react";

export default function Cards() {
    return (
        <>
        <div>
            <h1>Get started</h1>
            <Card
                title="Handbrook"
                href="#"
                icon={<Album size={60} />}
            >
            </Card>
            <Card
                title="Playground"
                href="#"
                icon={<Iconify { ...props } />}
            >
                Try in your browser <ArrowRight />
            </Card>
            <Card
                title="Download"
                href="#"
                icon={<Download size={60} />}
            >
                Install Slynx <ArrowRight />
            </Card> 
        </div>
        </>
    )
}