
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro no cadastro",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return;
    }

    // Mock registration - apenas visual
    toast({
      title: "Cadastro realizado!",
      description: "Sua conta foi criada com sucesso (mockado)",
    });
    
    // Redirecionar para login após 2 segundos
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary to-brand-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-brand-primary">
            CRIAR CONTA
          </CardTitle>
          <CardDescription>
            Cadastre-se na Talento Veículos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Telefone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Criar Conta
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Já tem conta?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="text-brand-primary hover:underline font-medium"
              >
                Faça login
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-sm text-muted-foreground hover:text-brand-primary"
            >
              ← Voltar para o início
            </button>
          </div>

          <div className="mt-6 p-3 bg-muted rounded-md text-sm text-muted-foreground">
            <p><strong>Nota:</strong> Este é apenas um protótipo. Os dados não serão armazenados.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
