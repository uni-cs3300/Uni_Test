from uniapp.models import User, Course, Dept,Rating,Major,Enroll,Bookmark,Quiz,Reply
from django.contrib import admin
from django import forms
import re

class DeptForm(forms.ModelForm):
    class Meta:
        model = Dept
    
    name = forms.CharField()

    def clean_name(self):
        data = self.cleaned_data.get('name',None)
        pattern = re.compile('^[A-Z\s]{1,6}$')
        upperData = data.upper()
        if (pattern.match(upperData) == None):
            raise forms.ValidationError('Department name (abbreviated) must be less/equal to six characters!')
        return upperData

class UniAdmin(admin.ModelAdmin):
    class Meta:
        model=Dept
    form = DeptForm

admin.site.register(Dept,UniAdmin)
