from rest_framework import serializers
from teleSaude.models import Pacientes

class PacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pacientes
        fields = ('id', 'nome', 'idade', 'cpf')
   