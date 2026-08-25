import gsap from "gsap";

export default function addGsap() {
  if (typeof window !== "undefined") {
    const magnets = document.querySelectorAll<HTMLElement>(".gsap-magnetic");
    const strength = 50;

    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseout", (event) => {
        gsap.to(event.currentTarget, {
          duration: 1,
          x: 0,
          y: 0,
          ease: "power4.out",
        });
      });

      function moveMagnet(event: MouseEvent) {
        const magnetButton = event.currentTarget as HTMLElement;
        const bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, {
          duration: 1,
          x:
            ((event.clientX - bounding.left) /
              magnetButton.offsetWidth -
              0.5) *
            strength,
          y:
            ((event.clientY - bounding.top) /
              magnetButton.offsetHeight -
              0.5) *
            strength,
          ease: "power4.out",
        });
      }
    });
  }
}
