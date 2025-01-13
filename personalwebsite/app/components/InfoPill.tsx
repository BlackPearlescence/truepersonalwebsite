import React from "react";
import styles from "./InfoPill.module.scss"

interface InfoPillProps {
    infoName: string;
}

export const InfoPill: React.FC<InfoPillProps> = ({infoName}) => {
    return(
        <div className={styles.infopillcontainer}>
            <span>{infoName}</span>
        </div>
    )
}