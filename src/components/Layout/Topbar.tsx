import { Button } from "../ui/button";

export default function Topbar() {
    return (
        <nav className="bg-background p-4 flex justify-between">
            <ul className="flex">
                <li>
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                </li>
            </ul>
            <Button variant="secondary" className="text-white bg-gray-500 hover:bg-gray-600">
                Staff
            </Button>
        </nav>
    );
};
