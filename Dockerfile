# Usa una imagen oficial de Node.js LTS (Long-Term Support).
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 1. Define una ubicación estándar para los paquetes globales de pnpm.
#    Esta es la carpeta donde pnpm almacenará los ejecutables.
ENV PNPM_HOME="/root/.local/share/pnpm"

# 2. Añade el directorio de ejecutables de pnpm al PATH del sistema.
#    Esto permite que la terminal encuentre comandos como 'ng'.
ENV PATH="${PNPM_HOME}:${PATH}"

# Habilita corepack para poder usar pnpm
RUN corepack enable

# Instala el Angular CLI globalmente. Ahora pnpm no dará error porque
# las variables de entorno PNPM_HOME y PATH están correctamente configuradas.
RUN pnpm add -g @angular/cli

# Expone el puerto por defecto de Angular
EXPOSE 4200

# Mantiene el contenedor en ejecución
CMD ["tail", "-f", "/dev/null"]