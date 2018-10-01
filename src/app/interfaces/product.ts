export interface Product {
  id?: number;
  brand_id: number;
  category_id: number;
  provider_id: number;
  measure_quantity: number;
  measure_scale: string;
  measure_combined?: string;
  precio_actual?: number;
  margen_ganancia?: number;
  stock_blanco?: number;
  stock_negro?: number;
  brand?: any;
  category?: any;
  provider?: any;
}
