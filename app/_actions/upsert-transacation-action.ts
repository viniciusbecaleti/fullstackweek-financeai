"use server";

import {
  Prisma,
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";
import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const transactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
});

export async function upsertTransactionAction(
  data: Omit<Prisma.TransactionCreateInput, "userId">,
) {
  const transaction = transactionSchema.safeParse(data);

  if (!transaction.success) {
    throw new Error("Invalid transaction data");
  }

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  await db.transaction.upsert({
    where: {
      id: data.id || "",
      userId,
    },
    create: {
      ...data,
      userId,
    },
    update: data,
  });

  revalidatePath("/transactions");
}
