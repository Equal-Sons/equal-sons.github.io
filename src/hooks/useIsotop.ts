import { useRef } from "react";

export function useIsotop() {
  const isotopContainer = useRef<HTMLDivElement>(null); // Add type annotation for useRef

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current!, { // Use ! to assert that isotopContainer.current is not null
      itemSelector: ".filter-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });

    imagesloaded(isotopContainer.current!).on(
      "progress",
      function () {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  return {
    isotopContainer,
    initIsotop
  };
}
