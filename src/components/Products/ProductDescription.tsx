import React from "react";
import { ArrowRight } from "lucide-react";

/* --------------------------------
   Types
-------------------------------- */

type Benefit =
  | string
  | {
      title: string;
      description: string;
    };

interface ProductDescriptionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  image: string;
  onGetStarted?: () => void;
  additionalContent?: React.ReactNode;
  imageAspectRatio?: string;
  imagePosition?: "left" | "right";
}

/* --------------------------------
   Component
-------------------------------- */

const ProductDescription = ({
  title,
  subtitle,
  benefits,
  image,
  onGetStarted,
  additionalContent,
  imageAspectRatio = "aspect-[4/5] lg:aspect-square",
  imagePosition = "right",
}: ProductDescriptionProps) => {
  const isImageLeft = imagePosition === "left";

  // Normalize benefits to support both formats
  const normalizedBenefits = benefits.map((benefit) =>
    typeof benefit === "string"
      ? { title: benefit, description: "" }
      : benefit
  );

  return (
    <section className="py-8 md:py-12 lg:py-16 w-full max-w-full overflow-hidden bg-[#dbdbdb1a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* ---------------- Content ---------------- */}
          <div
            className={`space-y-6 md:space-y-8 w-full ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-foreground">
                {title}
              </h2>
            </div>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl text-muted-foreground">
              {subtitle}
            </p>

            {/* ---------------- Benefits ---------------- */}
            {normalizedBenefits.length > 0 && (
              <ul className="space-y-2">
                {normalizedBenefits.map((benefit, index) => {
                  // Split description into lines
                  const lines =
                    benefit.description?.split("\n").filter(Boolean) || [];

                  const isList = lines.length > 1;

                  return (
                    <li key={index} className="flex gap-3">
                      <span className="mt-3 h-[7px] w-[7px] rounded-full bg-muted-foreground flex-shrink-0" />

                      <div className="space-y-2">
                        {/* Title */}
                        <p className="text-sm md:text-base lg:text-lg  text-muted-foreground">
                          {benefit.title}
                        </p>

                        {/* Description */}
                        {isList ? (
                          <ul className="pl-4 space-y-1 list-disc">
                            {lines.map((line, i) => (
                              <li
                                key={i}
                                className="text-sm md:text-base text-muted-foreground"
                              >
                                {line}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm md:text-base text-muted-foreground">
                            {benefit.description}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}


            {/* ---------------- Additional Content ---------------- */}
            {additionalContent && (
              <div className="text-foreground">
                {additionalContent}
              </div>
            )}

            {/* ---------------- CTA ---------------- */}
            {/* {onGetStarted && ( */}
              <div className="pt-2">
                <button
                  onClick={onGetStarted}
                  className="w-full lg:w-auto px-8 md:px-12 lg:px-14 py-3.5 md:py-4 flex gap-2 items-center justify-center bg-black text-white font-medium tracking-wide text-sm md:text-base rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
                >
                  Get Started <ArrowRight />
                </button>
              </div>
            {/* )} */}
          </div>

          {/* ---------------- Image ---------------- */}
          <div
            className={`relative ${imageAspectRatio} w-full rounded-[10px] overflow-hidden shadow-2xl ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
