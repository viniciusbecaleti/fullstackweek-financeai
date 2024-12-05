"use client";

import { PencilIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import { useState } from "react";
import { Transaction } from "@prisma/client";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";

interface EditTransactionDialogProps {
  transaction: Transaction;
}

export default function EditTransactionDialog({
  transaction,
}: EditTransactionDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function toggleDialog(isOpen: boolean) {
    setIsDialogOpen(isOpen);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <PencilIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar transação</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>
        <UpsertTransactionDialog
          handleToggleDialog={toggleDialog}
          transaction={transaction}
        />
      </DialogContent>
    </Dialog>
  );
}
