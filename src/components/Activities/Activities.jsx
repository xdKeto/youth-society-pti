import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motionVariants';
import ScrollReveal from '../shared/ScrollReveal';
import ActivityCard from './ActivityCard';

import smiley from '../../assets/illustrations/smiley.png';
import teaCup from '../../assets/illustrations/tea_cup.png';
import squigglyLine from '../../assets/illustrations/squiggly_line.png';

const activities = [
  {
    title: 'YOUTH CIRCLE',
    description:
      'Komunitas persekutuan doa yang membuat kita bertumbuh bersama-sama melalui FirmanNya. Kegiatan ini diadakan setiap satu bulan sekali, pada hari Sabtu.',
  },
  {
    title: 'BONDING TIME',
    description:
      'Kita bakalan seru-seruan bareng dengan berbagai macam aktivitas, seperti nobar, olahraga, shareving, mini games, jalan-jalan keliling dunia, dan masih banyak lagi. Kegiatan ini diadakan setiap satu bulan sekali.',
    cardAsset: smiley,
    cardAssetClass: '-bottom-7 -right-9 w-[105px] max-sm:w-[85px] max-sm:-right-5 max-sm:-bottom-6 rotate-12 z-20',
  },
  {
    title: 'TEA TIME',
    description:
      'Ngeteh, Nyemil, dan Ngobrol bareng temen-temen pemuda setiap hari minggu ke-1 dan ke-3 setelah KUNM di Pingli. Di sana kamu bisa saling berbagi cerita dan tawa bersama komunitas pemuda.',
    cardAsset: teaCup,
    cardAssetClass: '-bottom-12 -left-12 w-[130px] max-sm:w-[100px] max-sm:-left-6 max-sm:-bottom-9 -rotate-[12deg] z-20',
  },
  {
    title: 'YGY',
    subtitle: '(Youth Goes to You)',
    description:
      'Kegiatan yang berfokus pada perlawatan jemaat pemuda berupa perkunjungan.',
  },
];

export default function Activities() {
  return (
    <section
      className="relative overflow-visible pt-16 pb-12 px-8 max-sm:pt-10 max-sm:pb-8 max-sm:px-4"
      style={{ background: 'linear-gradient(175deg, var(--color-brown) 0%, var(--color-dark-brown) 100%)' }}
      id="activities"
    >
      <div className="max-w-[900px] mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 justify-items-center items-start max-sm:grid-cols-1 ">
          {activities.map((act, i) => (
            <ActivityCard
              key={act.title}
              index={i}
              title={act.title}
              subtitle={act.subtitle}
              description={act.description}
              cardAsset={act.cardAsset}
              cardAssetClass={act.cardAssetClass}
            />
          ))}
        </div>
      </div>

      {/* Decorative squiggly line — bottom-left, overflows into Envelope section, on big screen dissapear */}
      <img
        src={squigglyLine}
        alt=""
        className="absolute -bottom-8 -left-7 w-[clamp(110px,16vw,190px)] md:hidden pointer-events-none opacity-60 z-20 rotate-[15deg] max-sm:w-[100px] max-sm:-bottom-5"
        loading="lazy"
        aria-hidden="true"
      />
    </section>
  );
}

