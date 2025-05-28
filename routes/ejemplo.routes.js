import { Router } from "express";
import {
    getAllEjemplos,
    getEjemploById,
    postEjemplo,
    putEjemplo,
    deleteEjemplo
}from '../controllers/ejemplo.controllers.js';
const ejemplo = Router ();

ejemplo.get('/',getAllEjemplos);

ejemplo.get('/:id', getEjemploById);

ejemplo.put('/', putEjemplo);


ejemplo.post('/', postEjemplo);

ejemplo.delete('/:id',deleteEjemplo);

export default ejemplo;