import pandas as pd
import numpy as np
import requests
import time
import urllib
import datetime

url = 'https://bootcampspot.com/api/instructor/v1/login'

data = {
  "email": "zogzmiller+ta@gmail.com",
  "password": "L0ppern!234"
}
r = requests.post(url = url, data = data)
print(r)

