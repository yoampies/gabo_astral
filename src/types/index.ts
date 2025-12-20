import { SkinnedMesh } from 'three';
import { Group } from 'three';
import * as THREE from 'three';

export interface IMajorArcanaCard {
  name: string;
  image: string;
}

export interface INavLinks {
  id: number;
  name: string;
  href: string;
}

export interface IReviewInfo {
  id: number;
  img: string;
  name: string;
  date: string;
  comment: string;
}

export interface ISlidesInfo {
  title: string;
  text: string;
  image: string;
}

export interface IAstrologyInfo {
  title: string;
  text: string;
  image: string;
}

export interface ITarotCards extends IMajorArcanaCard {
  id: number;
  flipped: boolean;
  isReversed: boolean;
}

export interface ICardProps {
  onClick: (card: ITarotCards) => void;
  card: ITarotCards;
  isFlipped: boolean;
  isReversed: boolean;
}

export interface IFormData {
  name: string;
  email: string;
  service: string;
  comment: string;
  phone: string;
}

export interface IModelCameraProps {
  isMobile: boolean;
  children: React.ReactNode;
}

export interface IAvatarProps {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

export interface IModelProps {
  scale: number;
  position: [number, number, number];
}

export interface IAvatarNodes {
  EyeLeft: SkinnedMesh;
  EyeRight: SkinnedMesh;
  Wolf3D_Head: SkinnedMesh;
  Wolf3D_Teeth: SkinnedMesh;
  Wolf3D_Outfit_Top: SkinnedMesh;
  Wolf3D_Outfit_Bottom: SkinnedMesh;
  Wolf3D_Outfit_Footwear: SkinnedMesh;
  Wolf3D_Body: SkinnedMesh;
  Hips: Group;
}

export type GLTFResult = {
  nodes: IAvatarNodes;
  materials: Record<string, THREE.Material>;
  animations: THREE.AnimationClip[];
  scene: THREE.Group;
  cameras: THREE.Camera[];
  asset: { version: string };
};

export interface IModelNodes {
  [key: string]: THREE.Mesh | THREE.Bone;
  _rootJoint: THREE.Bone;
  hat_hat_maps_0: THREE.Mesh;
}

export interface IStarProps {
  position: [number, number, number];
}

export interface IStarIntersectionManagerProps {
  starPositions: [number, number, number][];
}

export type TarotStatus = 'SHUFFLING' | 'SELECTING' | 'RESULT';

export interface ITarotState {
  status: TarotStatus;
}

export type TarotAction =
  | { type: 'START_SELECTION' }
  | { type: 'SHOW_RESULT' }
  | { type: 'RESET_GAME' };

export interface ITarotState {
  status: 'SHUFFLING' | 'SELECTING' | 'RESULT';
}

export interface IArticleDetails {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  content: string;
}
