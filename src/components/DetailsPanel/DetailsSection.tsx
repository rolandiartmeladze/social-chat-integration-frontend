import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "../icons";
import { DetailsConfig } from "@/types/Details";

export default function DetailsSection() {
  return (
    <div className="px-3 scroll h-[calc(100vh-200px)] overflow-y-auto ">
      <Accordion
        type="multiple"
        defaultValue={["general", "contact", "device"]}
      >
        {Object.entries(DetailsConfig).map(([section, items]) => {
          const iconMap: Record<string, React.ReactNode> = {
            General: <Icons.general />,
            Contact: <Icons.info />,
            Device: <Icons.device />,
            Activity: <Icons.activityLog />,
          };

          return (
            <AccordionItem key={section} value={section.toLowerCase()}>
              <AccordionTrigger>
                <div className="flex gap-2">
                  {iconMap[section] || <Icons.add />}
                  <samp className="text-lg font-bold">{section}</samp>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 mt-2 flex flex-col gap-2">
                  {items.map((item, idx) => {
                    const IconComponent =
                      Icons[item.icon as keyof typeof Icons];
                    return (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="w-1/2 font-medium text-foreground">
                          {item.label}:
                        </span>
                        <div className="w-1/2 flex items-center gap-2 justify-start">
                          <IconComponent className="size-5" />
                          <span>{item.result}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
