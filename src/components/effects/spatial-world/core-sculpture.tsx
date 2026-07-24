"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoutePalette } from "./spatial-constants";

export function CoreSculpture({ palette }: { palette: RoutePalette }) {
  const sculptureRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!sculptureRef.current || !innerRef.current) return;
    sculptureRef.current.rotation.y += delta * 0.075;
    sculptureRef.current.rotation.x = THREE.MathUtils.lerp(
      sculptureRef.current.rotation.x,
      state.pointer.y * 0.15,
      0.035
    );
    innerRef.current.rotation.z -= delta * 0.11;
  });

  return (
    <group
      ref={sculptureRef}
      position={[0, 0.4, -4.5]}
      rotation={[0.18, palette.offset, -0.1]}
    >
      <mesh scale={1.85}>
        <torusKnotGeometry args={[1.15, 0.17, 150, 16, 2, 3]} />
        <meshStandardMaterial
          color={palette.primary}
          roughness={0.24}
          metalness={0.72}
          transparent
          opacity={0.28}
          emissive={palette.primary}
          emissiveIntensity={0.22}
        />
      </mesh>

      <mesh ref={innerRef} scale={1.42}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={palette.secondary}
          wireframe
          transparent
          opacity={0.24}
          emissive={palette.secondary}
          emissiveIntensity={0.45}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.3, 0, 0]} scale={2.7}>
        <torusGeometry args={[1, 0.008, 8, 160]} />
        <meshBasicMaterial color={palette.secondary} transparent opacity={0.24} />
      </mesh>

      <mesh rotation={[0.3, Math.PI / 2, 0]} scale={2.3}>
        <torusGeometry args={[1, 0.006, 8, 160]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}
