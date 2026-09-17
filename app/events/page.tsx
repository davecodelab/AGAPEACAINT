import PlaceholderPage from "@/components/PlaceholderPage";
import EventsTimeline from "@/components/EventsTimeline";

export default function EventsPage() {
  return (
    <>
      <PlaceholderPage
        eyebrow="What's On"
        heading="Upcoming events"
        description="Sports days, fairs, trips and celebrations across the Agape school calendar."
      />
      <EventsTimeline />
    </>
  );
}
