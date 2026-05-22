/**
 * TornEdge — reusable torn / ripped paper edge SVG.
 *
 * @param {string} color    - fill color of the torn section
 * @param {'top'|'bottom'} position - which edge of the parent section
 * @param {string} className - optional extra class
 */
export default function TornEdge({ color = '#2D3A1E', position = 'bottom', className = '' }) {
  const isTop = position === 'top';

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        lineHeight: 0,
        overflow: 'hidden',
        ...(isTop ? { top: -1 } : { bottom: -1 }),
        ...(isTop ? { transform: 'rotate(180deg)' } : {}),
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 'clamp(30px, 5vw, 60px)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`
            M0,20
            C20,25 35,10 60,18
            C85,26 100,8 130,15
            C155,22 175,5 200,12
            C225,20 248,6 270,14
            C295,23 315,4 340,10
            C360,16 385,28 410,18
            C430,10 455,25 480,16
            C505,8 530,22 555,14
            C575,7 600,20 625,12
            C650,5 670,24 700,16
            C725,9 750,26 775,18
            C795,11 820,23 845,15
            C870,8 890,22 920,14
            C945,7 965,25 990,17
            C1015,10 1035,20 1060,13
            C1085,6 1105,24 1130,16
            C1155,9 1175,22 1200,14
            C1225,7 1245,20 1270,15
            C1295,10 1315,24 1340,16
            C1365,9 1385,22 1410,14
            C1425,8 1435,18 1440,15
            L1440,60
            L0,60
            Z
          `}
          fill={color}
        />
      </svg>
    </div>
  );
}
