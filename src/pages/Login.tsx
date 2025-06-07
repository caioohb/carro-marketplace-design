import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ login: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    if (formData.login === 'admin' && formData.password === '1234567890') {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo, Administrador",
      });
      login('admin@talentoveiculos.com.br', 'admin');
      navigate('/admin/sales-dashboard'); // Redireciona admin para dashboard
    } else if (formData.login === 'user' && formData.password === '1234567890') {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo, Usuário",
      });
      login('user@talentoveiculos.com.br', 'user');
      navigate('/favorites'); // Redireciona usuário para favorites
    } else {
      toast({
        title: "Erro no login",
        description: "Login ou senha incorretos",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary to-brand-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-brand-primary">
            TALENTO VEÍCULOS
          </CardTitle>
          <CardDescription>
            Faça login para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Login"
                value={formData.login}
                onChange={(e) => setFormData({...formData, login: e.target.value})}
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
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
          
          <div className="mt-6 space-y-3">
            <div className="text-center text-sm text-muted-foreground">
              <p>Credenciais de teste:</p>
            </div>
            <div className="bg-muted p-3 rounded-md text-sm">
              <p><strong>Admin:</strong> admin / 1234567890</p>
              <p><strong>Usuário:</strong> user / 1234567890</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Não tem conta?{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-brand-primary hover:underline font-medium"
              >
                Cadastre-se
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
