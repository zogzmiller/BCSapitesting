import pandas as pd
import numpy as np
import requests
import time
import urllib
import datetime

url = 'https://bootcampspot.com/api/instructor/v1/login/zogzmiller+ta@gmail.com/L0ppern1991'

PARAMS = {
  "email": "zogzmiller+ta@gmail.com",
  "password": "*********"
}
r = requests.get(url)

print(r.text)

