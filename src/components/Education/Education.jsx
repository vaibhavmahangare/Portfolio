import React from "react";
import { getImageUrl } from '../../utils'
import styles from "./Education.module.css"
import education from "../../data/education.json"

export const Education = () =>{
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
        <ul className={styles.education}>
            {education.map((educationItem, id) => {
                return (
                    <li key={id} className={styles.educationItem}>
                        <div className={styles.educationItemDetails}>
                            <h3>{`${educationItem.Degree}, ${educationItem.College}`}</h3>
                            <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                            <p>{`Result  :- ${educationItem.result}`}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    </section>
       
    )
}