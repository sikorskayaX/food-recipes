## Переменные окружения


### Переменные сборки

*Нужны только на этапе сборки*

    DEV_MODULE_URL - url сервера, раздающего статику

### Переменные приложения

*Обязательны для работы приложения*

    SERVER_URL - url сервера
    WIDGET_CONTROLLER_URL - url контроллера
    WIDGET_API_ENDPOINT - Имя эндпоинта api
    WEBSOCKET_ENDPOINT - Имя эндпоинта websocket подключения
    INTEGRATION_NAME - Имя интеграции в аккаунте

### Всего есть 4 типа сборки проекта:

#### Prod

Собранный таким образом проект загружен в АМО-маркет. В данной сборке:

- генерируется script.js, где указан путь к рядом лежащему бандлу
- генерируется manifest.json
- Создается архив
- Определяются переменные окружения


      npm run build:prod    

#### Test

Сборка, копирующая prod, но заливается на тестовый аккаунт (в будущем, мб накрутятся тесты)

    npm run build:test   

#### Dev

Сборка для разработки, рассчитана на быстрое обновление кода в АМО. Чтобы запустить:

1. Нужен сервер статики - он будет раздавать бандл. Можно воспользоваться ngrok или zrok

        npm run zrok
2. Url сервера нужно указать в DEV_MODULE_URL. При сборке в script.js импортироваться бандл будет не локально,
   как в prod или test, а по указанному url, благодаря чему, не нужно каждый раз заливать архив на аккаунт.
3. Запускается эта сборка один раз в начале

        npm run build:dev
4. Генерируются нужные файлы, создается архив. Нужно залить это в АМО.
5. Затем стоит использовать rebuild, где отключены все плагины для оптимизации

         npm run build:rebuild

Чтобы запустить сборку с dev окружением, но без динамической подгрузки модуля

        npm run build:dev:static

Для каждого типа сборки нужно создать свой <type>.env файл. Также в скрипте нужно
добавить переменную NODE_ENV с названием файла env.

### Скрипты
    "dev": "cross-env ENV_FILENAME=dev vite",
    "build:prod": "cross-env ENV_FILENAME=prod webpack --env mode=production",
    "build:dev": "cross-env ENV_FILENAME=dev webpack --env mode=development",
    "build:dev:static": "cross-env ENV_FILENAME=dev webpack --env mode=test",
    "build:test": "cross-env ENV_FILENAME=test webpack --env mode=test",
    "build:rebuild": "cross-env ENV_FILENAME=dev webpack --env mode=rebuild",


### Для запуска zrok

    "zrok": "zrok.exe share public ./widget --backend-mode web"

Чтобы скрипт работал на Windows необходимо:

1. Поместить zrok.exe в удобноую директорию, например, C:/ProgramFiles/zrok
2. Пуск -> Параметры -> Система -> О программе -> Дополнительные параметры системы -> Переменные среды
3. Добавить путь директории в переменную среды PATH

### Список зависимостей для запуски и работы сборки

    	"devDependencies": {
		"@types/node": "20.10.2",
		"@types/webpack": "5.28.5",
		"@vitejs/plugin-react": "4.0.3",
		"cross-env": "7.0.3",
		"css-loader": "6.8.1",
		"esbuild-loader": "4.0.2",
		"path": "^0.12.7",
		"sass": "1.68.0",
		"sass-loader": "13.3.2",
		"style-loader": "3.3.3",
		"ts-loader": "9.4.4",
		"ts-node": "10.9.1",
		"typescript": "5.3.2",
		"vite": "4.4.5",
		"webpack": "5.88.2",
		"webpack-cli": "5.1.4",
		"zip-lib": "0.7.3",
        "dotenv": "16.3.1",
            }