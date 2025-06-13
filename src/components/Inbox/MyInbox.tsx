"use client";

import MyInboxMenu from "./MyInboxMenu";
import TeamInboxMenu from "./TeamInboxMenu";

export default function MyInbox() {

    return (
        <div className="h-fit">
            <MyInboxMenu />
            <TeamInboxMenu />
        </div>
    )
}