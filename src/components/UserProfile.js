import React, { Suspense } from "react";
import "../index.css";
import { Themecontext } from "../App";
// Lazy Loading
const Avatar = React.lazy(() => import("./Avatar"));

//Card component .....
function UserProfile() {
    let th = React.useContext(Themecontext);
    return (
        <div className="Card">
            <Suspense fallback={<div>Loading ...</div>}>
                <Avatar />
            </Suspense>
            <div className="card-name"> {th}</div>
            <div className="card-bio">Obama is the first black president</div>
            <div className="card-bio"> His age is</div>
        </div>
    );
}

export default UserProfile;
