import { LogedNav } from "./LogedNav"
import { LogedHero } from "./LogedHero"
import { ProfilePage } from "./ProfilePage"
import { useState } from "react";



export function MainLoged() {

    

        const [navRes, setNavRes] = useState('main-page');
      
        const changeNavRes = (newNavRes) => {
          setNavRes(newNavRes);
        };



    return (
        <div className="main-page">
            <LogedNav navRes={navRes} onChangeNavRes={changeNavRes}/>
            {navRes === "main-page" ? (
                <LogedHero />
            ) : (
                <ProfilePage />
            )}
        </div>
    );
}
