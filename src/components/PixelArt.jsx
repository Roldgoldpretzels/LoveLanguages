export function PixelArt({ rows, palette, scale = 3, style, className }) {
  const width  = rows[0].length;
  const height = rows.length;

  return (
    <svg
      width={width * scale}
      height={height * scale}
      viewBox={`0 0 ${width} ${height}`}
      style={{ imageRendering: 'pixelated', display: 'block', ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {rows.flatMap((row, y) =>
        [...row].map((char, x) => {
          if (char === '.') return null;
          const color = palette[char];
          if (!color) return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />;
        })
      )}
    </svg>
  );
}
