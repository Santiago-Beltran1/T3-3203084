#Requests
import requests 
respuesta = requests.get("https://api:github.com")
print(respuesta.status_code)
print(respuesta.text)

r = requests.get("https://randomuser.me/api/")
usuario = r.json()
print(usuario)
