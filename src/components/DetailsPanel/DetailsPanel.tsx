import DetailsHeader from "./DetailsHeader";
import DetailsSection from "./DetailsSection";

export default function DetailsPanel() {
    return (
        <div className="flex flex-col h-full  bg-secondary">
            <DetailsHeader />
            <DetailsSection />
        </div>
    );
}
