# --- Base image ---
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# --- Build image ---
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy only the project file
COPY BezpiecznyZgranyBudzet/BezpiecznyZgranyBudzet.csproj ./BezpiecznyZgranyBudzet/
RUN dotnet restore ./BezpiecznyZgranyBudzet/BezpiecznyZgranyBudzet.csproj

# Copy the entire BezpiecznyZgranyBudzet directory
COPY BezpiecznyZgranyBudzet/ ./BezpiecznyZgranyBudzet/

WORKDIR /src/BezpiecznyZgranyBudzet
RUN dotnet build BezpiecznyZgranyBudzet.csproj -c ${BUILD_CONFIGURATION} -o /app/build

# --- Publish ---
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish BezpiecznyZgranyBudzet.csproj -c ${BUILD_CONFIGURATION} -o /app/publish /p:UseAppHost=false

# --- Final ---
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Environment variables for PostgreSQL
# ENV DB_HOST=postgres
# ENV DB_PORT=5432
# ENV DB_USER=myuser
# ENV DB_PASSWORD=mypassword
# ENV DB_NAME=mydb

# Set ASP.NET Core environment
ENV ASPNETCORE_ENVIRONMENT=Development

ENTRYPOINT ["dotnet", "bzb.dll"]
