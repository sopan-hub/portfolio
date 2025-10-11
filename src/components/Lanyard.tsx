'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import { useControls } from 'leva';

extend({ MeshLineGeometry, MeshLineMaterial });

useGLTF.preload('https://raw.githubusercontent.com/sopan-hub/my-image-assets/11ba8596660b379d71c463fbd0393b490f23f811/lanyard.gltf');
useTexture.preload('https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png');

export function Lanyard(props: any) {
  return (
    <div {...props}>
      <Suspense fallback={<div className="h-full" />}>
        <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
          <ambientLight intensity={Math.PI} />
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <group rotation={[Math.PI / 2, 1, 0]}>
              {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
                <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
              ))}
              <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
              <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
              <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
            </group>
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<any>(),
    fixed = useRef<any>(),
    j1 = useRef<any>(),
    j2 = useRef<any>(),
    j3 = useRef<any>(),
    card = useRef<any>();

  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  } as const;

  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/sopan-hub/my-image-assets/11ba8596660b379d71c463fbd0393b490f23f811/lanyard.gltf') as any;
  const texture = useTexture('https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png') as any;
  const { width, height } = useTexture('https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png');

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useFrame((state, delta) => {
    if (fixed.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      ang.fromArray(fixed.current.angularVelocity());
      rot.fromArray(fixed.current.rotation());
      fixed.current.setAngvel({ x: ang.x + (rot.x - vec.x) * 20, y: ang.y + (rot.y - vec.y) * 20, z: ang.z }, true);
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="kinematicPosition" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type="dynamic">
          <CuboidCollider args={[0.8, 1.1, 0.01]} />
          <CuboidCollider args={[0.9, 1.2, 0.2]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={texture} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-color="white" />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
    </>
  );
}
