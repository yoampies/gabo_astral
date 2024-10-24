import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from 'maath'

export default function ModelCamera({ children, isMobile }) {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta)

        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [state.pointer.y/8, -state.pointer.x/5, 0], 0.25, delta)
        }
    })

  return (
    <group ref={groupRef}>{children}</group>
  )
}
