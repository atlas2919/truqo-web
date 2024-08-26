
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Registro</h1>
        <p className="text-gray-500 dark:text-gray-400">Ingresa tus datos para crear una cuenta</p>
      </div>
      <form className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" placeholder="Nombre" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="apellido">Apellido</Label>
          <Input id="Apellido" placeholder="Apellido" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cedula">Número de cédula</Label>
          <Input id="cedula" type="text" placeholder="Ingresa tu número de cédula" required />
        </div>

        <Button type="submit" className="w-full">
          Registrarse
        </Button>

      </form>
    </div>
  )
}