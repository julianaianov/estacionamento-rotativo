"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

interface ClienteForm {
  tipoPessoa: "cpf" | "cnpj";
  nome: string;
  documento: string;
  email: string;
  telefone: string;
  placas: { placa: string }[];
}

export default function NovoClientePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token when component mounts
    fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    }).then(() => {
      // Get the token from the cookie
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1];
      if (token) {
        setCsrfToken(decodeURIComponent(token));
      }
    });
  }, []);

  const { register, handleSubmit, control, formState: { errors } } = useForm<ClienteForm>({
    defaultValues: {
      tipoPessoa: "cpf",
      placas: [{ placa: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "placas",
  });

  const onSubmit = async (data: ClienteForm) => {
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("http://localhost:8000/api/clientes", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": csrfToken,
          "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          nome: data.nome,
          documento: data.documento,
          tipo_pessoa: data.tipoPessoa,
          email: data.email,
          telefone: data.telefone,
          placas: data.placas.map(p => p.placa),
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Erro ao salvar cliente");
      }
      
      setSuccess(true);
      setTimeout(() => router.push("/cadastros/clientes"), 1200);
    } catch (e: any) {
      setError(e.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Cadastro de Novo Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">Nome completo / Razão social</label>
                <Input {...register("nome", { required: "Campo obrigatório" })} />
                {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
              </div>
            </div>
            <div className="flex gap-4 items-end">
              <div>
                <label className="block font-medium mb-1">Tipo</label>
                <RadioGroup defaultValue="cpf" className="flex gap-4" {...register("tipoPessoa") }>
                  <RadioGroupItem value="cpf" id="cpf" {...register("tipoPessoa")}/>
                  <label htmlFor="cpf">CPF</label>
                  <RadioGroupItem value="cnpj" id="cnpj" {...register("tipoPessoa")}/>
                  <label htmlFor="cnpj">CNPJ</label>
                </RadioGroup>
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1">CPF/CNPJ</label>
                <Input {...register("documento", { required: "Campo obrigatório" })} />
                {errors.documento && <span className="text-red-500 text-xs">{errors.documento.message}</span>}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">E-mail</label>
                <Input type="email" {...register("email", { required: "Campo obrigatório" })} />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-1">Telefone</label>
                <Input {...register("telefone", { required: "Campo obrigatório" })} />
                {errors.telefone && <span className="text-red-500 text-xs">{errors.telefone.message}</span>}
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Placas do veículo</label>
              {fields.map((field, idx) => (
                <div key={field.id} className="flex gap-2 mb-2 items-center">
                  <Input {...register(`placas.${idx}.placa`, { required: "Campo obrigatório" })} placeholder="Digite a placa" />
                  {fields.length > 1 && (
                    <Button type="button" variant="destructive" size="sm" onClick={() => remove(idx)}>-</Button>
                  )}
                  {idx === fields.length - 1 && (
                    <Button type="button" size="sm" onClick={() => append({ placa: "" })}>+</Button>
                  )}
                </div>
              ))}
              {errors.placas && <span className="text-red-500 text-xs">Placa obrigatória</span>}
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-green-600 text-sm">Cliente cadastrado com sucesso!</div>}
            <div className="flex gap-4 justify-end">
              <Button type="button" variant="secondary" onClick={() => router.push("/cadastros/clientes")}>Cancelar</Button>
              <Button type="submit">Salvar</Button>            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
} 
