# UI Kit — техдока

## Стек
- React 19 + TypeScript 5.8, Vite 6.
- Стили: SCSS Modules; глобальные переменные через `@use "@/shared/styles/variables.scss" as *` (vite.config.ts).
- Иконки: `iconoir-react`, `lucide-react`.
- Утилиты: `clsx`.
- Storybook 9 (`@storybook/react-vite`), деплой через `gh-pages`.
- Web Components: `@r2wc/react-to-web-component@^2.1.1`, entry — `src/shared/ui/web-components/index.ts`.

## Архитектура
- FSD-подобная структура: код в `src/shared/`.
  - `src/shared/ui/<Component>/` — компонент (`Component.tsx`, `*.module.scss`, `*.stories.tsx`).
  - `src/shared/ui/web-components/` — единый entry, регистрирующий React-компоненты как custom elements (`xopa-input`, `xopa-input-password`, `xopa-eye-toggle`).
  - `src/shared/styles/` — глобальные SCSS (`variables.scss`, reset).
  - `src/shared/hooks/` — React-хуки.
- Компоненты: `Button`, `Typography`, `Input`, `InputPassword` (на `InputWrapper` + `EyeToggle`).
- Vue-порты (SFC) лежат рядом с React-исходниками: `Button/Button.vue`, `Typography/Typography.vue` — для консьюмеров на Vue, которые предпочитают нативный SFC.

## Стратегия Vue-совместимости (смешанная)
- Принято в `README.md`: основной механизм — Web Components обёртка через `@r2wc/react-to-web-component`.
- Фактически в коде применена смешанная стратегия:
  - WC-обёртки: `Input`, `InputPassword`, `EyeToggle`.
  - Vue SFC-порты: `Button`, `Typography`.
- Следствие: ответственность за каждый компонент дублируется лишь там, где SFC-вариант осознанно выбран. Обёртки и порты живут в одном пакете.
- Отклонённые задачи (см. `.tech-lead-dismissed.json`): «Стратегия совместимости…», Vue-порты Button/Input/Typography (последние сделаны фактически — задачи закрыты).

## Соглашения
- Алиас `@` → `src/`.
- Файлы компонентов — PascalCase TSX/Vue; стилевые модули — camelCase `.module.scss`.
- Импорты сортируются `@trivago/prettier-plugin-sort-imports`; lint — eslint flat config (`eslint.config.js`).
- Variants/sizes компонентов передаются пропсами; типы вынесены в `types.ts` рядом (см. `Input/types.ts`).

## Сборка и публикация
- `npm run build` = `tsc -b && vite build` — собирает SPA-демо.
- Web Components сборка — `vite build --mode web-components` (см. условную ветку в `vite.config.ts`, output → `dist/web-components/index.js`, `react`/`react-dom` external). Отдельного npm-скрипта пока нет.
- `package.json` без полей `exports`/`main`/`module`/`files` — пакет ещё не оформлен как библиотека для внешнего потребления.
- `npm run deploy` / `deploy-storybook` — публикация в gh-pages.
- Базовый путь Vite: `/ui-kit-animations/`.

## Тесты
- Установлены: `vitest@3`, `@vitest/browser`, `@vitest/coverage-v8`, `playwright`, `@storybook/addon-vitest`. Конфиг — `vitest.workspace.ts`, `vitest.shims.d.ts`.
- Фактических тестов (`*.test.*`, `*.spec.*`) в `src/` **нет**.
- Политика на сейчас: визуальные/поведенческие сценарии покрываются Storybook-стори (есть для Button/Input/InputPassword/Typography + `WebComponents.stories.tsx`). Юнит-тесты обязательны для нетривиальной логики хуков и для контракта Web Components обёртки (типы атрибутов ↔ пропсы).
