"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  renda: number;
  valor: number;
  prazo: number;
};

export function CreditList() {
  const [credits, setCredits] = useState<Credit[]>([
    {
      id: "1",
      nome: "João",
      sobrenome: "Silva",
      cpf: "123.456.789-00",
      telefone: "(11) 91234-5678",
      renda: 5000,
      valor: 10000,
      prazo: 12,
    },
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
            <TableHead>Nome</TableHead>
            <TableHead>Sobrenome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Renda (R$)</TableHead>
            <TableHead>Valor (R$)</TableHead>
            <TableHead>Prazo (meses)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {credits.map((credit) => (
            <TableRow key={credit.id}>
              <TableCell>{credit.nome}</TableCell>
              <TableCell>{credit.sobrenome}</TableCell>
              <TableCell>{credit.cpf}</TableCell>
              <TableCell>{credit.telefone}</TableCell>
              <TableCell>R$ {credit.renda.toLocaleString("pt-BR")}</TableCell>
              <TableCell>R$ {credit.valor.toLocaleString("pt-BR")}</TableCell>
              <TableCell>{credit.prazo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
