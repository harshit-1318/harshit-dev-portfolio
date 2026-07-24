"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoutePalette } from "./spatial-constants";
import { CoreSculpture } from "./core-sculpture";
import { SecondarySculpture } from "./secondary-sculpture";
import { FloatingModules } from "./floating-modules";
import { ParticleField } from "./particle-field";

export function WorldRig({ palette }: { palette: RoutePalette }) {
  const rigRef = useRef<THREE.Group>(null);
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scrollProgressRef.current = window.scrollY / maxScroll;
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useFrame((state, delta) => {
    if (!rigRef.current) return;
    const targetX = state.pointer.y * 0.26 + scrollProgressRef.current * 0.8;
    const targetY = state.pointer.x * 0.34 + scrollProgressRef.current * 1.2;
    rigRef.current.rotation.x = THREE.MathUtils.damp(
      rigRef.current.rotation.x,
      targetX,
      2.2,
      delta
    );
    rigRef.current.rotation.y = THREE.MathUtils.damp(
      rigRef.current.rotation.y,
      targetY,
      2.2,
      delta
    );
    rigRef.current.position.y = THREE.MathUtils.damp(
      rigRef.current.position.y,
      -scrollProgressRef.current * 1.8,
      1.6,
      delta
    );
  });

  return (
    <group ref={rigRef}>
      <CoreSculpture palette={palette} />
      <SecondarySculpture palette={palette} />
      <FloatingModules color={palette.primary} />
      <ParticleField color={palette.secondary} />
    </group>
  );
}
