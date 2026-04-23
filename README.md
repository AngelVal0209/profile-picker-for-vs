#  Profile Picker

> Selector de perfiles nativo para Visual Studio Code: rápido, minimalista y enfocado en productividad.

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://marketplace.visualstudio.com/items?itemName=profile-picker)
[![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.116.0-blue.svg)](https://code.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ ¿Qué es Profile Picker?

Profile Picker es una extensión ligera para Visual Studio Code que automatiza la selección de perfiles al iniciar el editor. Diseñada para desarrolladores que trabajan con múltiples entornos, ofrece una interfaz nativa y rápida para gestionar perfiles sin interrumpir el flujo de trabajo.

### 🎯 Problema que resuelve

Los perfiles de VS Code permiten configurar entornos personalizados (extensiones, configuraciones, atajos), pero cambiar entre ellos requiere navegar por menús. Profile Picker elimina esta fricción mostrando un selector automático al iniciar VS Code.

---

## ⚡ Características principales

- **🚀 Selector automático**: Aparece automáticamente al abrir VS Code (después de 800ms)
- **🔄 Cambio rápido**: Acceso directo al selector oficial de perfiles de VS Code
- **➕ Creación sencilla**: Crear nuevos perfiles desde la interfaz
- **🖥 Nativo**: Utiliza QuickPick nativo de VS Code, compatible con todos los temas
- **🪶 Ligero**: Sin webviews ni interfaces pesadas, consumo mínimo de recursos
- **⚡ Rápido**: Ejecución instantánea, sin delays perceptibles

---

## 📸 Interfaz de usuario

```text
┌──────────────────────────────────┐
│ Profile Picker                   │
├──────────────────────────────────┤
│ $(sync) Cambiar perfil           │
│ $(add) Crear nuevo perfil        │
│ $(arrow-right) Continuar         │
└──────────────────────────────────┘
```

---

## 🛠 Instalación

### Desde VS Code Marketplace

1. Abre Visual Studio Code
2. Presiona `Ctrl+Shift+X` para abrir Extensiones
3. Busca: `Profile Picker`
4. Haz clic en **Instalar**
5. Reinicia VS Code

### Desde código fuente

```bash
git clone https://github.com/tu-usuario/profile-picker.git
cd profile-picker
npm install
npm run compile
code --install-extension profile-picker-0.0.1.vsix
```

---

## 🎮 Uso

### Automático
Al iniciar VS Code, el selector aparece automáticamente después de cargar la interfaz.

### Manual
- Presiona `Ctrl+Shift+P`
- Ejecuta: `Profile Picker: Abrir Selector`

### Opciones disponibles

- **Cambiar perfil**: Abre el selector oficial de perfiles de VS Code
- **Crear nuevo perfil**: Inicia el asistente de creación de perfiles
- **Continuar**: Cierra el selector y continúa con VS Code normal

---

## 🏗 Arquitectura técnica

```
src/
├── extension.ts          # Punto de entrada, activación automática
├── commands/
│   └── mostrarSelector.ts # Comando principal
├── services/
│   └── profileService.ts  # Lógica de perfiles (cambio, creación)
├── types/
│   └── profile.ts         # Tipos TypeScript
├── ui/
│   └── profilePickerUI.ts # Interfaz QuickPick
└── utils/
    └── profileUtils.ts    # Utilidades auxiliares
```

### Tecnologías

- **TypeScript**: Lenguaje principal
- **VS Code Extension API**: API nativa para integraciones
- **ESLint**: Linting y calidad de código
- **Mocha**: Framework de testing

---

## ⚙ Configuración

La extensión no requiere configuración adicional. Se activa automáticamente con el evento `onStartupFinished`.

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `profile-picker.abrirSelector` | Abre el selector de perfiles |

---

## 🧪 Desarrollo

### Prerrequisitos

- Node.js 16+
- VS Code 1.116.0+

### Scripts disponibles

```bash
npm run compile    # Compilar TypeScript
npm run watch      # Compilación en modo watch
npm run lint       # Ejecutar ESLint
npm run test       # Ejecutar tests
```

### Estructura de desarrollo

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Compila: `npm run compile`
4. Presiona `F5` para abrir en modo debug

---

## 📈 Estado del proyecto

- ✅ **Versión actual**: 0.0.1 (Inicial)
- ✅ **Compatibilidad**: VS Code ^1.116.0
- ✅ **Arquitectura**: Completa y funcional
- 🚧 **Próximas mejoras**: Soporte para perfiles personalizados, atajos de teclado

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Guías de contribución

- Sigue el estilo de código existente
- Agrega tests para nuevas funcionalidades
- Actualiza la documentación según sea necesario

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- Inspirado en la necesidad de flujos de trabajo eficientes en desarrollo
- Gracias a la comunidad de VS Code por la excelente API de extensiones

---

## 📞 Soporte

Si encuentras problemas o tienes sugerencias:

- Abre un [issue](https://github.com/tu-usuario/profile-picker/issues) en GitHub
- Revisa el [CHANGELOG](CHANGELOG.md) para cambios recientes