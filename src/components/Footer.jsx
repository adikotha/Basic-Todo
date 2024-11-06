import { useState } from "react"

export default function Footer({tasks,task}){
    return(
        <footer className="footer">
            <h1>
                Total Todos:{tasks.length}
            </h1>
        </footer>
    )
}