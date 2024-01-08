# Use an official Python runtime as a parent image
FROM python:3.11.3

# Set the working directory inside the container
WORKDIR /app

# Install PostgreSQL development files and other dependencies
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Copy the entire backend directory into the container
COPY ../backend/ .

# Set the working directory to the backend directory
WORKDIR /app/backend

# Create and activate the virtual environment
RUN python -m venv venv
ENV PATH="/app/backend/venv/bin:$PATH"

# Install dependencies
RUN /bin/bash -c "source venv/bin/activate && pip install --upgrade pip && pip install -r requirements.txt"

# Set the working directory back to the /app directory
WORKDIR /app

# Copy the rest of the application code into the container
COPY . .

# Create a virtual environment and activate it
RUN python3 -m venv /opt/venv
RUN . /opt/venv/bin/activate

# Install any dependencies
RUN pip install -r requirements.txt

# Run migrations during release phase
CMD ["python", "manage.py", "migrate"]

# Run Gunicorn to serve the application.
CMD ["gunicorn", "web.wsgi"]