import { useEffect, useState } from "react";

export default function useDocument () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event:MouseEvent) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");
      if (
        menuWrapper &&
        menuContainer &&
        event.target &&
        !menuContainer.contains(event.target as Node) &&
        menuWrapper.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  },[]);


  return {
    mobileMenuOpen,
    setMobileMenuOpen
  }
}