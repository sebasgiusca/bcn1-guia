/* Guia BCN1 - configuracion. Sin secretos: la guia solo LEE de Firebase (las reglas lo garantizan). */
const TOMYARD_URL = 'https://tom-yard-default-rtdb.europe-west1.firebasedatabase.app';
const ACRED_MAX_MS = 24 * 60 * 60 * 1000;
const POLL_TOMYARD_MS = 15000;   // cada cuanto se consulta el estado del camion
const POLL_PRESENCIA_MS = 30000; // latido de presencia al panel
