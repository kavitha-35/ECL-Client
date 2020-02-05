export interface EquipmentModel {
  brand: BrandModel;
  equipmentId: string;
  equipmentName: string;
  model: string;
  serial: string;
  keyValue: string;
}

interface BrandModel {
  brandId: string;
  brandName: string;
}
