"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoutePalette } from "./spatial-constants";

export function SecondarySculpture({ palette }: { palette: RoutePalette }) {
  const secondaryRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!secondaryRef.current) return;
    secondaryRef.current.rotation.y -= delta * 0.06;
    secondaryRef.current.rotation.z += delta * 0.04;
  });

  return (
    <group
      ref={secondaryRef}
      position={[7.2, -7.8, -6.8]}
      rotation={[-0.2, 0.5, 0.3]}
    >
      <mesh scale={1.5}>
        <torusKnotGeometry args={[1.0, 0.15, 120, 16, 3, 4]} />
        <meshStandardMaterial
          color={palette.secondary}
          wireframe
          transparent
          opacity={0.22}
          emissive={palette.secondary}
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh scale={2.1}>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={palette.primary}
          wireframe
          transparent
          opacity={0.16}
          emissive={palette.primary}
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}
