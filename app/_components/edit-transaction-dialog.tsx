"use client";

import { PencilIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

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
