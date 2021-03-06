import {box} from '../../../brep/brep-primitives'
import {BREPSceneSolid} from '../../scene/wrappers/brepSceneObject';
import {createPreviewer} from "../../preview/scenePreviewer";
import {createBoxGeometry} from "scene/geoms";

const METADATA = [
  ['width'   , 'number',  500,  {min: 0}],
  ['height'  , 'number',  500,  {min: 0}],
  ['depth'   , 'number',  500,  {min: 0}]
];

function createBox({width, height, depth}) {
  return {
    outdated: [],
    created: [new BREPSceneSolid(box(width, height, depth))]
  }
}

export default {
  id: 'BOX',
  metadata: METADATA,
  label: 'Box',
  icon: 'img/cad/cube',
  info: 'creates new object box',
  paramsInfo: ({width, height, depth}) => `(${width}, ${height}, ${depth})`,
  previewGeomProvider: ({width, height, depth}) => createBoxGeometry(width, height, depth),
  run: createBox
};

