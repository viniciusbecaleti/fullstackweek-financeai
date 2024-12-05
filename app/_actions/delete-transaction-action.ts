"use server";

import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteTransactionAction(transactionId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  await db.transaction.delete({
    where: {
      id: transactionId,
      userId,
    },
  });

  revalidatePath("/transactions");
}
