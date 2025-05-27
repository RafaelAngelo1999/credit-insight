import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 as uuidv4 } from "uuid";
import InputMask from "react-input-mask";

type AddCreditDialogProps = {
  onAdd: (credit: any) => void;
};

export function AddCreditDialog({ onAdd }: AddCreditDialogProps) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [renda, setRenda] = useState("");
  const [valor, setValor] = useState("");
  const [prazo, setPrazo] = useState("");

  const handleSubmit = () => {
    if (!nome || !sobrenome || !cpf || !telefone || !renda || !valor || !prazo)
      return;

    onAdd({
      id: uuidv4(),
      nome,
      sobrenome,
      cpf,
      telefone,
      renda: parseFloat(renda),
      valor: parseFloat(valor),
      prazo: parseInt(prazo),
    });

    // Resetar campos
    setNome("");
    setSobrenome("");
    setCpf("");
    setTelefone("");
    setRenda("");
    setValor("");
    setPrazo("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Crédito</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Crédito</DialogTitle>
          <DialogDescription>Preencha os dados do crédito.</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: João"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sobrenome">Sobrenome</Label>
            <Input
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Ex: Silva"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            >
              {(inputProps) => (
                <Input {...inputProps} id="cpf" placeholder="000.000.000-00" />
              )}
            </InputMask>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <InputMask
              mask="(99) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            >
              {(inputProps) => (
                <Input
                  {...inputProps}
                  id="telefone"
                  placeholder="(00) 00000-0000"
                />
              )}
            </InputMask>
          </div>

          <div className="space-y-2">
            <Label htmlFor="renda">Renda (R$)</Label>
            <Input
              id="renda"
              type="number"
              value={renda}
              onChange={(e) => setRenda(e.target.value)}
              placeholder="Ex: 5000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="valor">Valor do Crédito (R$)</Label>
            <Input
              id="valor"
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Ex: 10000"
            />
          </div>

          <div className="space-y-2 col-span-2">
            <Label htmlFor="prazo">Prazo (em meses)</Label>
            <Select value={prazo} onValueChange={setPrazo}>
              <SelectTrigger id="prazo">
                <SelectValue placeholder="Selecione o prazo" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => i + 1).map((mes) => (
                  <SelectItem key={mes} value={String(mes)}>
                    {mes} {mes === 1 ? "mês" : "meses"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full mt-4" onClick={handleSubmit}>
          Adicionar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
