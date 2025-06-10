import DetailsHeader from "./DetailsHeader";
import DetailsSection from "./DetailsSection";

export default function DetailsPanel() {
    return (
        <div className="flex flex-col w-96 h-full  bg-secondary">
            <DetailsHeader />
            <DetailsSection />
        </div>
    );
}
