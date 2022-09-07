export interface Response {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: Data[];
}

interface Data {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AssignedToData[];
  status: string;
  priority: string;
}

interface AssignedToData {
  person_name: string;
  status: string;
}
