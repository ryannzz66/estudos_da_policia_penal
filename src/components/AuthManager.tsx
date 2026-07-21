import React, { useState } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  signInWithPopup,
  signInAnonymously,
  GoogleAuthProvider,
  User as FirebaseUser
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { 
  Lock, 
  Mail, 
  LogIn, 
  UserPlus, 
  LogOut, 
  Cloud, 
  CheckCircle, 
  AlertCircle, 
  RefreshCw,
  Info,
  Chrome,
  Download,
  Upload,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  FileJson,
  HelpCircle,
  ShieldAlert
} from "lucide-react";
import { UserProgress, RevisionCard } from "../types";

interface AuthManagerProps {
  user: FirebaseUser | null;
  onMergeProgress: () => Promise<void>;
  isLoading: boolean;
  progress: UserProgress;
  revisions: RevisionCard[];
  onImportData: (progress: UserProgress, revisions: RevisionCard[]) => void;
}

export default function AuthManager({ 
  user, 
  onMergeProgress, 
  isLoading: parentLoading,
  progress,
  revisions,
  onImportData
}: AuthManagerProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Custom states
  const [copied, setCopied] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [backupSuccess, setBackupSuccess] = useState<string | null>(null);
  const [backupError, setBackupError] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!email || !password) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    if (isSignUp) {
      if (password.length < 6) {
        setError("A senha precisa ter pelo menos 6 caracteres.");
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError("As senhas informadas não coincidem.");
        setLoading(false);
        return;
      }
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess("Conta criada com sucesso! Seu progresso local foi sincronizado com a nuvem.");
        await onMergeProgress();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess("Login realizado com sucesso! Seus dados foram sincronizados.");
        await onMergeProgress();
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("Este e-mail já está em uso por outro usuário.");
      } else if (err.code === "auth/weak-password") {
        setError("A senha fornecida é muito fraca.");
      } else if (err.code === "auth/invalid-email") {
        setError("O formato do e-mail inserido é inválido.");
      } else if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("E-mail ou senha incorretos.");
      } else if (err.code === "auth/operation-not-allowed") {
        setError("O provedor de e-mail e senha está desativado nas configurações do Firebase. Siga o passo a passo abaixo para ativá-lo ou use o backup local.");
        setShowTroubleshooting(true);
      } else {
        setError(`Erro de Autenticação: ${err.message || err}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
      setSuccess("Login com Google realizado com sucesso! Seus dados foram sincronizados.");
      await onMergeProgress();
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/popup-closed-by-user") {
        setError("O login foi cancelado porque a janela de login do Google foi fechada.");
      } else if (err.code === "auth/operation-not-allowed") {
        setError("O login com Google não está ativo. Ative-o em 'Authentication' > 'Sign-in method' no Console do Firebase.");
        setShowTroubleshooting(true);
      } else if (err.code === "auth/unauthorized-domain" || String(err).includes("unauthorized-domain")) {
        setError("Erro: Domínio não autorizado no Firebase Auth! Siga o passo a passo do guia de configuração abaixo para liberar este domínio do AI Studio.");
        setShowTroubleshooting(true);
      } else {
        setError(`Erro ao autenticar com o Google: ${err.message || err}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await signInAnonymously(auth);
      setSuccess("Você entrou na nuvem sem criar conta. Seu progresso já pode ser salvo neste navegador.");
      await onMergeProgress();
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/operation-not-allowed") {
        setError("A autenticação anônima também está desativada no Firebase. Ative o provedor escolhido no Console ou use o backup local.");
        setShowTroubleshooting(true);
      } else {
        setError(`Erro ao entrar sem conta: ${err.message || err}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await signOut(auth);
      setSuccess("Você saiu da conta. Seu progresso agora está salvo localmente.");
    } catch (err) {
      console.error(err);
      setError("Erro ao sair da conta.");
    } finally {
      setLoading(false);
    }
  };

  // Local JSON Backup Export
  const handleExportBackup = () => {
    try {
      setBackupSuccess(null);
      setBackupError(null);
      const dataStr = JSON.stringify({ progress, revisions }, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `pprs_backup_progresso_${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setBackupSuccess("Backup exportado com sucesso! Salve o arquivo para restaurar quando quiser.");
    } catch (err) {
      console.error("Error exporting backup:", err);
      setBackupError("Erro ao gerar arquivo de backup.");
    }
  };

  // Local JSON Backup Import
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackupSuccess(null);
    setBackupError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && typeof parsed === "object") {
          const importedProgress = parsed.progress;
          const importedRevisions = parsed.revisions;

          if (importedProgress && typeof importedProgress === "object") {
            onImportData(importedProgress, importedRevisions || []);
            setBackupSuccess("Backup importado com sucesso! Todos os seus dados, revisões e histórico de estudos foram carregados.");
          } else {
            setBackupError("O arquivo de backup selecionado está em formato inválido.");
          }
        }
      } catch (err) {
        console.error("Error reading file:", err);
        setBackupError("Erro ao ler o arquivo de backup. Verifique se é um arquivo JSON válido.");
      }
    };
    reader.readAsText(file);
  };

  const copyDomainToClipboard = () => {
    navigator.clipboard.writeText(window.location.hostname);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isWorking = loading || parentLoading;

  return (
    <div className="max-w-2xl mx-auto space-y-6" id="auth-manager-view">
      
      {/* Primary Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-8 animate-fade-in">
        
        {/* Title Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="mx-auto w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center">
            <Cloud className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {user ? "Sua Conta Sincronizada" : "Sincronização em Nuvem"}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            {user 
              ? "Você está logado. Seu progresso é salvo em tempo real e está acessível em qualquer dispositivo." 
              : "Crie uma conta para salvar suas estatísticas, caderno de erros e progresso de edital. Acesse pelo PC ou celular sem perder nada!"}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-400 animate-slide-up">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">Falha de Autenticação</span>
              <span className="font-medium block leading-relaxed">{error}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 flex items-start gap-2.5 text-xs text-emerald-700 dark:text-emerald-400 animate-slide-up">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="font-medium">{success}</span>
          </div>
        )}

        {user ? (
          /* Logged In State */
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-150 dark:border-slate-850 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm text-white">
                  {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Conta Ativa</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block truncate">{user.email}</span>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Sincronização Ativa
                </span>
                <span className="text-slate-400 dark:text-slate-500 font-medium">Salvo na Nuvem</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/40 flex items-start gap-2.5 text-[11px] text-indigo-700 dark:text-indigo-400 leading-relaxed font-medium">
              <Info className="w-4 h-4 shrink-0 text-indigo-500 mt-0.5" />
              <span>Qualquer alteração feita no edital verticalizado, simulador ou caderno de erros será gravada automaticamente nesta conta para acesso no seu celular ou outros navegadores.</span>
            </div>

            <button
              onClick={handleLogout}
              disabled={isWorking}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-750 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white font-bold text-xs cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              {isWorking ? (
                <RefreshCw className="w-4 h-4 animate-spin text-slate-400" />
              ) : (
                <LogOut className="w-4 h-4" />
              )}
              Sair da Conta
            </button>
          </div>
        ) : (
          /* Auth forms (Sign In or Sign Up) */
          <form onSubmit={handleAuth} className="space-y-4">
            
            {/* Google Sign-In Option */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isWorking}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white font-bold text-xs cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              <Chrome className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              {isSignUp ? "Cadastrar com Google (Recomendado)" : "Entrar com Google"}
            </button>

            <button
              type="button"
              onClick={handleAnonymousLogin}
              disabled={isWorking}
              className="w-full py-2.5 px-4 rounded-xl border border-teal-200 dark:border-teal-900 hover:bg-teal-50 dark:hover:bg-teal-950/20 text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200 font-bold text-xs cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              <Cloud className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Salvar na Nuvem sem Criar Conta
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-slate-100 dark:bg-slate-800 flex-1"></div>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ou usar e-mail</span>
              <div className="h-px bg-slate-100 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="space-y-1">
              <label className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">E-mail</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@exemplo.com"
                  disabled={isWorking}
                  className="w-full bg-slate-50 hover:bg-slate-100/50 dark:bg-slate-850/50 dark:hover:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-800 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Senha</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  disabled={isWorking}
                  className="w-full bg-slate-50 hover:bg-slate-100/50 dark:bg-slate-850/50 dark:hover:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-800 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {isSignUp && (
              <div className="space-y-1 animate-slide-up">
                <label className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Confirmar Senha</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repita sua senha"
                    disabled={isWorking}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 dark:bg-slate-850/50 dark:hover:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-xl py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-800 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isWorking}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              {isWorking ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : isSignUp ? (
                <UserPlus className="w-4 h-4" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              {isSignUp ? "Criar Minha Conta" : "Entrar na Minha Conta"}
            </button>

            <div className="text-center pt-2.5 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                  setSuccess(null);
                }}
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold text-xs cursor-pointer transition-colors"
              >
                {isSignUp ? "Já tem uma conta? Entre aqui" : "Não tem conta? Crie uma de graça"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Local JSON Backup Card (100% Reliable Backup Option) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900 flex items-center justify-center">
            <FileJson className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Backup por Arquivo (Segurança Total)</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Exporte seu progresso para salvar localmente ou transferir de aparelho sem precisar do Firebase!</p>
          </div>
        </div>

        {backupSuccess && (
          <div className="mb-4 p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-700 dark:text-emerald-400">
            {backupSuccess}
          </div>
        )}

        {backupError && (
          <div className="mb-4 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 text-xs text-red-700 dark:text-red-400">
            {backupError}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleExportBackup}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs cursor-pointer transition-all shadow-2xs"
          >
            <Download className="w-4 h-4" />
            Exportar Progresso (.json)
          </button>

          <label className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-dashed border-teal-200 dark:border-teal-800 hover:bg-teal-50/50 dark:hover:bg-teal-950/10 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-bold text-xs cursor-pointer transition-all">
            <Upload className="w-4 h-4" />
            Importar Progresso (.json)
            <input 
              type="file" 
              accept=".json" 
              onChange={handleImportBackup} 
              className="hidden" 
            />
          </label>
        </div>
      </div>

      {/* Dynamic Firebase Configuration Troubleshooting Guide */}
      <div className="bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-150 dark:border-slate-800 p-6">
        <button
          onClick={() => setShowTroubleshooting(!showTroubleshooting)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Guia de Configuração do Firebase</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Como ativar o cadastro por e-mail e autorizar este domínio em 1 minuto.</p>
            </div>
          </div>
          {showTroubleshooting ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {showTroubleshooting && (
          <div className="mt-5 space-y-5 text-xs text-slate-600 dark:text-slate-350 border-t border-slate-200 dark:border-slate-800 pt-5 animate-slide-up">
            
            {/* Guide 1: Enable Email/Password Provider */}
            <div className="space-y-2 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-3xs">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[11px]">1</span>
                Habilitar Login por E-mail e Senha:
              </h4>
              <p className="text-[11px] leading-relaxed pl-6 text-slate-500 dark:text-slate-400">
                Se você recebeu o erro de "provedor desativado", habilite-o no painel do Firebase:
              </p>
              <ol className="list-decimal list-inside pl-6 space-y-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                <li>Acesse o <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-bold">Console do Firebase</a>.</li>
                <li>Selecione o projeto do seu aplicativo.</li>
                <li>No menu lateral, vá em <strong>Build</strong> &gt; <strong>Authentication</strong>.</li>
                <li>Acesse a aba <strong>Sign-in method</strong> (Método de login).</li>
                <li>Clique em <strong>Add new provider</strong> (Adicionar novo provedor) ou selecione <strong>E-mail/Senha</strong>.</li>
                <li>Ative a primeira opção (Habilitar) e clique em <strong>Salvar</strong>.</li>
              </ol>
            </div>

            {/* Guide 1b: Enable Anonymous Authentication */}
            <div className="space-y-2 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-3xs">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-[11px]">2</span>
                Habilitar Login Anônimo (botão “Salvar na Nuvem sem Criar Conta”):
              </h4>
              <p className="text-[11px] leading-relaxed pl-6 text-slate-500 dark:text-slate-400">
                Esse modo salva seus dados em nuvem sem exigir criação de conta, mas também precisa estar habilitado no Firebase.
              </p>
              <ol className="list-decimal list-inside pl-6 space-y-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                <li>No <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-bold">Console do Firebase</a>, vá em <strong>Build</strong> &gt; <strong>Authentication</strong>.</li>
                <li>Acesse a aba <strong>Sign-in method</strong> (Método de login).</li>
                <li>Localize o provedor <strong>Anonymous</strong> (Anônimo).</li>
                <li>Clique em <strong>Enable</strong> e salve as alterações.</li>
              </ol>
            </div>

            {/* Guide 1c: Enable Google Authentication */}
            <div className="space-y-2 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-3xs">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-[11px]">3</span>
                Habilitar Login com Google:
              </h4>
              <p className="text-[11px] leading-relaxed pl-6 text-slate-500 dark:text-slate-400">
                O botão de Google também depende de configuração no Firebase e de domínio autorizado.
              </p>
              <ol className="list-decimal list-inside pl-6 space-y-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                <li>Em <strong>Authentication</strong> &gt; <strong>Sign-in method</strong>, localize <strong>Google</strong>.</li>
                <li>Clique em <strong>Enable</strong>, escolha um e-mail de suporte e salve.</li>
                <li>Depois, siga o passo 4 para autorizar o domínio do navegador.</li>
              </ol>
            </div>

            {/* Guide 2: Add authorized redirect domain */}
            <div className="space-y-2.5 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-3xs">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[11px]">4</span>
                Autorizar este Domínio (unauthorized-domain):
              </h4>
              <p className="text-[11px] leading-relaxed pl-6 text-slate-500 dark:text-slate-400">
                O Google Sign-In exige que o domínio do navegador esteja na lista de domínios seguros do Firebase.
              </p>
              
              <div className="pl-6 space-y-2">
                <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-150 dark:border-slate-850 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Copie este domínio</span>
                    <span className="font-mono text-[11.5px] text-slate-800 dark:text-slate-200 block truncate font-bold">{window.location.hostname}</span>
                  </div>
                  <button
                    onClick={copyDomainToClipboard}
                    className="py-1.5 px-3 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:bg-slate-50 hover:text-slate-800 font-bold text-[10.5px] cursor-pointer flex items-center gap-1 shrink-0 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copiar Domínio</span>
                      </>
                    )}
                  </button>
                </div>

                <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                  <li>No <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-bold">Console do Firebase</a>, vá em <strong>Build</strong> &gt; <strong>Authentication</strong>.</li>
                  <li>Acesse a aba <strong>Settings</strong> (Configurações) no topo do painel.</li>
                  <li>No menu esquerdo das configurações, clique em <strong>Authorized domains</strong> (Domínios autorizados).</li>
                  <li>Clique em <strong>Add domain</strong> (Adicionar domínio).</li>
                  <li>Cole o domínio copiado acima e clique em <strong>Add</strong>.</li>
                </ol>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 text-[10.5px] text-amber-800 dark:text-amber-400 leading-relaxed font-medium">
              💡 <strong>Nota Importante:</strong> O ambiente do AI Studio usa domínios dinâmicos e temporários. Se o endereço mudar, repita o cadastro do domínio. Para teste local, <strong>localhost</strong> também precisa estar autorizado.
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
