"use server";

import { AddTransactionFormValues } from "./_components/add-transaction-button";

export async function addNewTransactionAction(data: AddTransactionFormValues) {
  console.log(data);
}
