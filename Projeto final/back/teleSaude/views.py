from rest_framework import viewsets
from teleSaude.models import Pacientes
from teleSaude.serealizer import PacientesSerializer

class PacientesViewSet(viewsets.ModelViewSet):
    queryset = Pacientes.objects.all() 
    serializer_class = PacientesSerializer


