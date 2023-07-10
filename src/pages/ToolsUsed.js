import styles from "./ToolsUsed.module.css";

function ToolsUsed({ tool }) {
    return (
        <div
            className={`${styles.tool_container} dark:bg-slate-800 dark:border-dark dark:shadow-none dark:text-white dark:hover:bg-slate-700 `}
        >
            {tool}
        </div>
    );
}

export default ToolsUsed;
