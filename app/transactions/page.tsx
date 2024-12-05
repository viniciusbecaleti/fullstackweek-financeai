import { auth } from "@clerk/nextjs/server";
import { db } from "../_lib/prisma";
import { redirect } from "next/navigation";
import { Button } from "../_components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

export default async function TransactionsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <PlusCircleIcon />
        </Button>
      </div>
      <div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
}
