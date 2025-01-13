import { ReactNode } from "react";
import styles from "./InfoPillContainer.module.scss";
interface InfoPillContainerProps {
    infoPillContainerName: string;
    children: ReactNode;
}

export const InfoPillContainer:React.FC<InfoPillContainerProps> = ({infoPillContainerName, children}) => {
    return(
        <div className={styles.infopillcontainer}>
            <h6>{infoPillContainerName}</h6>
            <div className={styles.infopills}>
                {children}
            </div>
        </div>
    )
}