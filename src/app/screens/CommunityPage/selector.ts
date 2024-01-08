import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../types/screen";

const selectCommunityPage = (state: AppRootState) => state.CommunityPage;
export const retriveTargetBoArticles = createSelector(
    selectCommunityPage,
    (CommunityPage) => CommunityPage.targetBoArticles
)