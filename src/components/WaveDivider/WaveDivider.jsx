/**
 * WaveDivider — organic multi-layered SVG wave divider between sections.
 *
 * @param {string} topColor    - CSS color for the top of the divider
 * @param {string} bottomColor - CSS color for the bottom of the divider
 * @param {boolean} flip       - flip vertically (default false)
 */
export default function WaveDivider({
  topColor = '#C4A265',
  bottomColor = '#5C2D0E',
  midColor,
  flip = false,
}) {
  const wave1 =
    'M0,80 C150,140 350,20 600,80 C850,140 1050,40 1200,80 ' +
    'L1200,200 L0,200 Z ' +
    'M1200,80 C1350,140 1550,20 1800,80 C2050,140 2250,40 2400,80 ' +
    'L2400,200 L1200,200 Z';

  const wave2 =
    'M0,100 C200,50 400,140 600,100 C800,60 1000,130 1200,100 ' +
    'L1200,200 L0,200 Z ' +
    'M1200,100 C1400,50 1600,140 1800,100 C2000,60 2200,130 2400,100 ' +
    'L2400,200 L1200,200 Z';

  const wave3 =
    'M0,130 C180,110 360,150 600,125 C840,100 1020,155 1200,130 ' +
    'L1200,200 L0,200 Z ' +
    'M1200,130 C1380,110 1560,150 1800,125 C2040,100 2220,155 2400,130 ' +
    'L2400,200 L1200,200 Z';

  const finalMidColor = midColor || (bottomColor === '#5C2D0E' ? '#6B3714' : bottomColor);

  const svgBase = 'absolute bottom-0 left-0 w-full h-full';

  return (
    <div
      className="relative w-full h-[clamp(85px,10vw,130px)] overflow-hidden leading-[0] -mt-px -mb-px z-5"
      aria-hidden="true"
      style={{
        background: topColor,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      {/* Layer 1 — deepest */}
      <svg
        className={svgBase}
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wave1} fill={bottomColor} opacity="0.6" />
      </svg>

      {/* Layer 2 — middle */}
      <svg
        className={svgBase}
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wave2} fill={finalMidColor} opacity="0.8" />
      </svg>

      {/* Layer 3 — front / most opaque */}
      <svg
        className={svgBase}
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wave3} fill={bottomColor} />
      </svg>
    </div>
  );
}
