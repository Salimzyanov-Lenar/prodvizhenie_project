from django.contrib import admin


from .models import InspirationImage


@admin.register(InspirationImage)
class InspirationImageAdmin(admin.ModelAdmin):
    list_display = ('caption', 'image')