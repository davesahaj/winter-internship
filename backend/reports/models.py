from backend import reports
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.lookups import GreaterThan

User = get_user_model()


class Content(models.Model):
    c_title = models.CharField(max_length=200)
    c_url = models.CharField(max_length=400)
    c_word_count = models.IntegerField(default=0)
    c_readibility = models.CharField()
    c_kw_used = models.IntegerField(default=0)
    c_p_tags = models.IntegerField(default=0)
    c_h_tags = models.IntegerField(default=0)
    c_text = models.CharField()
    report = models.ForeignKey("Report", on_delete=models.CASCADE)


class Report(models.Model):
    CHC_LANG = (("English", "English"), ("Hindi", "Hindi"))
    # https://stackoverflow.com/questions/6928692/how-to-express-a-one-to-many-relationship-in-django
    content = models.ForeignKey(Content)
    r_id = models.BigAutoField(primary_key=True)
    r_status = models.BooleanField()
    r_date = models.DateField()
    r_lang = models.Charfield(max_length=100, choices=CHC_LANG)
    r_title = models.Charfield(max_length=200)
