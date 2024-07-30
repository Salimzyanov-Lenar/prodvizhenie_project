import json
from django.core import serializers
from django.apps import apps

data = serializers.serialize('json', apps.get_models(), ensure_ascii=False, indent=4)
with open('data.json', 'w', encoding='utf-8') as f:
    f.write(data)
