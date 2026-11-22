// src/routes/product.routes.js
import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
import {
  validateId,
  validateProduct,
  validateProductPatch
} from '../middlewares/validator.middleware.js';
// Création du routeur Express
const router = Router();
// Récupérer tous les produits
router.get('/', productController.getAll);
// Récupérer un produit par son identifiant
router.get('/:id', validateId, productController.getById);
// Créer un nouveau produit
router.post('/', validateProduct, productController.create);
// Mettre à jour complètement un produit
router.put('/:id', validateId, validateProduct, productController.update);
// Modifier partiellement un produit
router.patch('/:id', validateId, validateProductPatch, productController.patch);
// Supprimer un produit
router.delete('/:id', validateId, productController.remove);
// Exportation du routeur
export default router;