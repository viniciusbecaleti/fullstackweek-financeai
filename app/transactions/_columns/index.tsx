"use client";

import DeleteTransactionDialog from "@/app/transactions/_components/delete-transaction-dialog";
import { Badge } from "@/app/_components/ui/badge";
import type { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";
import EditTransactionDialog from "../_components/edit-transaction-dialog";

const CATEGORY_MAP = {
  EDUCATION: "Educação",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilitário",
  OTHER: "Outro",
  ENTERTAINMENT: "Entretenimento",
};

const PAYMENT_METHOD_MAP = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  PIX: "PIX",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto",
  OTHER: "Outro",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === "INCOME") {
        return (
          <Badge className="bg-green-800/20 font-bold text-green-500 hover:bg-green-800/20">
            <CircleIcon className="mr-1 fill-green-500" size={10} />
            Entrada
          </Badge>
        );
      }

      if (transaction.type === "EXPENSE") {
        return (
          <Badge className="bg-red-800/20 font-bold text-red-500 hover:bg-red-800/20">
            <CircleIcon className="mr-1 fill-red-500" size={10} />
            Saída
          </Badge>
        );
      }

      if (transaction.type === "INVESTMENT") {
        return (
          <Badge className="bg-blue-800/20 font-bold text-blue-500 hover:bg-blue-800/20">
            <CircleIcon className="mr-1 fill-blue-500" size={10} />
            Investimento
          </Badge>
        );
      }
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      CATEGORY_MAP[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      PAYMENT_METHOD_MAP[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: transaction } }) => (
      <div className="space-x-1">
        <EditTransactionDialog transaction={transaction} />
        <DeleteTransactionDialog transaction={transaction} />
      </div>
    ),
  },
];
