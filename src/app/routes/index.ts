import { Router } from "express";
import { productRoutes } from "../modules/product/product.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
