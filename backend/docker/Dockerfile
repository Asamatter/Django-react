# Use an official Python runtime as a parent image
FROM python:3.11.3

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install PostgreSQL development files and other dependencies
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Create and activate the virtual environment
RUN python -m venv venv
RUN /bin/bash -c "source venv/bin/activate"

# Install dependencies
RUN . /app/venv/bin/activate && pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Run migrations during release phase
CMD ["python", "manage.py", "migrate"]

# Run Gunicorn to serve the application.
CMD ["gunicorn", "web.wsgi"]