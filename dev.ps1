# Iniciar servidor ASP.NET Core
Start-Process dotnet -ArgumentList "run --configuration Debug --project AppWPF" -WindowStyle Hidden

# Iniciar Vite
npm --prefix ClientVue run dev