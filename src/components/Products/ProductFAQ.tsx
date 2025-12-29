import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface ProductFAQProps {
  items: FAQItem[];
}

const ProductFAQ = ({ items }: ProductFAQProps) => {
  return (
    <section className="py-6 md:py-12 lg:py-16 w-full max-w-full overflow-hidden bg-[hsl(0,0%,5%)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className=" mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 md:mb-12 text-white">
            Have questions?{" "}
            We're here to help
          </h2>

          <AccordionPrimitive.Root type="single" collapsible className="space-y-0">
            {items.map((item, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-6 md:py-8 text-left font-normal text-base md:text-lg lg:text-xl text-white transition-all hover:no-underline",
                      "[&[data-state=open]>svg]:rotate-45"
                    )}
                  >
                    <span className="pr-4 md:pr-6">
                      {item.question}
                    </span>
                    <Plus
                      className="h-6 w-6 md:h-7 md:w-7 shrink-0 text-white/70 transition-transform duration-200"
                      strokeWidth={1.5}
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                <AccordionPrimitive.Content
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                >
                  <div className="pb-6 md:pb-8 text-sm md:text-base leading-relaxed pr-10 md:pr-14 text-white/70">
                    {item.answer}
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
