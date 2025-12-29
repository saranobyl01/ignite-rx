import { Video, ShieldCheck, Truck } from "lucide-react";

const TrustBadges = ({ isDark = false }: { isDark?: boolean }) => {
  const badges = [
    { icon: Video, text: "Free Confidential Online Consultation" },
    { icon: ShieldCheck, text: "Board-certified Physicians, trusted medications" },
    { icon: Truck, text: "Fast, free shipping" },
    { icon: Video, text: "Free Confidential Online Consultation" },
    { icon: ShieldCheck, text: "Board-certified Physicians, trusted medications" },
    { icon: Truck, text: "Fast, free shipping" },
  ];

  return (
    <section
      className={`py-3 md:py-6 w-full overflow-hidden ${
        isDark ? "bg-[#121212]" : "bg-white"
      }`}
    >
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-left gap-8">
          {[...badges, ...badges].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 md:gap-4 px-4"
            >
              <badge.icon
                className={`w-4 h-4 md:w-6 md:h-6 text-black`}
                strokeWidth={2}
              />
              <p
                className={`text-[10px] md:text-sm font-medium whitespace-nowrap text-black`}
              >
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
