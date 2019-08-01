import Plan from '../../src/custom-types/plan';
import Tuple from 'immutable-tuple';
import { firstPointerTensor, secondPointerTensor } from './pointer-tensor';

export const simplifiedPlan = `
(18,
 (((6,
    (1,
     (6,
      ((6,
        ((5, (b'__add__',)),
         (19,
          (23885703668, 30300883787, 85156589176, None, (13, (2,)), False)),
         (6,
          ((19,
            (23885703668,
             30300883787,
             85156589176,
             None,
             (13, (2,)),
             False)),)),
         (0, ()))),
       (6, (53361601662,)))))),
   (6,
    (1,
     (6,
      ((6,
        ((5, (b'torch.abs',)),
         None,
         (6,
          ((19, (50671613206, 53361601662, 85156589176, None, None, True)),)),
         (0, ()))),
       (6, (68554228008,)))))),
   (6, (9, 53361601662))),
  85156589176,
  (1, (30300883787,)),
  (6, (68554228008,)),
  (5, (b'plan_double_abs',)),
  None,
  None,
  True))
`;

export const operations = [
  Tuple(
    1,
    Tuple(
      Tuple(
        '__add__',
        firstPointerTensor,
        Tuple(firstPointerTensor),
        new Map()
      ),
      Tuple(53361601662)
    )
  ),
  Tuple(
    1,
    Tuple(
      Tuple('torch.abs', null, Tuple(secondPointerTensor), new Map()),
      Tuple(68554228008)
    )
  ),
  Tuple(9, 53361601662)
];
export const id = 85156589176;
export const args = [30300883787];
export const results = Tuple(68554228008);
export const name = 'plan_double_abs';
export const tags = null;
export const description = null;
export const isBuilt = true;

export const detailedPlan = new Plan(
  operations,
  id,
  args,
  results,
  name,
  tags,
  description,
  isBuilt
);
