import { Router } from 'express';
import controller from "./controller.js";

const { post, get, put, delete: remove } = controller;
const Sweetrouter = new Router();

Sweetrouter.post( '/sweets_create', post);
Sweetrouter.get( '/sweets', get);
Sweetrouter.put( '/sweets', put);
Sweetrouter.delete('/sweets_delete/:id', remove);

export default Sweetrouter;