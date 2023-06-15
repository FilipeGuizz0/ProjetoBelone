from django.contrib import admin
from teleSaude.models import Pacientes


class Consultas(admin.ModelAdmin):
    list_display = ('id', 'nome', 'idade', 'cpf')
    list_display_links = ('id', 'nome', 'idade', 'cpf')
    search_fields = ('nome', 'id')

admin.site.register(Pacientes, Consultas)
