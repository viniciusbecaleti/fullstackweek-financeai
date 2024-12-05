import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="px-4 lg:px-28 lg:py-12">
        <div className="mx-auto flex h-full max-w-[488px] flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <Image src="/logo.svg" alt="finance.ai" width={173} height={39} />
          <h1 className="mb-3 mt-8 text-4xl font-bold">Bem-vindo</h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <Button variant="outline" className="mt-8 w-full">
            <LogInIcon className="mr-2" />
            Entrar ou cadastrar-se
          </Button>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
}
