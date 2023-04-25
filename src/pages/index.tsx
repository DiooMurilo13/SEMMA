import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ComboButton } from "@/components/ComboBox";

export default function Home() {
  return (
    <div className="flex w-screen h-screen flex-col text-gray-100 font-bold">
      <div className="sm2:h-1/5 flex  bg-myGreen  items-end justify-start">
        <div className="flex flex-col p-4 ">
          <div className="text-3xl">SEMMA</div>
          <div className="text-sm">Secretaria Municipal Meio Ambiente</div>
        </div>
      </div>
      <div className="sm2:h-full bg-gray-100 flex flex-col gap-9">
        <div className="flex flex-col text-black gap-5 items-center">
          <div className="flex-1">
            <div className="pl-10 pt-9 text-3xl">A coleta seletiva mudou!</div>
            <Card />
          </div>
        </div>
        <div className="flex flex-col text-black gap-5 items-center ">
          <div className="flex-1 flex-col">
            <div className="text-xl justify-start items-start text-start">
              <div className="pl-10 text-xl">Bairro</div>
            </div>
            <ComboButton />
          </div>
          <div className="mx-10">
            <Button>Quero ser notificado!</Button>
          </div>
        </div>
      </div>
      <div className="sm2:h-20 flex flex-col bg-green2  items-center justify-center text-base p-2">
        <div>Prefeitura de Pimenta Bueno-RO</div>
        <div>(00) 0 0000-0000</div>
      </div>
    </div>
  );
}
