"use client";

import { Float } from "@react-three/drei";
import { MODULE_POSITIONS } from "./spatial-constants";

export function FloatingModules({ color }: { color: string }) {
  return (
    <group>
      {MODULE_POSITIONS.map(([x, y, z, scale], index) => (
        <Float
          key={`${x}-${y}`}
          speed={0.55 + index * 0.05}
          rotationIntensity={0.32}
          floatIntensity={0.45}
        >
          <mesh position={[x, y, z]} scale={scale}>
            {index % 2 === 0 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <icosahedronGeometry args={[1, 0]} />
            )}
            <meshStandardMaterial
              color={color}
              wireframe
              transparent
              opacity={0.2}
              emissive={color}
              emissiveIntensity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
