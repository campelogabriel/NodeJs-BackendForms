import * as Create from "./Create.js";
import * as GetById from "./GetById.js";
import * as DeleteById from "./DeleteById.js";

export const userController = {
  ...Create,
  ...GetById,
  ...DeleteById,
};
