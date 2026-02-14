
import { Card } from '@/app/components/card/card'
import  Icon  from "@/app/components/icon"

export default function Cards() {
    return (
        <>
            <div>
                <h1>Get started</h1>
            </div>
        <div>
            <Card
                title="Handbrook"
                href="#"
                icon={<Icon icon='material-symbols:book-outline-rounded'/>}
            >
                Learn the language <Icon icon='maki:arrow'></Icon>
            </Card>
            <Card
                title="Playground"
                href="#"
                icon={<Icon icon='fe:terminal' />}
            >
                Try in your browser <Icon icon='maki:arrow'></Icon>
            </Card>
            <Card
                title="Download"
                href="#"
                icon={<Icon icon='material-symbols:download' />}
            >
                Install Slynx <Icon icon='maki:arrow'></Icon>
            </Card> 
        </div>
        </>
    )
}