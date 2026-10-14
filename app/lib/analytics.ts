export function trackGigMilesClick(location: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "gigmiles_click", {
      location,
      page_path: window.location.pathname,
      link_url: "/gigmiles",
    });
  }
}

export function trackGigMilesPlayClick(location: string, linkUrl: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "gigmiles_play_click", {
      location,
      page_path: window.location.pathname,
      link_url: linkUrl,
    });
  }
}
