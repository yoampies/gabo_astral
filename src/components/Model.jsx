import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import scene from '../assets/models/scene.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(scene)
  return (
    <group {...props} dispose={null}>
      <group position={[27.796, -36.44, 5.124]} rotation={[0.049, -0.085, 0.005]} scale={1.757}>
        <primitive object={nodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hat_hat_maps_0.geometry}
          material={materials.hat_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.feather_2_feathers_maps_0.geometry}
          material={materials.feathers_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.feather_1_feathers_maps_0.geometry}
          material={materials.feathers_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand4_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand6_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand15_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand2_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand1_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand26_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand36_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand24_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand25_Hair_3_0.geometry}
          material={materials.Hair_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand5_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand7_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand8_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand9_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand10_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand11_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand13_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand14_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand16_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand22_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand28_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand29_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand30_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand31_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand32_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand33_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand34_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand35_Hair_4_0.geometry}
          material={materials.Hair_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand3_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand12_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand17_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand18_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand19_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand20_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand21_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand23_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand27_Hair_5_0.geometry}
          material={materials.Hair_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand47_Hair_1_0.geometry}
          material={materials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand44_Hair_1_0.geometry}
          material={materials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand46_Hair_1_0.geometry}
          material={materials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand43_Hair_1_0.geometry}
          material={materials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand45_Hair_1_0.geometry}
          material={materials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand48_Hair_1_0.geometry}
          material={materials.Hair_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand38_Hair_2_0.geometry}
          material={materials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand40_Hair_2_0.geometry}
          material={materials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand39_Hair_2_0.geometry}
          material={materials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand41_Hair_2_0.geometry}
          material={materials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand37_Hair_2_0.geometry}
          material={materials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strand42_Hair_2_0.geometry}
          material={materials.Hair_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.brooch_brooch_maps_0.geometry}
          material={materials.brooch_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scarf_scarf_maps_0.geometry}
          material={materials.scarf_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoe_stocking_shoe_stocking1_0.geometry}
          material={materials.shoe_stocking1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes_shoes1_0.geometry}
          material={materials.shoes1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corneas_Corneas_0.geometry}
          material={materials.Corneas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyeballs_SUBS_iris_0.geometry}
          material={materials.SUBS_iris}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.longue_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gums_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar4_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar1_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar2_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar3_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth3_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth4_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth5_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar5_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar6_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar7_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar8_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar9_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth6_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar10_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth7_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth8_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth9_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gums1_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth1_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar41_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar1_face_HAND_PAINT_0_1.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar11_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar21_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar31_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth31_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth41_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth51_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar51_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar61_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar71_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar81_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar91_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth61_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.molar101_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth71_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth81_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tooth91_face_HAND_PAINT_0.geometry}
          material={materials.face_HAND_PAINT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyebrows_SUBS_eyelashes_0.geometry}
          material={materials.SUBS_eyelashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lower_eyelash_SUBS_eyelashes_0.geometry}
          material={materials.SUBS_eyelashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.upper_eyelashes_SUBS_eyelashes_0.geometry}
          material={materials.SUBS_eyelashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mask_mask_maps_0.geometry}
          material={materials.mask_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vest1_vest_maps_0.geometry}
          material={materials.vest_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button5_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button4_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button3_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button2_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button1_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade5_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade5_grenade_puch_0.geometry}
          material={materials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade_grenade_puch_0.geometry}
          material={materials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade1_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade1_grenade_puch_0.geometry}
          material={materials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade2_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade2_grenade_puch_0.geometry}
          material={materials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade3_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade3_grenade_puch_0.geometry}
          material={materials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade4_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade4_grenade_puch_0.geometry}
          material={materials.grenade_puch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grenade4_Card_0.geometry}
          material={materials.Card}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pin1_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buckle_buckle1_0.geometry}
          material={materials.buckle1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.belt_belt_maps_0.geometry}
          material={materials.belt_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pin2_buttons_0.geometry}
          material={materials.buttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.puff_shorts_shorts_maps_0.geometry}
          material={materials.shorts_maps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.oR_topoogy_Body_maps_0.geometry}
          material={materials.Body_maps}
          position={[-0.256, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.blouse_Blouse_maps_0.geometry}
          material={materials.Blouse_maps}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.throne_crown_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_side_throne_throne_cushion_0.geometry}
        material={materials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_side_throne_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_side_throne1_throne_cushion_0.geometry}
        material={materials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_side_throne1_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.armrest_throne_throne_cushion_0.geometry}
        material={materials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_throne_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_heart_stocking_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_heart_stocking_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg_trhone3_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg_trhone_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg_trhone1_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg_trhone2_Throne_handles_0.geometry}
        material={materials.Throne_handles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_cushion_throne_throne_cushion_0.geometry}
        material={materials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.seat_throne_throne_cushion_0.geometry}
        material={materials.throne_cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.type_card_number_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_curve_SUBS_box_set_0.geometry}
        material={materials.SUBS_box_set}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.card_frame_SUBS_box_set_0.geometry}
        material={materials.SUBS_box_set}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.teacup_hanlde_Teacup_0.geometry}
        material={materials.Teacup}
        position={[20.23, 0, 19.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tea_plate_Teacup_0.geometry}
        material={materials.Teacup}
        position={[20.23, 0, 19.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.teacup_Teacup_0.geometry}
        material={materials.Teacup}
        position={[20.23, 0, 19.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior_box_SUBS_box_set_0.geometry}
        material={materials.SUBS_box_set}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior_box_non_visible_0.geometry}
        material={materials.non_visible}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diorama_front_non_visible_0.geometry}
        material={materials.non_visible}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.axe_blade2_Axe_blade_0.geometry}
        material={materials.Axe_blade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.axe_core_head_axe_handle1_0.geometry}
        material={materials.axe_handle1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.axe_blade1_Axe_blade_0.geometry}
        material={materials.Axe_blade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.axe_handle_axe_handle1_0.geometry}
        material={materials.axe_handle1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitches_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.C_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.I_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.P_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apostrhophe_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.E_Typography_0.geometry}
        material={materials.Typography}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maple_leaf2_maple_leaves1_0.geometry}
        material={materials.maple_leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maple_leaf1_maple_leaves1_0.geometry}
        material={materials.maple_leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maple_leaf_maple_leaves1_0.geometry}
        material={materials.maple_leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heart_leaf1_Heart_leaves_0.geometry}
        material={materials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stem_1_Heart_leaves_0.geometry}
        material={materials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heart_leaf2_Heart_leaves_0.geometry}
        material={materials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stem_2_Heart_leaves_0.geometry}
        material={materials.Heart_leaves}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf_2_Leaves1_0.geometry}
        material={materials.Leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf_1_Leaves1_0.geometry}
        material={materials.Leaves1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treee1_trees1_0.geometry}
        material={materials.trees1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree_2_trees1_0.geometry}
        material={materials.trees1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree3_trees1_0.geometry}
        material={materials.trees1}
      />
    </group>
  )
}

useGLTF.preload(scene)