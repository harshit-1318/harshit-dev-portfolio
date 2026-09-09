export type RoutePalette = {
  primary: string;
  secondary: string;
  offset: number;
};

export const ROUTE_PALETTES: Record<string, RoutePalette> = {
  "/": { primary: "#9688ff", secondary: "#52d4ee", offset: 0 },
  "/about": { primary: "#7c8cff", secondary: "#5ce1bd", offset: 0.7 },
  "/projects": { primary: "#aa7cff", secondary: "#5dc9ff", offset: 1.4 },
  "/skills": { primary: "#668cff", secondary: "#73e1ff", offset: 2.1 },
  "/experience": { primary: "#967cff", secondary: "#5ce1bd", offset: 2.8 },
  "/github": { primary: "#7788ff", secondary: "#74e0c1", offset: 3.5 },
  "/leetcode": { primary: "#a485ff", secondary: "#f4ad68", offset: 4.2 },
  "/contact": { primary: "#a478ff", secondary: "#64dbea", offset: 4.9 },
};

export const MODULE_POSITIONS: Array<[number, number, number, number]> = [
  [-7.2, 4.2, -4.5, 0.28],
  [-7.5, -4.2, -5.5, 0.22],
  [7.2, 4.0, -4.8, 0.25],
  [7.5, -4.5, -4.2, 0.24],
  [-8.2, 0.8, -6.5, 0.22],
  [8.4, -0.8, -5.8, 0.26],
  [-6.8, -6.8, -5.2, 0.22],
  [6.8, -6.8, -5.8, 0.25],
];

function seededRandom(index: number) {
  const value = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function createParticlePositions(count: number) {
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (seededRandom(index * 3) - 0.5) * 24;
    positions[index * 3 + 1] = (seededRandom(index * 3 + 1) - 0.5) * 18;
    positions[index * 3 + 2] = -1 - seededRandom(index * 3 + 2) * 10;
  }
  return positions;
}

export const PARTICLE_POSITIONS = createParticlePositions(800);
