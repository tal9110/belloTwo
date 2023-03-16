import { Canvas } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import {
  Environment,
  Lightformer,
  OrbitControls,
  PivotControls,
} from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import Bellie from "./Bellie";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function R3f(props) {
  const bellieRef = useRef();

  useEffect(() => {
    if (props.spin === 0) return;
    gsap.to(bellieRef.current.rotation, {
      x: bellieRef.current.rotation.x,
      y: bellieRef.current.rotation.y,
      z: Math.PI * props.spin,
      duration: 1,
      ease: "power4.inOut",
    });
  }, [props.spin]);

  return (
    <Canvas
      orthographic
      camera={{ position: [6, -5, 10], zoom: 60 }}
      style={{ position: "absolute", zIndex: 0 }}
    >
      <color attach="background" args={["#AA275B"]} />
      <ambientLight />
      <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />
      <group position={[13, -4, 0]}>
        <Float floatIntensity={5} rotationIntensity={0} speed={2}>
          <group ref={bellieRef} scale={10} rotation-x={Math.PI / 2}>
            <Bellie />
          </group>
        </Float>
        <Scene scale={0.01} />
      </group>
      <OrbitControls makeDefault />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={4}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[4, 1, 1]}
            />
          ))}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
      </Environment>
    </Canvas>
    // </div>
  );
}

/*
  Auto-generated by Spline
*/
function Scene({ ...props }) {
  // const config = useControls({});
  const config = {
    backside: false,
    samples: 16,
    resolution: 256,
    transmission: 0.95,
    roughness: 0.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    thickness: 200,
    backsideThickness: 200,
    ior: 1.5,
    chromaticAberration: 1,
    anisotropy: 1,
    distortion: 0,
    distortionScale: 0.2,
    temporalDistortion: 0,
    attenuationDistance: 0.5,
    attenuationColor: "#ffffff",
    color: "#ffffff",
  };

  return (
    <>
      <group {...props}>
        <Shape
          name="Rectangle 6"
          color="#FF718F"
          // color="#FCD0AD"
          config={config}
          position={[-700.64, 343.77, -621.72]}
        />
        <Shape
          name="Rectangle 5"
          // color="#29C1A2"
          color="white"
          config={config}
          position={[-458.87, 411.05, -435.92]}
        />
        <Shape
          name="Rectangle 4"
          // color="#FF9060"
          color="#ffffff"
          config={config}
          position={[0.66, 47, -435.92]}
        />
        <Shape
          name="Rectangle 3"
          // color="#823FFF"
          color="pink"
          config={config}
          position={[-348.74, -162.23, -167.36]}
        />
        <Shape
          name="Rectangle 2"
          // color="skyblue"
          color="#FF718F"
          config={config}
          position={[242.6, 207, -273.39]}
        />
      </group>
    </>
  );
}

function Shape({ name, float = 300, color, config, ...props }) {
  const { nodes } = useSpline("/shapes.splinecode");
  return (
    <Float floatIntensity={float} rotationIntensity={0} speed={2}>
      <mesh renderOrder={100} geometry={nodes[name].geometry} {...props}>
        <MeshTransmissionMaterial
          {...config}
          color={color}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}
