"use client";

import { TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../_components/ui/dialog";
import { Button } from "../../_components/ui/button";
import { useState } from "react";
import { Transaction } from "@prisma/client";
import { deleteTransactionAction } from "../../_actions/delete-transaction-action";

interface EditTransactionDialogProps {
  transaction: Transaction;
}

export default function DeleteTransactionDialog({
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
          <TrashIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza?</DialogTitle>
          <DialogDescription>
            Após deletar, não será possível recuperar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="ghost"
              onClick={() => toggleDialog(false)}
              className="text-muted-foreground"
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => {
              deleteTransactionAction(transaction.id);
              toggleDialog(false);
            }}
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
