# Используем базовый образ Python для Django
FROM python:alpine

# Установим переменную окружения для отключения вывода в консоль Python
ENV PYTHONUNBUFFERED 1

# Установим рабочую директорию
WORKDIR /app

# Копируем зависимости и устанавливаем их
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Копируем все остальные файлы проекта
COPY . /app/

# Запускаем Django приложение
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
