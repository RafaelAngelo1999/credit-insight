"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddCreditDialog } from "./AddCreditDialog";

type Credit = {
  id: string;
  name: string;
  amount: number;
};

export function CreditList() {
  const [credits, setCredits] = useState<Credit[]>([
    { id: "1", name: "Crédito A", amount: 100 },
    { id: "2", name: "Crédito B", amount: 200 },
  ]);

  const handleAddCredit = (newCredit: Credit) => {
    setCredits((prev) => [...prev, newCredit]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Listagem de Créditos</h2>
        <AddCreditDialog onAdd={handleAddCredit} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {credits.map((credit) => (
            <TableRow key={credit.id}>
              <TableCell>{credit.id}</TableCell>
              <TableCell>{credit.name}</TableCell>
              <TableCell>R$ {credit.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
