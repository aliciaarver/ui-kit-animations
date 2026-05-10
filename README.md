# UI Kit With Animations

React 19, TypeScript, SCSS, Storybook.

## Стратегия совместимости с Vue-консьюмерами

**Контекст.** Кит написан на React 19. Минимум один консьюмер (`tg_parser/frontend`) — на Vue 3. Прямой импорт React-компонентов из Vue невозможен, единой стратегии до сих пор не было.

### Рассмотренные варианты

| Вариант | Стоимость | Поддержка | Минусы |
|---|---|---|---|
| Отдельный пакет `ui-kit-vue` (порт) | Высокая: каждый компонент пишется дважды; визуальная регрессия и анимации синхронизируются вручную | Двойная: каждое изменение в React-версии повторяется в Vue | Гарантированный дрейф API и стилей; удваивает Storybook и тесты |
| Web Components обёртка (`@r2wc/react-to-web-component`) | Низкая: один пакет, тонкая обёртка над существующими React-компонентами | Одна кодовая база — React | Ограничения Custom Elements: события через `CustomEvent`, slots вместо `children`, стили через Shadow DOM (или явный light DOM) |
| Официальный отказ от поддержки Vue | Нулевая для кита | Нулевая | Vue-консьюмеры остаются без UI-кита — это уже блокер |

### Принятое решение — Web Components обёртка через `@r2wc/react-to-web-component`

**Почему:**
- Кит остаётся пакетом на React; Storybook, тесты и pipeline релизов не дублируются.
- Vue 3 нативно поддерживает кастомные элементы (`compilerOptions.isCustomElement`), интеграция в консьюмере — одна строка в `vite.config.ts`.
- API кита остаётся единым источником правды: правки доходят до Vue-консьюмеров автоматически после релиза.
- Отказ от поддержки Vue не вариант: `tg_parser/frontend` — продуктовый консьюмер, переписывать его на React дороже, чем поднять обёртку.

**Что делает кит:**
1. Публикует основной артефакт (React-компоненты) — как сейчас.
2. Дополнительно собирает entry `dist/web-components/index.js`, регистрирующий компоненты из `src/shared/ui/*` как custom elements (`xopa-button`, `xopa-input`, `xopa-input-password`, `xopa-typography`, `xopa-eye-toggle`).
3. Каркас обёртки и сборка добавляются отдельной задачей — здесь зафиксирована только стратегия.

**Что должны сделать Vue-консьюмеры:**
1. Подключить `@xopa/ui-kit/web-components` в `main.ts`.
2. В `vite.config.ts` пометить теги `xopa-*` как custom elements:
   ```ts
   vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('xopa-') } } })
   ```
3. События принимать через `@event-name` (CustomEvent), значения — через атрибуты/props CE.

Каскадные правки фиксируются в `TECH-LEAD.md` каждого Vue-консьюмера отдельными задачами.

### Структура репо

Решение **не требует** перехода на монорепо или создания отдельного пакета `ui-kit-vue`: всё остаётся в текущем пакете `ui-kit`, добавляется только дополнительная entry-точка сборки.

## Скрипты

- `npm run dev` — vite dev-сервер
- `npm run build` — `tsc -b && vite build`
- `npm run storybook` — Storybook на `:6006`
- `npm run lint` — ESLint
- `npm run format` — Prettier
