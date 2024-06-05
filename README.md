

# _Porfolio_ minimalista 

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![Docker Badge](https://img.shields.io/badge/docker-0db7ed?style=flat&logo=docker&logoColor=white)
![JSON Badge](https://img.shields.io/badge/json-f5ab59?style=flat&logo=json&logoColor=white&color=4bc61d)
</div>

_Porfolio_ minimalista configurable a través de un simple fichero JSON. 

Inspirado en el _porfolio_ de [@midudev](https://github.com/midudev/porfolio.dev), y a su vez en el de [@BartoszJarocki](https://github.com/BartoszJarocki/cv). 



<img src="docs\mockups\Web_iPhone_pika.png"></img>



## Uso

<details>
<summary>Usando este repositorio</summary>

### 1. Descarga `nodejs` en tu ordenador
### 2. Haz _fork_ de este repositorio en GitHub y luego `git clone` en local
```shell
git clone git@github.com:letesdev/portfolio.git
```
### 3. Instala todas las dependencias
```shell
cd portfolio
npm install
```
### 4. Añade tu contenido en el fichero `cv.json`.
### 5. Lanza el servidor de desarrollo
```shell
npm run dev
```
</details>

<details>
<summary>Usando la repo de @midudev como template</summary>

### 1. Usa la repo de midudev como template
```bash
# Activa pnpm en MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate

# Inicializa el proyecto
pnpm create astro@latest -- --template midudev/minimalist-portfolio-json
```
### 2. Añade tu contenido:
Edita el archivo `cv.json` para crear tu propio Portafolio/CV imprimible.

### 3. Lanza el servidor de desarrollo:
```bash
pnpm dev
```
### 4. Abre [**http://localhost:4321**](http://localhost:4321/) en tu navegador para ver el resultado 🚀

## 🧞 Comandos

|     | Comando          | Acción                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` o `start` | Lanza un servidor de desarrollo local en  `localhost:4321`.  |
| ⚙️  | `build`          | Comprueba posibles errores y hace un empaquetado de producción en `./dist/`.      |
| ⚙️  | `preview`        | Vista previa en local `localhost:4321` |

</details>

<details>
<summary>Usando la imagen `docker`de @BartoszJarocki</summary>

### 1. Construye el container
```bash
docker compose build
```

### 2. Corre el container
```bash
docker compose up
```

### 3. Para y limpia el container
```bash
Ctrl-C
docker compose down
```

</details>

##  Créditos y Licencias

- _Fork_ de [midudev/minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json), basado en el diseño de [Bartosz Jarocki](https://github.com/BartoszJarocki/cv) y esquema del JSON de CV de [jsonresume.org](https://jsonresume.org/schema/).
- [MIT](LICENSE.txt) - Creado por [**midudev**](https://midu.dev).



