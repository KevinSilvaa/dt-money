// Strategic Imports
import { ReactNode, createContext, useState, useEffect } from "react";

interface TransactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionProps[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function transactionsList() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  }

  useEffect(() => {
    transactionsList();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
