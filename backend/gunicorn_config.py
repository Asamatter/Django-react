workers = 4  
bind = f"0.0.0.0:{int(os.environ.get('PGPORT', 8000))}"
loglevel = "info"
capture_output = True
errorlog = '-'
