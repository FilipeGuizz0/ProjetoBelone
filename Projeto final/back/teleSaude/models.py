from django.db import models

class Pacientes(models.Model):
    nome = models.CharField(max_length=50)
    idade = models.BigIntegerField(max_length=3)
    cpf = models.BigIntegerField(max_length=11)

    def __str__(self):
        return self.nome
        
