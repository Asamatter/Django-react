# Use an official Python runtime as a parent image
FROM python:3.11.3

# Set the working directory inside the container
WORKDIR /app/backend

# Install PostgreSQL development files and other dependencies
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Copy the requirements.txt file into the container
COPY ../requirements.txt .

# Create and activate the virtual environment
RUN python -m venv venv
ENV PATH="/app/backend/venv/bin:$PATH"

# Install dependencies
RUN /bin/bash -c "source venv/bin/activate && pip install --upgrade pip && pip install -r ../requirements.txt"

# Copy the rest of the application code into the container
COPY . .


# Run migrations during release phase
CMD ["python", "manage.py", "migrate"]

# Run Gunicorn to serve the application.
CMD ["gunicorn", "web.wsgi"]