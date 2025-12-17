// Analytics Helper Functions
// Tracks events to Google Tag Manager dataLayer

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: Array<Record<string, any>>;
  }
}

export interface AnalyticsEvent {
  event: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Push event to dataLayer for GTM
 * @param event Event data
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  // Initialize dataLayer if not exists
  window.dataLayer = window.dataLayer || [];

  // Push event
  window.dataLayer.push(event);

  // Debug in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics Event]", event);
  }
}

/**
 * Track CTA click
 * @param label CTA label/identifier
 * @param location Page section where CTA was clicked
 * @param destination URL or anchor destination
 */
export function trackCTAClick(label: string, location: string, destination?: string) {
  trackEvent({
    event: "cta_click",
    cta_label: label,
    cta_location: location,
    cta_destination: destination || "",
  });
}

/**
 * Track form submission
 * @param formName Form identifier
 * @param success Whether submission was successful
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent({
    event: success ? "form_submission_success" : "form_submission_error",
    form_name: formName,
  });
}

/**
 * Track lead generation (successful contact form)
 * @param source Lead source (e.g., "contact_form", "demo_request")
 */
export function trackLead(source: string) {
  trackEvent({
    event: "lead_submitted",
    lead_source: source,
  });
}

/**
 * Track section view (scroll into view)
 * @param sectionName Section identifier
 */
export function trackSectionView(sectionName: string) {
  trackEvent({
    event: "section_view",
    section_name: sectionName,
  });
}

/**
 * Track tab/accordion interaction
 * @param component Component name
 * @param tabLabel Tab identifier
 */
export function trackTabInteraction(component: string, tabLabel: string) {
  trackEvent({
    event: "tab_interaction",
    component_name: component,
    tab_label: tabLabel,
  });
}

/**
 * Track video play
 * @param videoTitle Video identifier
 */
export function trackVideoPlay(videoTitle: string) {
  trackEvent({
    event: "video_play",
    video_title: videoTitle,
  });
}

/**
 * Track external link click
 * @param url Destination URL
 * @param linkText Link text/label
 */
export function trackExternalLink(url: string, linkText: string) {
  trackEvent({
    event: "external_link_click",
    link_url: url,
    link_text: linkText,
  });
}

/**
 * Track scroll depth
 * @param percentage Scroll percentage (25, 50, 75, 100)
 */
export function trackScrollDepth(percentage: number) {
  trackEvent({
    event: "scroll_depth",
    scroll_percentage: percentage,
  });
}

/**
 * Track service pillar selection
 * @param pillarName Pillar identifier
 */
export function trackPillarInteraction(pillarName: string) {
  trackEvent({
    event: "pillar_interaction",
    pillar_name: pillarName,
  });
}

/**
 * Track case study view
 * @param caseTitle Case study title
 * @param pillar Associated service pillar
 */
export function trackCaseStudyView(caseTitle: string, pillar: string) {
  trackEvent({
    event: "case_study_view",
    case_title: caseTitle,
    case_pillar: pillar,
  });
}

// Setup scroll depth tracking
export function initScrollDepthTracking() {
  if (typeof window === "undefined") return;

  const depthMarkers = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / scrollHeight) * 100;

    for (const marker of depthMarkers) {
      if (percentage >= marker && !tracked.has(marker)) {
        tracked.add(marker);
        trackScrollDepth(marker);
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
