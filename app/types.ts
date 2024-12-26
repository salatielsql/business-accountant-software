export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
}

export interface Payment {
  id: number;
  description: string;
  amount: number;
  status: "Pending" | "Approved";
}

export interface Report {
  reportType: "expenses" | "payments";
  startDate: string;
  endDate: string;
  data: Expense[] | Payment[];
  groupedData?: {
    [category: string]: Expense[];
  };
  categoryTotals?: {
    category: string;
    total: number;
  }[];
}

export const ERROR_MESSAGES = {
  INVALID_AMOUNT: "Amount can't be less or equal to zero",
} as const;
