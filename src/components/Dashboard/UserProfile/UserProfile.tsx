"use client";

import UserProfileHeader from "./UserProfileHeade";
import UserProfileDetails from "./UserProfileDetails";
export default function UserProfile() {

    return (
        <div className="flex flex-col items-center justify-center h-auto gap-2">
            <UserProfileHeader />
            <UserProfileDetails />
        </div>
    );
}