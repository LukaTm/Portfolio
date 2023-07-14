import styles from "./Projecets.module.css";
import React from "react";

function PreviewBtn({ customHref, customSourceCodeHref }) {
    return (
        <div className="flex ">
            <a
                className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                href={customHref}
                target="_blank"
                rel="noopener noreferrer"
            >
                See Live
            </a>
            <a
                className={`${styles.btnSourceCode} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                href={customSourceCodeHref}
                target="_blank"
                rel="noopener noreferrer"
            >
                Source Code
            </a>
        </div>
    );
}

export default PreviewBtn;
