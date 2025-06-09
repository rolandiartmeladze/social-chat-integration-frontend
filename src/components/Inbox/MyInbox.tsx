"use client";

import MyInboxMenu from "./MyInboxMenu";
import TeamInboxMenu from "./TeamInboxMenu";

export default function MyInbox() {

    return (
        <div className="p-2">
            <MyInboxMenu />
            <TeamInboxMenu />
        </div>
    )
}