import styles from "./Projecets.module.css";
import React from "react";

function PreviewBtn({ customHref, customSourceCodeHref, noLiveBtn }) {
    return (
        <div className={`flex ${styles.preview_container}`}>
            {!noLiveBtn ? (
                <a
                    className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                    href={customHref}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className={styles.see_live_text}>See Live</span>
                </a>
            ) : null}

            <a
                className={`${styles.btnSourceCode} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                href={customSourceCodeHref}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.source_code_text}>Source Code</span>
            </a>
        </div>
    );
}

export default PreviewBtn;
