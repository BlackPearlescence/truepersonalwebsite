import { CallToAction } from "../components/CallToAction"
import { InfoPill } from "../components/InfoPill"
import { InfoPillContainer } from "../components/InfoPillContainer"

export const HomePage = () => {
    return (
        <div>
            <CallToAction />
            <InfoPillContainer infoPillContainerName="Interests">
                <InfoPill infoName="Gaming" />
                <InfoPill infoName="Music" />
                <InfoPill infoName="Programming" />
                <InfoPill infoName="Fitness" />
            </InfoPillContainer>
            <InfoPillContainer infoPillContainerName="Technical Skills">
                <InfoPill infoName="JavaScript" />
                <InfoPill infoName="TypeScript" />
                <InfoPill infoName="React" />
                <InfoPill infoName="Node.js" />
                <InfoPill infoName="Express" />
                <InfoPill infoName="MongoDB" />
                <InfoPill infoName="HTML" />
                <InfoPill infoName="CSS" />
                <InfoPill infoName="SCSS" />
                <InfoPill infoName="Git" />
                <InfoPill infoName="Python" />
                <InfoPill infoName="Java" />
                <InfoPill infoName="C#" />
                <InfoPill infoName="SQL" />
                <InfoPill infoName="PostgreSQL" />
                <InfoPill infoName="SQLite" />
                <InfoPill infoName= "Docker" />
                <InfoPill infoName="Figma" />
                <InfoPill infoName="GraphQL" />
                <InfoPill infoName="RESTful APIs" />
                <InfoPill infoName="SQLAlchemy" />
                <InfoPill infoName="Flask" />
                <InfoPill infoName="Mongoose" />
                <InfoPill infoName="Prisma" />
            </InfoPillContainer>
            <InfoPillContainer infoPillContainerName="Soft Skills">
                <InfoPill infoName="Problem Solving" />
                <InfoPill infoName="Team Player" />
                <InfoPill infoName="Patience" />
                <InfoPill infoName="Ability to Articulate" />
                <InfoPill infoName="Creativity" />
            </InfoPillContainer>
        </div>
    )
}