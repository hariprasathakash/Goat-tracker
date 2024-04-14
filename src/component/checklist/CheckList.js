import React from 'react';
import styles from "./check.module.css";

const CheckList = () => {
    return (
        
        <div>
            <h1>What are your goals?</h1>

            <div className={`${styles["check-list"]}`}>
                <p>Weight Loss</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            </div>
            <div className={`${styles["check-list"]}`}>
                <p>Muscle Gain</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            </div><div className={`${styles["check-list"]}`}>
                <p>Flexibility and Mobility</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            </div><div className={`${styles["check-list"]}`}>
                <p>General Fitness</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            </div>
            <div className={`${styles["check-list"]}`}>
                <p>Event - specific training</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            </div>
            <div className={`${styles["check-list"]}`}>
                <p>Mindfulness and Mental Health</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            </div>

            <div>
                <button className={`${styles["btn"]}`}>Confirm</button>
            </div>
        </div>
    )
}

export default CheckList;