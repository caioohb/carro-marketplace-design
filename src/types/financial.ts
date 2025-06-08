export type TransactionType = "RECEITA" | "DESPESA";

export type TransactionStatus = "PENDENTE" | "PAGO" | "CANCELADO";

export interface FinancialTransaction {
  id: string;
  type: TransactionType;
  date: Date;
  category: string;
  value: number;
  paymentMethod: string;
  description: string;
  registeredBy: string;
  relatedTo?: string;
  documentUrl?: string;
  status: TransactionStatus;
  createdAt: Date;
  updatedAt: Date;
} 