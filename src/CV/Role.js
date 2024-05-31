import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Role = () => {
  return (
    <div className="bg-black h-4/5 rounded-xl overflow-y-scroll scrollbar mt-5">
      <div className="mx=auto max-w-7xl px-6">
        <Accordion className="w-full" allowMultiple>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span
                  className="text-left font-bold text-cyan-400 dark:text-white"
                  flex="1"
                  textAlign="left"
                >
                  Description
                </span>
                <AccordionIcon className="text-left !text-cyan-400 dark:!text-white" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-left text-medium mt-2 !text-cyan-400 dark:!text-white"
              pb={4}
            >
              ZOE™ is a simple and understated stackable shell chair with lots
              of personality and character that is as beautiful when seen from
              below as from above. The frame is discretely tucked into the
              chair's molded shell, and the shell's tapering thickness gives it
              a friendly expression.
            </AccordionPanel>
          </AccordionItem>{" "}
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span
                  className="text-left font-bold text-cyan-400 dark:text-white"
                  flex="1"
                  textAlign="left"
                >
                  Characteristics
                </span>
                <AccordionIcon className="text-left !text-cyan-400 dark:!text-white" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-medium mt-2 text-left !text-cyan-400 dark:!text-white"
              pb={4}
            >
              ZOE™ is a simple and understated stackable shell chair with lots
              of personality and character that is as beautiful when seen from
              below as from above. The frame is discretely tucked into the
              chair's molded shell, and the shell's tapering thickness gives it
              a friendly expression.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span
                  className="text-left font-bold text-cyan-400 dark:text-white"
                  flex="1"
                  textAlign="left"
                >
                  Reviews
                </span>
                <AccordionIcon className="text-left !text-cyan-400 dark:!text-white" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-left text-medium mt-2 !text-cyan-400 dark:!text-white"
              pb={4}
            >
              ZOE™ is a simple and understated stackable shell chair with lots
              of personality and character that is as beautiful when seen from
              below as from above. The frame is discretely tucked into the
              chair's molded shell, and the shell's tapering thickness gives it
              a friendly expression.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Role;
