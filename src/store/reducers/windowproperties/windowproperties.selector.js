import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectWindowProperties = (state) => state.windowproperties

export const selectWindowWidth = createDraftSafeSelector(selectWindowProperties,
                                (windowstate) => windowstate.width)