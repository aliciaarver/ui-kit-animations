# UI Kit — техдока

## Стек
- React 19 + TypeScript 5.8, Vite 6 (SPA-конфиг для демо/Storybook).
- Стили: SCSS Modules; глобальные переменные через `@use "@/shared/styles/variables.scss" as *` (vite.config.ts).
- Иконки: `iconoir-react`, `lucide-react`.
- Утилиты: `clsx`.
- Storybook 9 (`@storybook/react-vite`), деплой через `gh-pages`.
- Web Components интеграция: установлен `@r2wc/react-to-web-component@^2.1.1` — entry для регистрации custom elements ещё не реализован (см. отчёты).

## Архитектура
- FSD-подобная структура: код в `src/shared/`.
  - `src/shared/ui/<Component>/` — компонент (`Component.tsx`, `*.module.scss`, `*.stories.tsx`).
  - `src/shared/styles/` — глобальные SCSS (`variables.scss`, reset).
  - `src/shared/hooks/` — React-хуки.
- Текущие компоненты: `Button`, `Typography`, `Input`, `InputPassword` (поверх `InputWrapper` + `EyeToggle`).
- `src/App.tsx` + `src/main.tsx` — демо-страница (не библиотека).

## Соглашения
- Алиас `@` → `src/`.
- Файлы компонентов — PascalCase TSX; стилевые модули — camelCase `.module.scss`.
- Импорты сортируются `@trivago/prettier-plugin-sort-imports`; lint — eslint flat config (`eslint.config.js`).
- Variants/sizes компонентов передаются пропсами; типы вынесены в `types.ts` рядом (см. `Input/types.ts`).

## Сборка и публикация
- `npm run build` = `tsc -b && vite build` — собирает SPA, не библиотеку. Library mode (`build.lib`) и отдельный entry под Web Components отсутствуют.
- `npm run deploy` / `deploy-storybook` — публикация в gh-pages.
- Базовый путь Vite: `/ui-kit-animations/`.

## Vue-совместимость
- Решение зафиксировано в `README.md`: Web Components через `@r2wc/react-to-web-component`. Vue-портов писать не планируется.
- Отклонённые задачи (см. `.tech-lead-dismissed.json`): «Стратегия совместимости…», Vue-порты Button/Input/Typography.
- Нереализовано: entry `src/web-components/index.ts` (регистрация `xopa-button`, `xopa-input`, `xopa-input-password`, `xopa-typography`, `xopa-eye-toggle`), library-build конфиг.

## Тесты
- Установлены: `vitest@3`, `@vitest/browser`, `@vitest/coverage-v8`, `playwright`, `@storybook/addon-vitest`. Конфиг — `vitest.workspace.ts`, `vitest.shims.d.ts`.
- Фактических тестов (`*.test.*`, `*.spec.*`) в `src/` **нет**.
- Политика на сейчас: визуальные/поведенческие сценарии покрываются Storybook-стори (есть для Button/Input/InputPassword/Typography). Юнит-тесты обязательны для нетривиальной логики хуков и для контракта Web Components обёртки, когда она появится.
