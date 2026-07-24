"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { RoutePalette, ROUTE_PALETTES } from "./spatial-world/spatial-constants";
import { WorldRig } from "./spatial-world/world-rig";
import { SpatialInteractions } from "./spatial-world/spatial-interactions";

export { SpatialInteractions };

function Scene({ palette }: { palette: RoutePalette }) {
  return (
    <>
      <ambientLight intensity={0.55} color="#dfe4ff" />
      <directionalLight position={[4, 5, 4]} intensity={1.05} color="#ffffff" />
      <pointLight
        position={[3.5, 1.5, -1]}
        intensity={2.2}
        distance={10}
        color={palette.secondary}
      />
      <WorldRig palette={palette} />
    </>
  );
}

export function SpatialWorld() {
  const pathname = usePathname();
  const palette = useMemo(() => {
    const exact = ROUTE_PALETTES[pathname];
    if (exact) return exact;
    const prefix = Object.keys(ROUTE_PALETTES).find(
      (route) => route !== "/" && pathname.startsWith(route)
    );
    return prefix ? ROUTE_PALETTES[prefix] : ROUTE_PALETTES["/"];
  }, [pathname]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="spatial-world" aria-hidden="true">
      <Canvas
        style={{ pointerEvents: "none" }}
        camera={{ position: [0, 0, 7.5], fov: 48, near: 0.1, far: 40 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        performance={{ min: 0.6 }}
      >
        <Scene palette={palette} />
      </Canvas>
    </div>
  );
}
