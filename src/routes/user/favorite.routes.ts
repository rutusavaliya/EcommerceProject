import express from "express";
const FavoriteRoutes = express.Router();
import {userVerifyToken} from "../../helpers/user.token";

import { addNewFavorite,  deleteFavorite, getAllFavorite } from "../../controller/user/favorite.contoller";

// ADD NEW FAVORITE
FavoriteRoutes.post('/add-New-Favorite' , userVerifyToken ,  addNewFavorite);

// GET ALL FAVORITE
FavoriteRoutes.get('/get-All-Favorite', userVerifyToken, getAllFavorite);

// DELETE FAVORITE
FavoriteRoutes.delete('/delete-Favorite' , userVerifyToken , deleteFavorite);

export default FavoriteRoutes;