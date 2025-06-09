import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function DetailsSection() {
    return (
        <div className="p-2">
            <Accordion type="multiple"
                defaultValue={["general", "contact-info", "device-info", "activity-logs"]} 
                >
                <AccordionItem value="general">
                    <AccordionTrigger className="text-lg px-2 py-1 hover:bg-secondary rounded-md">
                        General
                    </AccordionTrigger>
                    <AccordionContent>
                        General Details content
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact-info">
                    <AccordionTrigger className="text-lg px-2 py-1 hover:bg-secondary rounded-md">
                        Contact Info
                    </AccordionTrigger>
                    <AccordionContent>
                        Contacts Details
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="device-info">
                    <AccordionTrigger className="text-lg px-2 py-1 hover:bg-secondary rounded-md">
                        Device Info
                    </AccordionTrigger>
                    <AccordionContent>
                        Device Inf Details
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="activity-logs">
                    <AccordionTrigger className="text-lg px-2 py-1 hover:bg-secondary rounded-md">
                        Activity Logs
                    </AccordionTrigger>
                    <AccordionContent>
                        Activity Logs Details
                    </AccordionContent>
                </AccordionItem>

            </Accordion>

        </div>
    );
}
