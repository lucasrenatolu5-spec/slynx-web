'use client'
import { Card } from './components/card/card'
import { useState } from 'react';
import { ArrowRight, Album, Download, SquareTerminal} from 'lucide-react'

export default function Home() {
    return (
        <>
        <h1>Get started</h1>
        <section>
            <Card
                title="Handbrook"
                href="href1"
                icon={<Album size={60} />}
            >
                Learn the language <ArrowRight />
            </Card>
            <Card
                title="Playground"
                href="href2"
                icon={<SquareTerminal size={60} />}
            >
                Try in your browser <ArrowRight />
            </Card>
            <Card
                title="Download"
                href="href3"
                icon={<Download size={60} />}
            >
                Install Slynx <ArrowRight />
            </Card> 
        </section>
        </>
    )
}