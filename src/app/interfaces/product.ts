export interface Product {
  id?: number;
  nombre: string;
  descripcion: string;
  precio_actual?: number;
  margen_ganancia?: number;
  stock?: number;
  id_categoria?: number;
}
