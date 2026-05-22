import CircularGallery from '../../reactbits-components/circular-gallery/CircularGallery';

import activity1 from '../../assets/photos/activity1.png';
import activity2 from '../../assets/photos/activity2.png';
import activity3 from '../../assets/photos/activity3.png';
import activity4 from '../../assets/photos/activity4.png';
import activity5 from '../../assets/photos/activity5.png';
import activity6 from '../../assets/photos/activity6.png';
import activity7 from '../../assets/photos/activity7.png';
import activity8 from '../../assets/photos/activity8.png';
import activity9 from '../../assets/photos/activity9.png';

const galleryItems = [
  { image: activity1, text: '' },
  { image: activity2, text: '' },
  { image: activity3, text: '' },
  { image: activity4, text: '' },
  { image: activity5, text: '' },
  { image: activity6, text: '' },
  { image: activity7, text: '' },
  { image: activity8, text: '' },
  { image: activity9, text: '' },
];

/**
 * Gallery — full-width circular photo gallery section between Activities and Envelope.
 * Uses the CircularGallery component from reactbits with activity photos.
 */
export default function Gallery() {
  return (
    <section
      className="relative bg-[var(--color-brown)] w-full overflow-hidden"
      style={{ height: 'clamp(300px, 50vh, 600px)' }}
      id="gallery"
    >
      <CircularGallery
        items={galleryItems}
        bend={1}
        textColor="var(--color-yellow)"
        borderRadius={0}
        font="bold 24px var(--font-display)"
        autoScroll={true}
        autoScrollSpeed={0.07}
      />
    </section>
  );
}
