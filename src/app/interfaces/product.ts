export interface Product {
  id?: number;
  brand_id: number;
  measure_quantity: number;
  measure_scale: string;
  precio_actual?: number;
  margen_ganancia?: number;
  stock_blanco?: number;
  stock_negro?: number;
  id_category: number;
  provider_id: number;
}
