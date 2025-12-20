import React from 'react';
import { useGLTF } from '@react-three/drei';
import { IModelProps, GLTFResult, IModelNodes } from '../types';
import { Mesh } from 'three';
import * as THREE from 'three';

const MODEL_PATH = '/models/scene.glb';

const Model: React.FC<IModelProps> = (props) => {
  const gltf = useGLTF(MODEL_PATH, true) as unknown as GLTFResult;

  const { nodes, materials } = gltf;
  const typedNodes = nodes as unknown as IModelNodes;
  const typedMaterials = materials as Record<string, THREE.Material>;

  return (
    <group {...props} dispose={null}>
      <group
        position={[27.796, -36.44, 5.124]}
        rotation={[0.049, -0.085, 0.005]}
        scale={1.757}
      >
        <primitive object={typedNodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.hat_hat_maps_0 as Mesh).geometry}
          material={typedMaterials.hat_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.feather_2_feathers_maps_0 as Mesh).geometry}
          material={typedMaterials.feathers_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.feather_1_feathers_maps_0 as Mesh).geometry}
          material={typedMaterials.feathers_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand4_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand6_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand15_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand2_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand1_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand26_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand36_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand24_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand25_Hair_3_0 as Mesh).geometry}
          material={typedMaterials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand5_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand7_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand8_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand9_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand10_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand11_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand13_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand14_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand16_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand22_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand28_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand29_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand30_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand31_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand32_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand33_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand34_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand35_Hair_4_0 as Mesh).geometry}
          material={typedMaterials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand3_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand12_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand17_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand18_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand19_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand20_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand21_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand23_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand27_Hair_5_0 as Mesh).geometry}
          material={typedMaterials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand47_Hair_1_0 as Mesh).geometry}
          material={typedMaterials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand44_Hair_1_0 as Mesh).geometry}
          material={typedMaterials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand46_Hair_1_0 as Mesh).geometry}
          material={typedMaterials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand43_Hair_1_0 as Mesh).geometry}
          material={typedMaterials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand45_Hair_1_0 as Mesh).geometry}
          material={typedMaterials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand48_Hair_1_0 as Mesh).geometry}
          material={typedMaterials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand38_Hair_2_0 as Mesh).geometry}
          material={typedMaterials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand40_Hair_2_0 as Mesh).geometry}
          material={typedMaterials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand39_Hair_2_0 as Mesh).geometry}
          material={typedMaterials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand41_Hair_2_0 as Mesh).geometry}
          material={typedMaterials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand37_Hair_2_0 as Mesh).geometry}
          material={typedMaterials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.strand42_Hair_2_0 as Mesh).geometry}
          material={typedMaterials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.brooch_brooch_maps_0 as Mesh).geometry}
          material={typedMaterials.brooch_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.scarf_scarf_maps_0 as Mesh).geometry}
          material={typedMaterials.scarf_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (typedNodes.shoe_stocking_shoe_stocking1_0 as Mesh).geometry
          }
          material={typedMaterials.shoe_stocking1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.shoes_shoes1_0 as Mesh).geometry}
          material={typedMaterials.shoes1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.corneas_Corneas_0 as Mesh).geometry}
          material={typedMaterials.Corneas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.eyeballs_SUBS_iris_0 as Mesh).geometry}
          material={typedMaterials.SUBS_iris}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.longue_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.gums_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar4_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar1_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar2_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar3_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth3_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth4_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth5_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar5_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar6_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar7_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar8_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar9_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth6_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar10_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth7_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth8_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth9_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.gums1_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth1_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar41_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar1_face_HAND_PAINT_0_1 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar11_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar21_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar31_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth31_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth41_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth51_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar51_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar61_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar71_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar81_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar91_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth61_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.molar101_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth71_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth81_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.tooth91_face_HAND_PAINT_0 as Mesh).geometry}
          material={typedMaterials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.eyebrows_SUBS_eyelashes_0 as Mesh).geometry}
          material={typedMaterials.SUBS_eyelashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (typedNodes.lower_eyelash_SUBS_eyelashes_0 as Mesh).geometry
          }
          material={typedMaterials.SUBS_eyelashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (typedNodes.upper_eyelashes_SUBS_eyelashes_0 as Mesh).geometry
          }
          material={typedMaterials.SUBS_eyelashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.mask_mask_maps_0 as Mesh).geometry}
          material={typedMaterials.mask_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.vest1_vest_maps_0 as Mesh).geometry}
          material={typedMaterials.vest_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.button5_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.button4_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.button3_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.button2_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.button_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.button1_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade5_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade5_grenade_puch_0 as Mesh).geometry}
          material={typedMaterials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade_grenade_puch_0 as Mesh).geometry}
          material={typedMaterials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade1_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade1_grenade_puch_0 as Mesh).geometry}
          material={typedMaterials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade2_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade2_grenade_puch_0 as Mesh).geometry}
          material={typedMaterials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade3_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade3_grenade_puch_0 as Mesh).geometry}
          material={typedMaterials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade4_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade4_grenade_puch_0 as Mesh).geometry}
          material={typedMaterials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.grenade4_Card_0 as Mesh).geometry}
          material={typedMaterials.Card}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.pin1_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.buckle_buckle1_0 as Mesh).geometry}
          material={typedMaterials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.belt_belt_maps_0 as Mesh).geometry}
          material={typedMaterials.belt_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.pin2_buttons_0 as Mesh).geometry}
          material={typedMaterials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.puff_shorts_shorts_maps_0 as Mesh).geometry}
          material={typedMaterials.shorts_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.oR_topoogy_Body_maps_0 as Mesh).geometry}
          material={typedMaterials.Body_maps}
          position={[-0.256, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(typedNodes.blouse_Blouse_maps_0 as Mesh).geometry}
          material={typedMaterials.Blouse_maps}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.throne_crown_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.L_side_throne_throne_cushion_0 as Mesh).geometry}
        material={typedMaterials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.L_side_throne_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.R_side_throne1_throne_cushion_0 as Mesh).geometry}
        material={typedMaterials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.R_side_throne1_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.Back_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.armrest_throne_throne_cushion_0 as Mesh).geometry}
        material={typedMaterials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.base_throne_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (typedNodes.R_heart_stocking_Throne_handles_0 as Mesh).geometry
        }
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (typedNodes.L_heart_stocking_Throne_handles_0 as Mesh).geometry
        }
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.leg_trhone3_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.leg_trhone_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.leg_trhone1_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.leg_trhone2_Throne_handles_0 as Mesh).geometry}
        material={typedMaterials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (typedNodes.back_cushion_throne_throne_cushion_0 as Mesh).geometry
        }
        material={typedMaterials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.seat_throne_throne_cushion_0 as Mesh).geometry}
        material={typedMaterials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.type_card_number_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.Card_curve_SUBS_box_set_0 as Mesh).geometry}
        material={typedMaterials.SUBS_box_set}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.card_frame_SUBS_box_set_0 as Mesh).geometry}
        material={typedMaterials.SUBS_box_set}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.teacup_hanlde_Teacup_0 as Mesh).geometry}
        material={typedMaterials.Teacup}
        position={[20.23, 0, 19.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.tea_plate_Teacup_0 as Mesh).geometry}
        material={typedMaterials.Teacup}
        position={[20.23, 0, 19.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.teacup_Teacup_0 as Mesh).geometry}
        material={typedMaterials.Teacup}
        position={[20.23, 0, 19.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.interior_box_SUBS_box_set_0 as Mesh).geometry}
        material={typedMaterials.SUBS_box_set}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.interior_box_non_visible_0 as Mesh).geometry}
        material={typedMaterials.non_visible}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.Diorama_front_non_visible_0 as Mesh).geometry}
        material={typedMaterials.non_visible}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.axe_blade2_Axe_blade_0 as Mesh).geometry}
        material={typedMaterials.Axe_blade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.axe_core_head_axe_handle1_0 as Mesh).geometry}
        material={typedMaterials.axe_handle1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.axe_blade1_Axe_blade_0 as Mesh).geometry}
        material={typedMaterials.Axe_blade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.axe_handle_axe_handle1_0 as Mesh).geometry}
        material={typedMaterials.axe_handle1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.stitches_lambert1_0 as Mesh).geometry}
        material={typedMaterials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.R_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.T_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.C_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.A_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.M_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.I_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.L_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.P_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.apostrhophe_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.E_Typography_0 as Mesh).geometry}
        material={typedMaterials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.maple_leaf2_maple_leaves1_0 as Mesh).geometry}
        material={typedMaterials.maple_leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.maple_leaf1_maple_leaves1_0 as Mesh).geometry}
        material={typedMaterials.maple_leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.maple_leaf_maple_leaves1_0 as Mesh).geometry}
        material={typedMaterials.maple_leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.heart_leaf1_Heart_leaves_0 as Mesh).geometry}
        material={typedMaterials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.stem_1_Heart_leaves_0 as Mesh).geometry}
        material={typedMaterials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.heart_leaf2_Heart_leaves_0 as Mesh).geometry}
        material={typedMaterials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.stem_2_Heart_leaves_0 as Mesh).geometry}
        material={typedMaterials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.leaf_2_Leaves1_0 as Mesh).geometry}
        material={typedMaterials.Leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.leaf_1_Leaves1_0 as Mesh).geometry}
        material={typedMaterials.Leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.treee1_trees1_0 as Mesh).geometry}
        material={typedMaterials.trees1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.tree_2_trees1_0 as Mesh).geometry}
        material={typedMaterials.trees1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(typedNodes.tree3_trees1_0 as Mesh).geometry}
        material={typedMaterials.trees1}
      />
    </group>
  );
};

useGLTF.preload(MODEL_PATH, true);

export default Model;
