import { LogedNav } from "./LogedNav"
import { LogedHero } from "./LogedHero"

export function MainLoged(){
    return(
        <div className="main-page">
            <LogedNav/>
            <LogedHero/>
        </div>
    )
}