export interface NodeModel {
  id: number;
  label: string;
  path: string;
  icon: string;
  role: string;
  children: NodeModel[];
  isVisible: boolean;
}
